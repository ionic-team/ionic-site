app.factory('TemplateService', function($q, Firebase, util, _) {
  var templates = new Firebase('https://issue-template.firebaseio.com/templates');

  function cleanOutboundReference(ref) {
    return util.simpleCompile(ref, {
      '.': '__period__',
      '$': '__dollar__',
      '[': '__left_braket__',
      ']': '__right_braket__',
      '#': '__hash__',
      '/': '__forward_slash__'
    }, /(.)/g);
  }

  function cleanInboundReference(ref) {
    return util.simpleCompile(ref, {
      'period': '.',
      'dollar': '$',
      'left_braket': '[',
      'right_braket': ']',
      'hash': '#',
      'forward_slash': '/'
    }, /__(.*)__/g);
  }

  var TemplateService = {
    saveTemplate: function(template) {
      var owner = cleanOutboundReference(template.owner);
      var repo = cleanOutboundReference(template.repo);
      var name = cleanOutboundReference(template.name);
      var temp = templates.child(owner).child(repo).child(name);
      temp.set(template);
    },
    getTemplateFields: function(obj) {
      return TemplateService.getTemplate(obj).child('fields');
    },
    getTemplate: function(obj) {
      var owner = cleanOutboundReference(obj.owner);
      var repo = cleanOutboundReference(obj.repo);
      var name = cleanOutboundReference(obj.name);
      return templates.child(owner).child(repo).child(name);
    },
    getAllTemplates: function() {
      return templates;
    },
    getOwnerTemplates: function(obj) {
      var owner = cleanOutboundReference(obj.owner);
      return templates.child(owner);
    },
    getRepoTemplates: function(obj) {
      var owner = cleanOutboundReference(obj.owner);
      var repo = cleanOutboundReference(obj.repo);
      return templates.child(owner).child(repo);
    },
    deleteTemplate: function(template) {
      var deferred = $q.defer();
      var owner = cleanOutboundReference(template.owner);
      var repo = cleanOutboundReference(template.repo);
      var name = cleanOutboundReference(template.name);
      templates.child(owner).child(repo).child(name).remove(function(error) {
        if (error) {
          deferred.reject();
        } else {
          deferred.resolve();
        }
      });
      return deferred.promise;
    },
    cleanInboundReference: cleanInboundReference
  };
  return TemplateService;
});
