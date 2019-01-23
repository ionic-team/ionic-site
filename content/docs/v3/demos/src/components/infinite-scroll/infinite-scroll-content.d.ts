import { Config } from '../../config/config';
import { InfiniteScroll } from './infinite-scroll';
/**
 * @private
 */
export declare class InfiniteScrollContent {
    inf: InfiniteScroll;
    private _config;
    /**
     * @input {string} An animated SVG spinner that shows while loading.
     */
    loadingSpinner: string;
    /**
     * @input {string} Optional text to display while loading.
     */
    loadingText: string;
    constructor(inf: InfiniteScroll, _config: Config);
    /**
     * @private
     */
    ngOnInit(): void;
}
