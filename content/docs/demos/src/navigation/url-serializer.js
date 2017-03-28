import { OpaqueToken } from '@angular/core';
import { isArray, isBlank, isPresent } from '../util/util';
/**
 * @private
 */
export var UrlSerializer = (function () {
    function UrlSerializer(config) {
        if (config && isArray(config.links)) {
            this.links = normalizeLinks(config.links);
        }
        else {
            this.links = [];
        }
    }
    /**
     * Parse the URL into a Path, which is made up of multiple NavSegments.
     * Match which components belong to each segment.
     */
    UrlSerializer.prototype.parse = function (browserUrl) {
        if (browserUrl.charAt(0) === '/') {
            browserUrl = browserUrl.substr(1);
        }
        // trim off data after ? and #
        browserUrl = browserUrl.split('?')[0].split('#')[0];
        return parseUrlParts(browserUrl.split('/'), this.links);
    };
    UrlSerializer.prototype.createSegmentFromName = function (nameOrComponent) {
        var configLink = this.links.find(function (link) {
            return (link.component === nameOrComponent) ||
                (link.name === nameOrComponent) ||
                (link.component.name === nameOrComponent);
        });
        return configLink ? {
            id: configLink.name,
            name: configLink.name,
            component: configLink.component,
            data: null,
            defaultHistory: configLink.defaultHistory
        } : null;
    };
    /**
     * Serialize a path, which is made up of multiple NavSegments,
     * into a URL string. Turn each segment into a string and concat them to a URL.
     */
    UrlSerializer.prototype.serialize = function (path) {
        return '/' + path.map(function (segment) { return segment.id; }).join('/');
    };
    /**
     * Serializes a component and its data into a NavSegment.
     */
    UrlSerializer.prototype.serializeComponent = function (component, data) {
        if (component) {
            var link = findLinkByComponentData(this.links, component, data);
            if (link) {
                return this.createSegment(link, data);
            }
        }
        return null;
    };
    UrlSerializer.prototype.createSegment = function (configLink, data) {
        var urlParts = configLink.parts;
        if (isPresent(data)) {
            // create a copy of the original parts in the link config
            urlParts = urlParts.slice();
            // loop through all the data and convert it to a string
            var keys = Object.keys(data);
            var keysLength = keys.length;
            if (keysLength) {
                for (var i = 0; i < urlParts.length; i++) {
                    if (urlParts[i].charAt(0) === ':') {
                        for (var j = 0; j < keysLength; j++) {
                            if (urlParts[i] === ":" + keys[j]) {
                                // this data goes into the URL part (between slashes)
                                urlParts[i] = encodeURIComponent(data[keys[j]]);
                                break;
                            }
                        }
                    }
                }
            }
        }
        return {
            id: urlParts.join('/'),
            name: configLink.name,
            component: configLink.component,
            data: data,
            defaultHistory: configLink.defaultHistory
        };
    };
    UrlSerializer.prototype.formatUrlPart = function (name) {
        name = name.replace(URL_REPLACE_REG, '-');
        name = name.charAt(0).toLowerCase() + name.substring(1).replace(/[A-Z]/g, function (match) {
            return '-' + match.toLowerCase();
        });
        while (name.indexOf('--') > -1) {
            name = name.replace('--', '-');
        }
        if (name.charAt(0) === '-') {
            name = name.substring(1);
        }
        if (name.substring(name.length - 1) === '-') {
            name = name.substring(0, name.length - 1);
        }
        return encodeURIComponent(name);
    };
    return UrlSerializer;
}());
export var parseUrlParts = function (urlParts, configLinks) {
    var configLinkLen = configLinks.length;
    var urlPartsLen = urlParts.length;
    var segments = new Array(urlPartsLen);
    for (var i = 0; i < configLinkLen; i++) {
        // compare url parts to config link parts to create nav segments
        var configLink = configLinks[i];
        if (configLink.partsLen <= urlPartsLen) {
            fillMatchedUrlParts(segments, urlParts, configLink);
        }
    }
    // remove all the undefined segments
    for (var i = urlPartsLen - 1; i >= 0; i--) {
        if (segments[i] === undefined) {
            if (urlParts[i] === undefined) {
                // not a used part, so remove it
                segments.splice(i, 1);
            }
            else {
                // create an empty part
                segments[i] = {
                    id: urlParts[i],
                    name: urlParts[i],
                    component: null,
                    data: null
                };
            }
        }
    }
    return segments;
};
export var fillMatchedUrlParts = function (segments, urlParts, configLink) {
    for (var i = 0; i < urlParts.length; i++) {
        var urlI = i;
        for (var j = 0; j < configLink.partsLen; j++) {
            if (isPartMatch(urlParts[urlI], configLink.parts[j])) {
                urlI++;
            }
            else {
                break;
            }
        }
        if ((urlI - i) === configLink.partsLen) {
            var matchedUrlParts = urlParts.slice(i, urlI);
            for (var j = i; j < urlI; j++) {
                urlParts[j] = undefined;
            }
            segments[i] = {
                id: matchedUrlParts.join('/'),
                name: configLink.name,
                component: configLink.component,
                data: createMatchedData(matchedUrlParts, configLink),
                defaultHistory: configLink.defaultHistory
            };
        }
    }
};
export var isPartMatch = function (urlPart, configLinkPart) {
    if (isPresent(urlPart) && isPresent(configLinkPart)) {
        if (configLinkPart.charAt(0) === ':') {
            return true;
        }
        return (urlPart === configLinkPart);
    }
    return false;
};
export var createMatchedData = function (matchedUrlParts, link) {
    var data = null;
    for (var i = 0; i < link.partsLen; i++) {
        if (link.parts[i].charAt(0) === ':') {
            data = data || {};
            data[link.parts[i].substring(1)] = decodeURIComponent(matchedUrlParts[i]);
        }
    }
    return data;
};
export var findLinkByComponentData = function (links, component, instanceData) {
    var foundLink = null;
    var foundLinkDataMatches = -1;
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        if (link.component === component) {
            // ok, so the component matched, but multiple links can point
            // to the same component, so let's make sure this is the right link
            var dataMatches = 0;
            if (instanceData) {
                var instanceDataKeys = Object.keys(instanceData);
                // this link has data
                for (var j = 0; j < instanceDataKeys.length; j++) {
                    if (isPresent(link.dataKeys[instanceDataKeys[j]])) {
                        dataMatches++;
                    }
                }
            }
            else if (link.dataLen) {
                // this component does not have data but the link does
                continue;
            }
            if (dataMatches >= foundLinkDataMatches) {
                foundLink = link;
                foundLinkDataMatches = dataMatches;
            }
        }
    }
    return foundLink;
};
export var normalizeLinks = function (links) {
    for (var i = 0, ilen = links.length; i < ilen; i++) {
        var link = links[i];
        if (isBlank(link.segment)) {
            link.segment = link.name;
        }
        link.dataKeys = {};
        link.parts = link.segment.split('/');
        link.partsLen = link.parts.length;
        // used for sorting
        link.staticLen = link.dataLen = 0;
        var stillCountingStatic = true;
        for (var j = 0; j < link.partsLen; j++) {
            if (link.parts[j].charAt(0) === ':') {
                link.dataLen++;
                stillCountingStatic = false;
                link.dataKeys[link.parts[j].substring(1)] = true;
            }
            else if (stillCountingStatic) {
                link.staticLen++;
            }
        }
    }
    // sort by the number of parts, with the links
    // with the most parts first
    return links.sort(sortConfigLinks);
};
function sortConfigLinks(a, b) {
    // sort by the number of parts
    if (a.partsLen > b.partsLen) {
        return -1;
    }
    if (a.partsLen < b.partsLen) {
        return 1;
    }
    // sort by the number of static parts in a row
    if (a.staticLen > b.staticLen) {
        return -1;
    }
    if (a.staticLen < b.staticLen) {
        return 1;
    }
    // sort by the number of total data parts
    if (a.dataLen < b.dataLen) {
        return -1;
    }
    if (a.dataLen > b.dataLen) {
        return 1;
    }
    return 0;
}
var URL_REPLACE_REG = /\s+|\?|\!|\$|\,|\.|\+|\"|\'|\*|\^|\||\/|\\|\[|\]|#|%|`|>|<|;|:|@|&|=/g;
/**
 * @private
 */
export var DeepLinkConfigToken = new OpaqueToken('USERLINKS');
export function setupUrlSerializer(userDeepLinkConfig) {
    return new UrlSerializer(userDeepLinkConfig);
}
//# sourceMappingURL=url-serializer.js.map