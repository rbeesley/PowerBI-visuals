﻿/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved. 
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *   
 *  The above copyright notice and this permission notice shall be included in 
 *  all copies or substantial portions of the Software.
 *   
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

module jsCommon {

    export module UrlUtils {
        const urlRegex = /http[s]?:\/\/(\S)+/gi;
        const imageUrlRegex = /http[s]?:\/\/(\S)+(png|jpg|jpeg|gif|svg)/gi;

        export function isValidUrl(value: string): boolean {
            if (StringExtensions.isNullOrEmpty(value))
                return false;

            let match = RegExpExtensions.run(urlRegex, value);
            if (!!match && match.index === 0)
                return true;

            return false;
        }

        /* Tests whether a URL is valid.
         * @param url The url to be tested.
         * @returns Whether the provided url is valid.
         **/
        export function isValidImageUrl(url: string): boolean {
            if (_.isEmpty(url))
                return false;

            let match = RegExpExtensions.run(imageUrlRegex, url);
            if (!!match && match.index === 0)
                return true;

            return false;
        }

        export function findAllValidUrls(text: string): TextMatch[] {
            if (StringExtensions.isNullOrEmpty(text))
                return [];

            // Find all urls in the text.
            // TODO: This could potentially be expensive, maybe include a cap here for text with many urls?
            let urlRanges: TextMatch[] = [];
            let matches: RegExpExecArray;
            let start = 0;
            while ((matches = RegExpExtensions.run(urlRegex, text, start)) !== null) {
                let url = matches[0];
                let end = matches.index + url.length;
                urlRanges.push({
                    start: matches.index,
                    end: end,
                    text: url,
                });
                start = end;
            }

            return urlRanges;
        }
    }
}