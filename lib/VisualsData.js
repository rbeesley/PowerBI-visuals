/*
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
///<reference path="../../Typedefs/jquery/jquery.d.ts"/>
///<reference path="../../Typedefs/globalize/globalize.d.ts"/>
///<reference path="../../Typedefs/lodash/lodash.d.ts"/>
/*
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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        /** Default IQueryExprVisitorWithArg implementation that others may derive from. */
        var DefaultSQExprVisitorWithArg = (function () {
            function DefaultSQExprVisitorWithArg() {
            }
            DefaultSQExprVisitorWithArg.prototype.visitEntity = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitColumnRef = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitMeasureRef = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitAggr = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitHierarchy = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitHierarchyLevel = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitPropertyVariationSource = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitBetween = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitIn = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitAnd = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitOr = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitCompare = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitContains = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitExists = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitNot = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitStartsWith = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitConstant = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitDateSpan = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitDateAdd = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitNow = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitDefaultValue = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitAnyValue = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitArithmetic = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitFillRule = function (expr, arg) {
                return this.visitDefault(expr, arg);
            };
            DefaultSQExprVisitorWithArg.prototype.visitDefault = function (expr, arg) {
                return;
            };
            return DefaultSQExprVisitorWithArg;
        })();
        data.DefaultSQExprVisitorWithArg = DefaultSQExprVisitorWithArg;
        /** Default ISQExprVisitor implementation that others may derive from. */
        var DefaultSQExprVisitor = (function (_super) {
            __extends(DefaultSQExprVisitor, _super);
            function DefaultSQExprVisitor() {
                _super.apply(this, arguments);
            }
            return DefaultSQExprVisitor;
        })(DefaultSQExprVisitorWithArg);
        data.DefaultSQExprVisitor = DefaultSQExprVisitor;
        /** Default ISQExprVisitor implementation that implements default traversal and that others may derive from. */
        var DefaultSQExprVisitorWithTraversal = (function () {
            function DefaultSQExprVisitorWithTraversal() {
            }
            DefaultSQExprVisitorWithTraversal.prototype.visitEntity = function (expr) {
                this.visitDefault(expr);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitColumnRef = function (expr) {
                expr.source.accept(this);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitMeasureRef = function (expr) {
                expr.source.accept(this);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitAggr = function (expr) {
                expr.arg.accept(this);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitHierarchy = function (expr) {
                expr.arg.accept(this);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitHierarchyLevel = function (expr) {
                expr.arg.accept(this);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitPropertyVariationSource = function (expr) {
                expr.arg.accept(this);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitBetween = function (expr) {
                expr.arg.accept(this);
                expr.lower.accept(this);
                expr.upper.accept(this);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitIn = function (expr) {
                var args = expr.args;
                for (var i = 0, len = args.length; i < len; i++)
                    args[i].accept(this);
                var values = expr.values;
                for (var i = 0, len = values.length; i < len; i++) {
                    var valueTuple = values[i];
                    for (var j = 0, jlen = valueTuple.length; j < jlen; j++)
                        valueTuple[j].accept(this);
                }
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitAnd = function (expr) {
                expr.left.accept(this);
                expr.right.accept(this);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitOr = function (expr) {
                expr.left.accept(this);
                expr.right.accept(this);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitCompare = function (expr) {
                expr.left.accept(this);
                expr.right.accept(this);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitContains = function (expr) {
                expr.left.accept(this);
                expr.right.accept(this);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitExists = function (expr) {
                expr.arg.accept(this);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitNot = function (expr) {
                expr.arg.accept(this);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitStartsWith = function (expr) {
                expr.left.accept(this);
                expr.right.accept(this);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitConstant = function (expr) {
                this.visitDefault(expr);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitDateSpan = function (expr) {
                expr.arg.accept(this);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitDateAdd = function (expr) {
                expr.arg.accept(this);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitNow = function (expr) {
                this.visitDefault(expr);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitDefaultValue = function (expr) {
                this.visitDefault(expr);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitAnyValue = function (expr) {
                this.visitDefault(expr);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitArithmetic = function (expr) {
                expr.left.accept(this);
                expr.right.accept(this);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitFillRule = function (expr) {
                expr.input.accept(this);
                var rule = expr.rule, gradient2 = rule.linearGradient2, gradient3 = rule.linearGradient3;
                if (gradient2) {
                    this.visitLinearGradient2(gradient2);
                }
                if (gradient3) {
                    this.visitLinearGradient3(gradient3);
                }
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitLinearGradient2 = function (gradient2) {
                debug.assertValue(gradient2, 'gradient2');
                this.visitFillRuleStop(gradient2.min);
                this.visitFillRuleStop(gradient2.max);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitLinearGradient3 = function (gradient3) {
                debug.assertValue(gradient3, 'gradient3');
                this.visitFillRuleStop(gradient3.min);
                this.visitFillRuleStop(gradient3.mid);
                this.visitFillRuleStop(gradient3.max);
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitDefault = function (expr) {
                return;
            };
            DefaultSQExprVisitorWithTraversal.prototype.visitFillRuleStop = function (stop) {
                debug.assertValue(stop, 'stop');
                stop.color.accept(this);
                var value = stop.value;
                if (value)
                    value.accept(this);
            };
            return DefaultSQExprVisitorWithTraversal;
        })();
        data.DefaultSQExprVisitorWithTraversal = DefaultSQExprVisitorWithTraversal;
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    function createEnumType(members) {
        return new EnumType(members);
    }
    powerbi.createEnumType = createEnumType;
    var EnumType = (function () {
        function EnumType(allMembers) {
            debug.assertValue(allMembers, 'allMembers');
            this.allMembers = allMembers;
        }
        EnumType.prototype.members = function (validMembers) {
            var allMembers = this.allMembers;
            if (!validMembers)
                return allMembers;
            var membersToReturn = [];
            for (var _i = 0; _i < allMembers.length; _i++) {
                var member = allMembers[_i];
                if (_.contains(validMembers, member.value))
                    membersToReturn.push(member);
            }
            return membersToReturn;
        };
        return EnumType;
    })();
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var FillSolidColorTypeDescriptor;
    (function (FillSolidColorTypeDescriptor) {
        /** Gets a value indicating whether the descriptor is nullable or not. */
        function nullable(descriptor) {
            debug.assertValue(descriptor, 'descriptor');
            if (descriptor === true)
                return false;
            var advancedDescriptor = descriptor;
            return !!advancedDescriptor.nullable;
        }
        FillSolidColorTypeDescriptor.nullable = nullable;
    })(FillSolidColorTypeDescriptor = powerbi.FillSolidColorTypeDescriptor || (powerbi.FillSolidColorTypeDescriptor = {}));
})(powerbi || (powerbi = {}));
/*
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
/*
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
var powerbi;
(function (powerbi) {
    var ImageDefinition;
    (function (ImageDefinition) {
        ImageDefinition.urlType = { misc: { imageUrl: true } };
    })(ImageDefinition = powerbi.ImageDefinition || (powerbi.ImageDefinition = {}));
})(powerbi || (powerbi = {}));
/*
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
/*
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
var powerbi;
(function (powerbi) {
    var StructuralTypeDescriptor;
    (function (StructuralTypeDescriptor) {
        function isValid(type) {
            debug.assertValue(type, 'type');
            if (type.fill ||
                type.fillRule ||
                type.filter ||
                type.expression ||
                type.image ||
                type.paragraphs) {
                return true;
            }
            return false;
        }
        StructuralTypeDescriptor.isValid = isValid;
    })(StructuralTypeDescriptor = powerbi.StructuralTypeDescriptor || (powerbi.StructuralTypeDescriptor = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var EnumExtensions = jsCommon.EnumExtensions;
    /** Describes a data value type, including a primitive type and extended type if any (derived from data category). */
    var ValueType = (function () {
        /** Do not call the ValueType constructor directly. Use the ValueType.fromXXX methods. */
        function ValueType(type, category, enumType) {
            debug.assert((!!type && ExtendedType[type] != null) || type === ExtendedType.Null, 'type');
            debug.assert(!!category || category === null, 'category');
            debug.assert(type !== ExtendedType.Enumeration || !!enumType, 'enumType');
            this.underlyingType = type;
            this.category = category;
            if (EnumExtensions.hasFlag(type, ExtendedType.Temporal)) {
                this.temporalType = new TemporalType(type);
            }
            if (EnumExtensions.hasFlag(type, ExtendedType.Geography)) {
                this.geographyType = new GeographyType(type);
            }
            if (EnumExtensions.hasFlag(type, ExtendedType.Miscellaneous)) {
                this.miscType = new MiscellaneousType(type);
            }
            if (EnumExtensions.hasFlag(type, ExtendedType.Formatting)) {
                this.formattingType = new FormattingType(type);
            }
            if (EnumExtensions.hasFlag(type, ExtendedType.Enumeration)) {
                this.enumType = enumType;
            }
            if (EnumExtensions.hasFlag(type, ExtendedType.Scripting)) {
                this.scriptingType = new ScriptType(type);
            }
        }
        /** Creates or retrieves a ValueType object based on the specified ValueTypeDescriptor. */
        ValueType.fromDescriptor = function (descriptor) {
            descriptor = descriptor || {};
            // Simplified primitive types
            if (descriptor.text)
                return ValueType.fromExtendedType(ExtendedType.Text);
            if (descriptor.integer)
                return ValueType.fromExtendedType(ExtendedType.Integer);
            if (descriptor.numeric)
                return ValueType.fromExtendedType(ExtendedType.Double);
            if (descriptor.bool)
                return ValueType.fromExtendedType(ExtendedType.Boolean);
            if (descriptor.dateTime)
                return ValueType.fromExtendedType(ExtendedType.DateTime);
            if (descriptor.duration)
                return ValueType.fromExtendedType(ExtendedType.Duration);
            if (descriptor.binary)
                return ValueType.fromExtendedType(ExtendedType.Binary);
            if (descriptor.none)
                return ValueType.fromExtendedType(ExtendedType.None);
            // Extended types
            if (descriptor.scripting) {
                if (descriptor.scripting.source)
                    return ValueType.fromExtendedType(ExtendedType.ScriptSource);
            }
            if (descriptor.enumeration)
                return ValueType.fromEnum(descriptor.enumeration);
            if (descriptor.temporal) {
                if (descriptor.temporal.year)
                    return ValueType.fromExtendedType(ExtendedType.Year_Integer);
                if (descriptor.temporal.month)
                    return ValueType.fromExtendedType(ExtendedType.Month_Integer);
            }
            if (descriptor.geography) {
                if (descriptor.geography.address)
                    return ValueType.fromExtendedType(ExtendedType.Address);
                if (descriptor.geography.city)
                    return ValueType.fromExtendedType(ExtendedType.City);
                if (descriptor.geography.continent)
                    return ValueType.fromExtendedType(ExtendedType.Continent);
                if (descriptor.geography.country)
                    return ValueType.fromExtendedType(ExtendedType.Country);
                if (descriptor.geography.county)
                    return ValueType.fromExtendedType(ExtendedType.County);
                if (descriptor.geography.region)
                    return ValueType.fromExtendedType(ExtendedType.Region);
                if (descriptor.geography.postalCode)
                    return ValueType.fromExtendedType(ExtendedType.PostalCode_Text);
                if (descriptor.geography.stateOrProvince)
                    return ValueType.fromExtendedType(ExtendedType.StateOrProvince);
                if (descriptor.geography.place)
                    return ValueType.fromExtendedType(ExtendedType.Place);
                if (descriptor.geography.latitude)
                    return ValueType.fromExtendedType(ExtendedType.Latitude_Double);
                if (descriptor.geography.longitude)
                    return ValueType.fromExtendedType(ExtendedType.Longitude_Double);
            }
            if (descriptor.misc) {
                if (descriptor.misc.image)
                    return ValueType.fromExtendedType(ExtendedType.Image);
                if (descriptor.misc.imageUrl)
                    return ValueType.fromExtendedType(ExtendedType.ImageUrl);
                if (descriptor.misc.webUrl)
                    return ValueType.fromExtendedType(ExtendedType.WebUrl);
            }
            if (descriptor.formatting) {
                if (descriptor.formatting.color)
                    return ValueType.fromExtendedType(ExtendedType.Color);
                if (descriptor.formatting.formatString)
                    return ValueType.fromExtendedType(ExtendedType.FormatString);
                if (descriptor.formatting.alignment)
                    return ValueType.fromExtendedType(ExtendedType.Alignment);
                if (descriptor.formatting.labelDisplayUnits)
                    return ValueType.fromExtendedType(ExtendedType.LabelDisplayUnits);
                if (descriptor.formatting.fontSize)
                    return ValueType.fromExtendedType(ExtendedType.FontSize);
                if (descriptor.formatting.labelDensity)
                    return ValueType.fromExtendedType(ExtendedType.LabelDensity);
            }
            if (descriptor.extendedType) {
                return ValueType.fromExtendedType(descriptor.extendedType);
            }
            return ValueType.fromExtendedType(ExtendedType.Null);
        };
        /** Advanced: Generally use fromDescriptor instead. Creates or retrieves a ValueType object for the specified ExtendedType. */
        ValueType.fromExtendedType = function (extendedType) {
            extendedType = extendedType || ExtendedType.Null;
            var primitiveType = getPrimitiveType(extendedType), category = getCategoryFromExtendedType(extendedType);
            debug.assert(primitiveType !== PrimitiveType.Null || extendedType === ExtendedType.Null, 'Cannot create ValueType for abstract extended type. Consider using fromDescriptor instead.');
            return ValueType.fromPrimitiveTypeAndCategory(primitiveType, category);
        };
        /** Creates or retrieves a ValueType object for the specified PrimitiveType and data category. */
        ValueType.fromPrimitiveTypeAndCategory = function (primitiveType, category) {
            primitiveType = primitiveType || PrimitiveType.Null;
            category = category || null;
            var id = primitiveType.toString();
            if (category)
                id += '|' + category;
            return ValueType.typeCache[id] || (ValueType.typeCache[id] = new ValueType(toExtendedType(primitiveType, category), category));
        };
        /** Creates a ValueType to describe the given IEnumType. */
        ValueType.fromEnum = function (enumType) {
            debug.assertValue(enumType, 'enumType');
            return new ValueType(ExtendedType.Enumeration, null, enumType);
        };
        /** Determines if the instance ValueType is convertable from the 'other' ValueType. */
        ValueType.prototype.isCompatibleFrom = function (other) {
            debug.assertValue(other, 'other');
            var otherPrimitiveType = other.primitiveType;
            if (this === other ||
                this.primitiveType === otherPrimitiveType ||
                otherPrimitiveType === PrimitiveType.Null)
                return true;
            return false;
        };
        Object.defineProperty(ValueType.prototype, "primitiveType", {
            /** Gets the exact primitive type of this ValueType. */
            get: function () {
                return getPrimitiveType(this.underlyingType);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValueType.prototype, "extendedType", {
            /** Gets the exact extended type of this ValueType. */
            get: function () {
                return this.underlyingType;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValueType.prototype, "categoryString", {
            /** Gets the data category string (if any) for this ValueType. */
            get: function () {
                return this.category;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValueType.prototype, "text", {
            // Simplified primitive types
            /** Indicates whether the type represents text values. */
            get: function () {
                return this.primitiveType === PrimitiveType.Text;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValueType.prototype, "numeric", {
            /** Indicates whether the type represents any numeric value. */
            get: function () {
                return EnumExtensions.hasFlag(this.underlyingType, ExtendedType.Numeric);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValueType.prototype, "integer", {
            /** Indicates whether the type represents integer numeric values. */
            get: function () {
                return this.primitiveType === PrimitiveType.Integer;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValueType.prototype, "bool", {
            /** Indicates whether the type represents Boolean values. */
            get: function () {
                return this.primitiveType === PrimitiveType.Boolean;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValueType.prototype, "dateTime", {
            /** Indicates whether the type represents any date/time values. */
            get: function () {
                return this.primitiveType === PrimitiveType.DateTime ||
                    this.primitiveType === PrimitiveType.Date ||
                    this.primitiveType === PrimitiveType.Time;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValueType.prototype, "duration", {
            /** Indicates whether the type represents duration values. */
            get: function () {
                return this.primitiveType === PrimitiveType.Duration;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValueType.prototype, "binary", {
            /** Indicates whether the type represents binary values. */
            get: function () {
                return this.primitiveType === PrimitiveType.Binary;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValueType.prototype, "none", {
            /** Indicates whether the type represents none values. */
            get: function () {
                return this.primitiveType === PrimitiveType.None;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValueType.prototype, "temporal", {
            // Extended types
            /** Returns an object describing temporal values represented by the type, if it represents a temporal type. */
            get: function () {
                return this.temporalType;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValueType.prototype, "geography", {
            /** Returns an object describing geographic values represented by the type, if it represents a geographic type. */
            get: function () {
                return this.geographyType;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValueType.prototype, "misc", {
            /** Returns an object describing the specific values represented by the type, if it represents a miscellaneous extended type. */
            get: function () {
                return this.miscType;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValueType.prototype, "formatting", {
            /** Returns an object describing the formatting values represented by the type, if it represents a formatting type. */
            get: function () {
                return this.formattingType;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValueType.prototype, "enum", {
            /** Returns an object describing the enum values represented by the type, if it represents an enumeration type. */
            get: function () {
                return this.enumType;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValueType.prototype, "scripting", {
            get: function () {
                return this.scriptingType;
            },
            enumerable: true,
            configurable: true
        });
        ValueType.typeCache = {};
        return ValueType;
    })();
    powerbi.ValueType = ValueType;
    var ScriptType = (function () {
        function ScriptType(type) {
            debug.assert(!!type && EnumExtensions.hasFlag(type, ExtendedType.Scripting), 'type');
            this.underlyingType = type;
        }
        Object.defineProperty(ScriptType.prototype, "source", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.ScriptSource);
            },
            enumerable: true,
            configurable: true
        });
        return ScriptType;
    })();
    powerbi.ScriptType = ScriptType;
    var TemporalType = (function () {
        function TemporalType(type) {
            debug.assert(!!type && EnumExtensions.hasFlag(type, ExtendedType.Temporal), 'type');
            this.underlyingType = type;
        }
        Object.defineProperty(TemporalType.prototype, "year", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Year);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TemporalType.prototype, "month", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Month);
            },
            enumerable: true,
            configurable: true
        });
        return TemporalType;
    })();
    powerbi.TemporalType = TemporalType;
    var GeographyType = (function () {
        function GeographyType(type) {
            debug.assert(!!type && EnumExtensions.hasFlag(type, ExtendedType.Geography), 'type');
            this.underlyingType = type;
        }
        Object.defineProperty(GeographyType.prototype, "address", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Address);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GeographyType.prototype, "city", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.City);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GeographyType.prototype, "continent", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Continent);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GeographyType.prototype, "country", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Country);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GeographyType.prototype, "county", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.County);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GeographyType.prototype, "region", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Region);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GeographyType.prototype, "postalCode", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.PostalCode);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GeographyType.prototype, "stateOrProvince", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.StateOrProvince);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GeographyType.prototype, "place", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Place);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GeographyType.prototype, "latitude", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Latitude);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GeographyType.prototype, "longitude", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Longitude);
            },
            enumerable: true,
            configurable: true
        });
        return GeographyType;
    })();
    powerbi.GeographyType = GeographyType;
    var MiscellaneousType = (function () {
        function MiscellaneousType(type) {
            debug.assert(!!type && EnumExtensions.hasFlag(type, ExtendedType.Miscellaneous), 'type');
            this.underlyingType = type;
        }
        Object.defineProperty(MiscellaneousType.prototype, "image", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Image);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MiscellaneousType.prototype, "imageUrl", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.ImageUrl);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MiscellaneousType.prototype, "webUrl", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.WebUrl);
            },
            enumerable: true,
            configurable: true
        });
        return MiscellaneousType;
    })();
    powerbi.MiscellaneousType = MiscellaneousType;
    var FormattingType = (function () {
        function FormattingType(type) {
            debug.assert(!!type && EnumExtensions.hasFlag(type, ExtendedType.Formatting), 'type');
            this.underlyingType = type;
        }
        Object.defineProperty(FormattingType.prototype, "color", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Color);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormattingType.prototype, "formatString", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.FormatString);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormattingType.prototype, "alignment", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Alignment);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormattingType.prototype, "labelDisplayUnits", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.LabelDisplayUnits);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormattingType.prototype, "fontSize", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.FontSize);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormattingType.prototype, "labelDensity", {
            get: function () {
                return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.LabelDensity);
            },
            enumerable: true,
            configurable: true
        });
        return FormattingType;
    })();
    powerbi.FormattingType = FormattingType;
    /** Defines primitive value types. Must be consistent with types defined by server conceptual schema. */
    (function (PrimitiveType) {
        PrimitiveType[PrimitiveType["Null"] = 0] = "Null";
        PrimitiveType[PrimitiveType["Text"] = 1] = "Text";
        PrimitiveType[PrimitiveType["Decimal"] = 2] = "Decimal";
        PrimitiveType[PrimitiveType["Double"] = 3] = "Double";
        PrimitiveType[PrimitiveType["Integer"] = 4] = "Integer";
        PrimitiveType[PrimitiveType["Boolean"] = 5] = "Boolean";
        PrimitiveType[PrimitiveType["Date"] = 6] = "Date";
        PrimitiveType[PrimitiveType["DateTime"] = 7] = "DateTime";
        PrimitiveType[PrimitiveType["DateTimeZone"] = 8] = "DateTimeZone";
        PrimitiveType[PrimitiveType["Time"] = 9] = "Time";
        PrimitiveType[PrimitiveType["Duration"] = 10] = "Duration";
        PrimitiveType[PrimitiveType["Binary"] = 11] = "Binary";
        PrimitiveType[PrimitiveType["None"] = 12] = "None";
    })(powerbi.PrimitiveType || (powerbi.PrimitiveType = {}));
    var PrimitiveType = powerbi.PrimitiveType;
    /** Defines extended value types, which include primitive types and known data categories constrained to expected primitive types. */
    (function (ExtendedType) {
        // Flags (1 << 8-15 range [0xFF00])
        // Important: Enum members must be declared before they are used in TypeScript.
        ExtendedType[ExtendedType["Numeric"] = 256] = "Numeric";
        ExtendedType[ExtendedType["Temporal"] = 512] = "Temporal";
        ExtendedType[ExtendedType["Geography"] = 1024] = "Geography";
        ExtendedType[ExtendedType["Miscellaneous"] = 2048] = "Miscellaneous";
        ExtendedType[ExtendedType["Formatting"] = 4096] = "Formatting";
        ExtendedType[ExtendedType["Scripting"] = 8192] = "Scripting";
        // Primitive types (0-255 range [0xFF] | flags)
        // The member names and base values must match those in PrimitiveType.
        ExtendedType[ExtendedType["Null"] = 0] = "Null";
        ExtendedType[ExtendedType["Text"] = 1] = "Text";
        ExtendedType[ExtendedType["Decimal"] = 258] = "Decimal";
        ExtendedType[ExtendedType["Double"] = 259] = "Double";
        ExtendedType[ExtendedType["Integer"] = 260] = "Integer";
        ExtendedType[ExtendedType["Boolean"] = 5] = "Boolean";
        ExtendedType[ExtendedType["Date"] = 518] = "Date";
        ExtendedType[ExtendedType["DateTime"] = 519] = "DateTime";
        ExtendedType[ExtendedType["DateTimeZone"] = 520] = "DateTimeZone";
        ExtendedType[ExtendedType["Time"] = 521] = "Time";
        ExtendedType[ExtendedType["Duration"] = 10] = "Duration";
        ExtendedType[ExtendedType["Binary"] = 11] = "Binary";
        ExtendedType[ExtendedType["None"] = 12] = "None";
        // Extended types (0-32767 << 16 range [0xFFFF0000] | corresponding primitive type | flags)
        // Temporal
        ExtendedType[ExtendedType["Year"] = 66048] = "Year";
        ExtendedType[ExtendedType["Year_Text"] = 66049] = "Year_Text";
        ExtendedType[ExtendedType["Year_Integer"] = 66308] = "Year_Integer";
        ExtendedType[ExtendedType["Year_Date"] = 66054] = "Year_Date";
        ExtendedType[ExtendedType["Year_DateTime"] = 66055] = "Year_DateTime";
        ExtendedType[ExtendedType["Month"] = 131584] = "Month";
        ExtendedType[ExtendedType["Month_Text"] = 131585] = "Month_Text";
        ExtendedType[ExtendedType["Month_Integer"] = 131844] = "Month_Integer";
        ExtendedType[ExtendedType["Month_Date"] = 131590] = "Month_Date";
        ExtendedType[ExtendedType["Month_DateTime"] = 131591] = "Month_DateTime";
        // Geography
        ExtendedType[ExtendedType["Address"] = 6554625] = "Address";
        ExtendedType[ExtendedType["City"] = 6620161] = "City";
        ExtendedType[ExtendedType["Continent"] = 6685697] = "Continent";
        ExtendedType[ExtendedType["Country"] = 6751233] = "Country";
        ExtendedType[ExtendedType["County"] = 6816769] = "County";
        ExtendedType[ExtendedType["Region"] = 6882305] = "Region";
        ExtendedType[ExtendedType["PostalCode"] = 6947840] = "PostalCode";
        ExtendedType[ExtendedType["PostalCode_Text"] = 6947841] = "PostalCode_Text";
        ExtendedType[ExtendedType["PostalCode_Integer"] = 6948100] = "PostalCode_Integer";
        ExtendedType[ExtendedType["StateOrProvince"] = 7013377] = "StateOrProvince";
        ExtendedType[ExtendedType["Place"] = 7078913] = "Place";
        ExtendedType[ExtendedType["Latitude"] = 7144448] = "Latitude";
        ExtendedType[ExtendedType["Latitude_Decimal"] = 7144706] = "Latitude_Decimal";
        ExtendedType[ExtendedType["Latitude_Double"] = 7144707] = "Latitude_Double";
        ExtendedType[ExtendedType["Longitude"] = 7209984] = "Longitude";
        ExtendedType[ExtendedType["Longitude_Decimal"] = 7210242] = "Longitude_Decimal";
        ExtendedType[ExtendedType["Longitude_Double"] = 7210243] = "Longitude_Double";
        // Miscellaneous
        ExtendedType[ExtendedType["Image"] = 13109259] = "Image";
        ExtendedType[ExtendedType["ImageUrl"] = 13174785] = "ImageUrl";
        ExtendedType[ExtendedType["WebUrl"] = 13240321] = "WebUrl";
        // Formatting
        ExtendedType[ExtendedType["Color"] = 19664897] = "Color";
        ExtendedType[ExtendedType["FormatString"] = 19730433] = "FormatString";
        ExtendedType[ExtendedType["Alignment"] = 20058113] = "Alignment";
        ExtendedType[ExtendedType["LabelDisplayUnits"] = 20123649] = "LabelDisplayUnits";
        ExtendedType[ExtendedType["FontSize"] = 20189443] = "FontSize";
        ExtendedType[ExtendedType["LabelDensity"] = 20254979] = "LabelDensity";
        // Enumeration
        ExtendedType[ExtendedType["Enumeration"] = 26214401] = "Enumeration";
        // Scripting
        ExtendedType[ExtendedType["ScriptSource"] = 32776193] = "ScriptSource";
    })(powerbi.ExtendedType || (powerbi.ExtendedType = {}));
    var ExtendedType = powerbi.ExtendedType;
    var PrimitiveTypeMask = 0xFF;
    var PrimitiveTypeWithFlagsMask = 0xFFFF;
    var PrimitiveTypeFlagsExcludedMask = 0xFFFF0000;
    function getPrimitiveType(extendedType) {
        return extendedType & PrimitiveTypeMask;
    }
    function isPrimitiveType(extendedType) {
        return (extendedType & PrimitiveTypeWithFlagsMask) === extendedType;
    }
    function getCategoryFromExtendedType(extendedType) {
        if (isPrimitiveType(extendedType))
            return null;
        var category = ExtendedType[extendedType];
        if (category) {
            // Check for ExtendedType declaration without a primitive type.
            // If exists, use it as category (e.g. Longitude rather than Longitude_Double)
            // Otherwise use the ExtendedType declaration with a primitive type (e.g. Address)
            var delimIdx = category.lastIndexOf('_');
            if (delimIdx > 0) {
                var baseCategory = category.slice(0, delimIdx);
                if (ExtendedType[baseCategory]) {
                    debug.assert((ExtendedType[baseCategory] & PrimitiveTypeFlagsExcludedMask) === (extendedType & PrimitiveTypeFlagsExcludedMask), 'Unexpected value for ExtendedType base member of ' + extendedType);
                    category = baseCategory;
                }
            }
        }
        return category || null;
    }
    function toExtendedType(primitiveType, category) {
        var primitiveString = PrimitiveType[primitiveType];
        var t = ExtendedType[primitiveString];
        if (t == null) {
            debug.assertFail('Unexpected primitiveType ' + primitiveType);
            t = ExtendedType.Null;
        }
        if (primitiveType && category) {
            var categoryType = ExtendedType[category];
            if (categoryType) {
                var categoryPrimitiveType = getPrimitiveType(categoryType);
                if (categoryPrimitiveType === PrimitiveType.Null) {
                    // Category supports multiple primitive types, check if requested primitive type is supported
                    // (note: important to use t here rather than primitiveType as it may include primitive type flags)
                    categoryType = t | categoryType;
                    if (ExtendedType[categoryType]) {
                        debug.assert(ExtendedType[categoryType] === (category + '_' + primitiveString), 'Unexpected name for ExtendedType member ' + categoryType);
                        t = categoryType;
                    }
                }
                else if (categoryPrimitiveType === primitiveType) {
                    // Primitive type matches the single supported type for the category
                    t = categoryType;
                }
            }
        }
        return t;
    }
    function matchesExtendedTypeWithAnyPrimitive(a, b) {
        return (a & PrimitiveTypeFlagsExcludedMask) === (b & PrimitiveTypeFlagsExcludedMask);
    }
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        (function (DataShapeBindingLimitType) {
            DataShapeBindingLimitType[DataShapeBindingLimitType["Top"] = 0] = "Top";
            DataShapeBindingLimitType[DataShapeBindingLimitType["First"] = 1] = "First";
            DataShapeBindingLimitType[DataShapeBindingLimitType["Last"] = 2] = "Last";
            DataShapeBindingLimitType[DataShapeBindingLimitType["Sample"] = 3] = "Sample";
            DataShapeBindingLimitType[DataShapeBindingLimitType["Bottom"] = 4] = "Bottom";
        })(data.DataShapeBindingLimitType || (data.DataShapeBindingLimitType = {}));
        var DataShapeBindingLimitType = data.DataShapeBindingLimitType;
        (function (SubtotalType) {
            SubtotalType[SubtotalType["None"] = 0] = "None";
            SubtotalType[SubtotalType["Before"] = 1] = "Before";
            SubtotalType[SubtotalType["After"] = 2] = "After";
        })(data.SubtotalType || (data.SubtotalType = {}));
        var SubtotalType = data.SubtotalType;
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        var DataShapeBindingDataReduction;
        (function (DataShapeBindingDataReduction) {
            function createFrom(reduction) {
                if (!reduction)
                    return;
                var result;
                if (reduction.top) {
                    result = {
                        Top: {}
                    };
                    if (reduction.top.count)
                        result.Top.Count = reduction.top.count;
                }
                if (reduction.bottom) {
                    result = {
                        Bottom: {}
                    };
                    if (reduction.bottom.count)
                        result.Bottom.Count = reduction.bottom.count;
                }
                if (reduction.sample) {
                    result = {
                        Sample: {}
                    };
                    if (reduction.sample.count)
                        result.Sample.Count = reduction.sample.count;
                }
                if (reduction.window) {
                    result = {
                        Window: {}
                    };
                    if (reduction.window.count)
                        result.Window.Count = reduction.window.count;
                }
                return result;
            }
            DataShapeBindingDataReduction.createFrom = createFrom;
        })(DataShapeBindingDataReduction = data.DataShapeBindingDataReduction || (data.DataShapeBindingDataReduction = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        /** Represents a federated conceptual schema. */
        var FederatedConceptualSchema = (function () {
            function FederatedConceptualSchema(options) {
                debug.assertValue(options, 'options');
                this.schemas = options.schemas;
                if (options.links)
                    this.links = options.links;
            }
            FederatedConceptualSchema.prototype.schema = function (name) {
                return this.schemas[name];
            };
            return FederatedConceptualSchema;
        })();
        data.FederatedConceptualSchema = FederatedConceptualSchema;
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data_1) {
        var Selector;
        (function (Selector) {
            function filterFromSelector(selectors, isNot) {
                if (_.isEmpty(selectors))
                    return;
                var exprs = [];
                for (var i = 0, ilen = selectors.length; i < ilen; i++) {
                    var identity = selectors[i];
                    var data_2 = identity.data;
                    var exprToAdd = undefined;
                    if (data_2 && data_2.length) {
                        for (var j = 0, jlen = data_2.length; j < jlen; j++) {
                            exprToAdd = data_1.SQExprBuilder.and(exprToAdd, identity.data[j].expr);
                        }
                    }
                    if (exprToAdd)
                        exprs.push(exprToAdd);
                }
                if (!_.isEmpty(exprs))
                    return powerbi.DataViewScopeIdentity.filterFromExprs(exprs, isNot);
            }
            Selector.filterFromSelector = filterFromSelector;
            function matchesData(selector, identities) {
                debug.assertValue(selector, 'selector');
                debug.assertValue(selector.data, 'selector.data');
                debug.assertValue(identities, 'identities');
                var selectorData = selector.data;
                if (selectorData.length !== identities.length)
                    return false;
                for (var i = 0, len = selectorData.length; i < len; i++) {
                    var dataItem = selector.data[i];
                    var selectorDataItem = dataItem;
                    if (selectorDataItem.expr) {
                        if (!powerbi.DataViewScopeIdentity.equals(selectorDataItem, identities[i]))
                            return false;
                    }
                    else {
                        if (!data_1.DataViewScopeWildcard.matches(dataItem, identities[i]))
                            return false;
                    }
                }
                return true;
            }
            Selector.matchesData = matchesData;
            function matchesKeys(selector, keysList) {
                debug.assertValue(selector, 'selector');
                debug.assertValue(selector.data, 'selector.data');
                debug.assertValue(keysList, 'keysList');
                var selectorData = selector.data, selectorDataLength = selectorData.length;
                if (selectorDataLength !== keysList.length)
                    return false;
                for (var i = 0; i < selectorDataLength; i++) {
                    var selectorDataItem = selector.data[i], selectorDataExprs = void 0;
                    if (selectorDataItem.expr) {
                        selectorDataExprs = data_1.ScopeIdentityExtractor.getKeys(selectorDataItem.expr);
                    }
                    else {
                        selectorDataExprs = selectorDataItem.exprs;
                    }
                    if (!selectorDataExprs)
                        continue;
                    if (!data_1.SQExprUtils.sequenceEqual(keysList[i], selectorDataExprs))
                        return false;
                }
                return true;
            }
            Selector.matchesKeys = matchesKeys;
            /** Determines whether two selectors are equal. */
            function equals(x, y) {
                // Normalize falsy to null
                x = x || null;
                y = y || null;
                if (x === y)
                    return true;
                if (!x !== !y)
                    return false;
                debug.assertValue(x, 'x');
                debug.assertValue(y, 'y');
                if (x.id !== y.id)
                    return false;
                if (x.metadata !== y.metadata)
                    return false;
                if (!equalsDataArray(x.data, y.data))
                    return false;
                return true;
            }
            Selector.equals = equals;
            function equalsDataArray(x, y) {
                // Normalize falsy to null
                x = x || null;
                y = y || null;
                if (x === y)
                    return true;
                if (!x !== !y)
                    return false;
                if (x.length !== y.length)
                    return false;
                for (var i = 0, len = x.length; i < len; i++) {
                    if (!equalsData(x[i], y[i]))
                        return false;
                }
                return true;
            }
            function equalsData(x, y) {
                if (!x.expr && y.expr) {
                    // TODO: We need to also check wildcard selectors too (once that's supported/figured out).
                    return false;
                }
                return powerbi.DataViewScopeIdentity.equals(x, y);
            }
            function getKey(selector) {
                var toStringify = {};
                if (selector.data) {
                    var data_3 = [];
                    for (var i = 0, ilen = selector.data.length; i < ilen; i++) {
                        data_3.push(selector.data[i].key);
                    }
                    toStringify.data = data_3;
                }
                if (selector.metadata)
                    toStringify.metadata = selector.metadata;
                if (selector.id)
                    toStringify.id = selector.id;
                return JSON.stringify(toStringify);
            }
            Selector.getKey = getKey;
            function containsWildcard(selector) {
                debug.assertValue(selector, 'selector');
                var dataItems = selector.data;
                if (!dataItems)
                    return false;
                for (var i = 0, len = dataItems.length; i < len; i++) {
                    var wildcard = dataItems[i];
                    if (wildcard.exprs)
                        return true;
                }
                return false;
            }
            Selector.containsWildcard = containsWildcard;
        })(Selector = data_1.Selector || (data_1.Selector = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        (function (EntitySourceType) {
            EntitySourceType[EntitySourceType["Table"] = 0] = "Table";
            EntitySourceType[EntitySourceType["Pod"] = 1] = "Pod";
        })(data.EntitySourceType || (data.EntitySourceType = {}));
        var EntitySourceType = data.EntitySourceType;
        function getArithmeticOperatorName(arithmeticOperatorKind) {
            switch (arithmeticOperatorKind) {
                case 0 /* Add */:
                    return "Add";
                case 1 /* Subtract */:
                    return "Subtract";
                case 2 /* Multiply */:
                    return "Multiply";
                case 3 /* Divide */:
                    return "Divide";
            }
            throw new Error('Unexpected ArithmeticOperatorKind: ' + arithmeticOperatorKind);
        }
        data.getArithmeticOperatorName = getArithmeticOperatorName;
        (function (TimeUnit) {
            TimeUnit[TimeUnit["Day"] = 0] = "Day";
            TimeUnit[TimeUnit["Week"] = 1] = "Week";
            TimeUnit[TimeUnit["Month"] = 2] = "Month";
            TimeUnit[TimeUnit["Year"] = 3] = "Year";
            TimeUnit[TimeUnit["Decade"] = 4] = "Decade";
            TimeUnit[TimeUnit["Second"] = 5] = "Second";
            TimeUnit[TimeUnit["Minute"] = 6] = "Minute";
            TimeUnit[TimeUnit["Hour"] = 7] = "Hour";
        })(data.TimeUnit || (data.TimeUnit = {}));
        var TimeUnit = data.TimeUnit;
        (function (QueryAggregateFunction) {
            QueryAggregateFunction[QueryAggregateFunction["Sum"] = 0] = "Sum";
            QueryAggregateFunction[QueryAggregateFunction["Avg"] = 1] = "Avg";
            QueryAggregateFunction[QueryAggregateFunction["Count"] = 2] = "Count";
            QueryAggregateFunction[QueryAggregateFunction["Min"] = 3] = "Min";
            QueryAggregateFunction[QueryAggregateFunction["Max"] = 4] = "Max";
            QueryAggregateFunction[QueryAggregateFunction["CountNonNull"] = 5] = "CountNonNull";
            QueryAggregateFunction[QueryAggregateFunction["Median"] = 6] = "Median";
            QueryAggregateFunction[QueryAggregateFunction["StandardDeviation"] = 7] = "StandardDeviation";
            QueryAggregateFunction[QueryAggregateFunction["Variance"] = 8] = "Variance";
        })(data.QueryAggregateFunction || (data.QueryAggregateFunction = {}));
        var QueryAggregateFunction = data.QueryAggregateFunction;
        (function (QueryComparisonKind) {
            QueryComparisonKind[QueryComparisonKind["Equal"] = 0] = "Equal";
            QueryComparisonKind[QueryComparisonKind["GreaterThan"] = 1] = "GreaterThan";
            QueryComparisonKind[QueryComparisonKind["GreaterThanOrEqual"] = 2] = "GreaterThanOrEqual";
            QueryComparisonKind[QueryComparisonKind["LessThan"] = 3] = "LessThan";
            QueryComparisonKind[QueryComparisonKind["LessThanOrEqual"] = 4] = "LessThanOrEqual";
        })(data.QueryComparisonKind || (data.QueryComparisonKind = {}));
        var QueryComparisonKind = data.QueryComparisonKind;
        /** Defines semantic data types. */
        (function (SemanticType) {
            SemanticType[SemanticType["None"] = 0] = "None";
            SemanticType[SemanticType["Number"] = 1] = "Number";
            SemanticType[SemanticType["Integer"] = 3] = "Integer";
            SemanticType[SemanticType["DateTime"] = 4] = "DateTime";
            SemanticType[SemanticType["Time"] = 8] = "Time";
            SemanticType[SemanticType["Date"] = 20] = "Date";
            SemanticType[SemanticType["Month"] = 35] = "Month";
            SemanticType[SemanticType["Year"] = 67] = "Year";
            SemanticType[SemanticType["YearAndMonth"] = 128] = "YearAndMonth";
            SemanticType[SemanticType["MonthAndDay"] = 256] = "MonthAndDay";
            SemanticType[SemanticType["Decade"] = 515] = "Decade";
            SemanticType[SemanticType["YearAndWeek"] = 1024] = "YearAndWeek";
            SemanticType[SemanticType["String"] = 2048] = "String";
            SemanticType[SemanticType["Boolean"] = 4096] = "Boolean";
            SemanticType[SemanticType["Table"] = 8192] = "Table";
            SemanticType[SemanticType["Range"] = 16384] = "Range";
        })(data.SemanticType || (data.SemanticType = {}));
        var SemanticType = data.SemanticType;
        (function (FilterKind) {
            FilterKind[FilterKind["Default"] = 0] = "Default";
            FilterKind[FilterKind["Period"] = 1] = "Period";
        })(data.FilterKind || (data.FilterKind = {}));
        var FilterKind = data.FilterKind;
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        var QueryProjectionCollection = (function () {
            function QueryProjectionCollection(items, activeProjectionRefs, showAll) {
                debug.assertValue(items, 'items');
                this.items = items;
                this._activeProjectionRefs = activeProjectionRefs;
                this._showAll = showAll;
            }
            /** Returns all projections in a mutable array. */
            QueryProjectionCollection.prototype.all = function () {
                return this.items;
            };
            Object.defineProperty(QueryProjectionCollection.prototype, "activeProjectionRefs", {
                get: function () {
                    return this._activeProjectionRefs;
                },
                set: function (queryReferences) {
                    if (!_.isEmpty(queryReferences)) {
                        var queryRefs = this.items.map(function (val) { return val.queryRef; });
                        for (var _i = 0; _i < queryReferences.length; _i++) {
                            var queryReference = queryReferences[_i];
                            if (!_.contains(queryRefs, queryReference))
                                return;
                        }
                        this._activeProjectionRefs = queryReferences;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(QueryProjectionCollection.prototype, "showAll", {
                get: function () {
                    return this._showAll;
                },
                set: function (value) {
                    this._showAll = value;
                },
                enumerable: true,
                configurable: true
            });
            QueryProjectionCollection.prototype.addActiveQueryReference = function (queryRef) {
                if (!this._activeProjectionRefs)
                    this._activeProjectionRefs = [queryRef];
                else
                    this._activeProjectionRefs.push(queryRef);
            };
            QueryProjectionCollection.prototype.getLastActiveQueryReference = function () {
                if (!_.isEmpty(this._activeProjectionRefs)) {
                    return this._activeProjectionRefs[this._activeProjectionRefs.length - 1];
                }
            };
            QueryProjectionCollection.prototype.clone = function () {
                return new QueryProjectionCollection(_.clone(this.items), _.clone(this._activeProjectionRefs), this._showAll);
            };
            return QueryProjectionCollection;
        })();
        data.QueryProjectionCollection = QueryProjectionCollection;
        var QueryProjectionsByRole;
        (function (QueryProjectionsByRole) {
            /** Clones the QueryProjectionsByRole. */
            function clone(roles) {
                if (!roles)
                    return roles;
                var clonedRoles = {};
                for (var roleName in roles)
                    clonedRoles[roleName] = roles[roleName].clone();
                return clonedRoles;
            }
            QueryProjectionsByRole.clone = clone;
            /** Returns the QueryProjectionCollection for that role.  Even returns empty collections so that 'drillable' and 'activeProjection' fields are preserved. */
            function getRole(roles, name) {
                debug.assertAnyValue(roles, 'roles');
                debug.assertValue(name, 'name');
                if (!roles)
                    return;
                return roles[name];
            }
            QueryProjectionsByRole.getRole = getRole;
        })(QueryProjectionsByRole = data.QueryProjectionsByRole || (data.QueryProjectionsByRole = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    /** The system used to determine display units used during formatting */
    (function (DisplayUnitSystemType) {
        /** Default display unit system, which saves space by using units such as K, M, bn with PowerView rules for when to pick a unit. Suitable for chart axes. */
        DisplayUnitSystemType[DisplayUnitSystemType["Default"] = 0] = "Default";
        /** A verbose display unit system that will only respect the formatting defined in the model. Suitable for explore mode single-value cards. */
        DisplayUnitSystemType[DisplayUnitSystemType["Verbose"] = 1] = "Verbose";
        /**
         * A display unit system that uses units such as K, M, bn if we have at least one of those units (e.g. 0.9M is not valid as it's less than 1 million).
         * Suitable for dashboard tile cards
         */
        DisplayUnitSystemType[DisplayUnitSystemType["WholeUnits"] = 2] = "WholeUnits";
        /**A display unit system that also contains Auto and None units for data labels*/
        DisplayUnitSystemType[DisplayUnitSystemType["DataLabels"] = 3] = "DataLabels";
    })(powerbi.DisplayUnitSystemType || (powerbi.DisplayUnitSystemType = {}));
    var DisplayUnitSystemType = powerbi.DisplayUnitSystemType;
})(powerbi || (powerbi = {}));
/*
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
/*
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
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        var DataRoleHelper;
        (function (DataRoleHelper) {
            function getMeasureIndexOfRole(grouped, roleName) {
                if (!_.isEmpty(grouped)) {
                    var firstGroup = grouped[0];
                    if (firstGroup.values && firstGroup.values.length > 0) {
                        for (var i = 0, len = firstGroup.values.length; i < len; ++i) {
                            var value = firstGroup.values[i];
                            if (value && value.source) {
                                if (hasRole(value.source, roleName))
                                    return i;
                            }
                        }
                    }
                }
                return -1;
            }
            DataRoleHelper.getMeasureIndexOfRole = getMeasureIndexOfRole;
            function getCategoryIndexOfRole(categories, roleName) {
                if (!_.isEmpty(categories)) {
                    for (var i = 0, ilen = categories.length; i < ilen; i++) {
                        if (hasRole(categories[i].source, roleName))
                            return i;
                    }
                }
                return -1;
            }
            DataRoleHelper.getCategoryIndexOfRole = getCategoryIndexOfRole;
            function hasRole(column, name) {
                var roles = column.roles;
                return roles && roles[name];
            }
            DataRoleHelper.hasRole = hasRole;
            function hasRoleInDataView(dataView, name) {
                return dataView != null
                    && dataView.metadata != null
                    && dataView.metadata.columns
                    && _.any(dataView.metadata.columns, function (c) { return c.roles && c.roles[name] !== undefined; });
            }
            DataRoleHelper.hasRoleInDataView = hasRoleInDataView;
        })(DataRoleHelper = data.DataRoleHelper || (data.DataRoleHelper = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        var DataRoleHelper = powerbi.data.DataRoleHelper;
        function createIDataViewCategoricalReader(dataView) {
            return new DataViewCategoricalReader(dataView);
        }
        data.createIDataViewCategoricalReader = createIDataViewCategoricalReader;
        var DataViewCategoricalReader = (function () {
            function DataViewCategoricalReader(dataView) {
                debug.assertValue(dataView, 'dataView');
                this.dataView = dataView;
                // Validate categories
                var categorical;
                if (dataView)
                    categorical = dataView.categorical;
                var categories;
                if (categorical)
                    categories = this.categories = categorical.categories;
                this.hasValidCategories = !_.isEmpty(categories);
                if (this.hasValidCategories) {
                    this.hasCategoryObjects = !!(categories[0].objects);
                }
                // Validate values
                var values;
                if (categorical)
                    values = categorical.values;
                var hasAnyValidValues = this.hasAnyValidValues = !_.isEmpty(values);
                if (hasAnyValidValues)
                    this.grouped = dataView.categorical.values.grouped();
                if (this.hasAnyValidValues)
                    this.dataHasDynamicSeries = !!this.dataView.categorical.values.source;
            }
            // Category methods
            DataViewCategoricalReader.prototype.hasCategories = function () {
                return this.hasValidCategories;
            };
            DataViewCategoricalReader.prototype.getCategoryCount = function () {
                if (this.hasValidCategories)
                    return this.categories[0].values.length;
                else
                    return 0;
            };
            DataViewCategoricalReader.prototype.getCategoryValues = function (roleName) {
                if (this.hasValidCategories) {
                    var categories = this.getCategoryFromRole(roleName);
                    return categories ? categories.values : undefined;
                }
            };
            DataViewCategoricalReader.prototype.getCategoryValue = function (categoryIndex, roleName) {
                if (this.hasValidCategories) {
                    var categories = this.getCategoryFromRole(roleName);
                    return categories ? categories.values[categoryIndex] : undefined;
                }
            };
            DataViewCategoricalReader.prototype.getCategoryColumn = function (roleName) {
                if (this.hasValidCategories)
                    return this.getCategoryFromRole(roleName);
            };
            DataViewCategoricalReader.prototype.getCategoryMetadataColumn = function (roleName) {
                if (this.hasValidCategories) {
                    var categories = this.getCategoryFromRole(roleName);
                    return categories ? categories.source : undefined;
                }
            };
            DataViewCategoricalReader.prototype.getCategoryDisplayName = function (roleName) {
                if (this.hasValidCategories) {
                    var targetColumn = this.getCategoryColumn(roleName);
                    if (targetColumn && targetColumn.source) {
                        return targetColumn.source.displayName;
                    }
                }
            };
            DataViewCategoricalReader.prototype.hasCompositeCategories = function () {
                if (this.hasValidCategories)
                    return this.categories.length > 1;
            };
            DataViewCategoricalReader.prototype.hasCategoryWithRole = function (roleName) {
                return DataRoleHelper.getCategoryIndexOfRole(this.categories, roleName) !== -1;
            };
            DataViewCategoricalReader.prototype.getCategoryObjects = function (categoryIndex, roleName) {
                if (this.hasValidCategories && this.hasCategoryObjects)
                    return this.getCategoryFromRole(roleName).objects[categoryIndex];
            };
            DataViewCategoricalReader.prototype.getCategoryFromRole = function (roleName) {
                var categories = this.categories;
                return categories[DataRoleHelper.getCategoryIndexOfRole(categories, roleName)];
            };
            // Value and measure methods
            DataViewCategoricalReader.prototype.hasValues = function (roleName) {
                return this.getMeasureIndex(roleName) !== -1;
            };
            DataViewCategoricalReader.prototype.getValues = function (roleName, seriesIndex) {
                if (seriesIndex === void 0) { seriesIndex = 0; }
                var measureIndex = this.getMeasureIndex(roleName);
                if (this.hasAnyValidValues && measureIndex !== -1)
                    return this.grouped[seriesIndex].values[measureIndex].values;
            };
            DataViewCategoricalReader.prototype.getValue = function (roleName, categoryIndex, seriesIndex) {
                if (this.hasAnyValidValues) {
                    var values = this.getValues(roleName, seriesIndex);
                    return values ? values[categoryIndex] : undefined;
                }
            };
            DataViewCategoricalReader.prototype.getFirstNonNullValueForCategory = function (roleName, categoryIndex) {
                if (this.hasAnyValidValues) {
                    if (!this.dataHasDynamicSeries) {
                        debug.assert(this.grouped.length === 1, "getFirstNonNullValueForCategory shouldn't be called if you have a static series");
                        return this.getValue(roleName, categoryIndex);
                    }
                    for (var seriesIndex = 0, seriesCount = this.grouped.length; seriesIndex < seriesCount; seriesIndex++) {
                        var values = this.getValues(roleName, seriesIndex);
                        var value = !_.isEmpty(values) ? values[categoryIndex] : undefined;
                        if (value != null) {
                            return value;
                        }
                    }
                }
            };
            DataViewCategoricalReader.prototype.getMeasureQueryName = function (roleName) {
                var measureIndex = this.getMeasureIndex(roleName);
                if (this.hasAnyValidValues && measureIndex !== -1)
                    return this.grouped[0].values[measureIndex].source.queryName;
            };
            DataViewCategoricalReader.prototype.getValueColumn = function (roleName, seriesIndex) {
                if (seriesIndex === void 0) { seriesIndex = 0; }
                var measureIndex = this.getMeasureIndex(roleName);
                if (this.hasAnyValidValues && measureIndex !== -1)
                    return this.grouped[seriesIndex].values[measureIndex];
            };
            DataViewCategoricalReader.prototype.getValueMetadataColumn = function (roleName, seriesIndex) {
                if (seriesIndex === void 0) { seriesIndex = 0; }
                var measureIndex = this.getMeasureIndex(roleName);
                if (this.hasAnyValidValues && measureIndex !== -1)
                    return this.grouped[seriesIndex].values[measureIndex].source;
            };
            DataViewCategoricalReader.prototype.getValueDisplayName = function (roleName, seriesIndex) {
                if (this.hasAnyValidValues) {
                    var targetColumn = this.getValueColumn(roleName, seriesIndex);
                    if (targetColumn && targetColumn.source) {
                        return targetColumn.source.displayName;
                    }
                }
            };
            DataViewCategoricalReader.prototype.getMeasureIndex = function (roleName) {
                return DataRoleHelper.getMeasureIndexOfRole(this.grouped, roleName);
            };
            // Series methods
            DataViewCategoricalReader.prototype.hasDynamicSeries = function () {
                return this.dataHasDynamicSeries;
            };
            DataViewCategoricalReader.prototype.getSeriesCount = function () {
                if (this.hasAnyValidValues)
                    return this.grouped.length;
            };
            DataViewCategoricalReader.prototype.getSeriesObjects = function (seriesIndex) {
                if (this.hasAnyValidValues)
                    return this.grouped[seriesIndex].objects;
            };
            DataViewCategoricalReader.prototype.getSeriesColumn = function (seriesIndex) {
                if (this.hasAnyValidValues)
                    return this.dataView.categorical.values[seriesIndex];
            };
            DataViewCategoricalReader.prototype.getSeriesColumns = function () {
                if (this.hasAnyValidValues)
                    return this.dataView.categorical.values;
            };
            DataViewCategoricalReader.prototype.getSeriesMetadataColumn = function () {
                if (this.hasAnyValidValues)
                    return this.dataView.categorical.values.source;
            };
            DataViewCategoricalReader.prototype.getSeriesColumnIdentifier = function () {
                if (this.hasAnyValidValues)
                    return this.dataView.categorical.values.identityFields;
            };
            DataViewCategoricalReader.prototype.getSeriesName = function (seriesIndex) {
                if (this.hasAnyValidValues)
                    return this.grouped[seriesIndex].name;
            };
            DataViewCategoricalReader.prototype.getSeriesDisplayName = function () {
                if (this.hasAnyValidValues && this.dataHasDynamicSeries)
                    return this.dataView.categorical.values.source.displayName;
            };
            return DataViewCategoricalReader;
        })();
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        var inheritSingle = powerbi.Prototype.inheritSingle;
        var DataViewConcatenateCategoricalColumns;
        (function (DataViewConcatenateCategoricalColumns) {
            function detectAndApply(dataView, roleMappings, projectionOrdering, selects, projectionActiveItems) {
                debug.assertValue(dataView, 'dataView');
                debug.assertAnyValue(roleMappings, 'roleMappings');
                debug.assertAnyValue(projectionOrdering, 'projectionOrdering');
                var result = dataView;
                var dataViewCategorical = dataView.categorical;
                if (dataViewCategorical) {
                    var concatenationSource = detectCategoricalRoleForHierarchicalGroup(dataViewCategorical, dataView.metadata, roleMappings, selects, projectionActiveItems);
                    if (concatenationSource) {
                        var columnsSortedByProjectionOrdering = sortColumnsByProjectionOrdering(projectionOrdering, concatenationSource.roleName, concatenationSource.categories);
                        if (columnsSortedByProjectionOrdering.length >= 2) {
                            result = applyConcatenation(dataView, concatenationSource.roleName, columnsSortedByProjectionOrdering);
                        }
                    }
                }
                return result;
            }
            DataViewConcatenateCategoricalColumns.detectAndApply = detectAndApply;
            /**
             * Returns the role and its assocated category columns (from dataViewCategorical.categories)
             * that should be concatenated for the case of hierarchical group.
             *
             * Note: In the future if we support sibling hierarchical groups in categorical,
             * change the return type to CategoryColumnsByRole[] and update detection logic.
             */
            function detectCategoricalRoleForHierarchicalGroup(dataViewCategorical, metadata, dataViewMappings, selects, projectionActiveItems) {
                debug.assertValue(dataViewCategorical, 'dataViewCategorical');
                debug.assertAnyValue(dataViewMappings, 'dataViewMappings');
                var result;
                // For now, just handle the case where roleMappings.length === 1.
                // In the future, if there is more than 1, we might want to proceed if, 
                // for example, all role mappings map category to the same role name and they all have { max: 1 } conditions.
                var roleKinds = data.DataViewSelectTransform.createRoleKindFromMetadata(selects, metadata);
                var projections = data.DataViewSelectTransform.projectionsFromSelects(selects, projectionActiveItems);
                var roleMappings = powerbi.DataViewAnalysis.chooseDataViewMappings(projections, dataViewMappings, roleKinds).supportedMappings;
                var roleMappingForCategorical = (roleMappings && roleMappings.length === 1 && !!roleMappings[0].categorical) ? roleMappings[0] : undefined;
                if (roleMappingForCategorical) {
                    var roleNamesForCategory = getAllRolesInCategories(roleMappingForCategorical.categorical);
                    // With "list" in role mapping, is it possible to have multiple role names for category.
                    // For now, proceed to concatenate category columns only when categories are bound to 1 Role.
                    // We can change this if we want to support independent (sibling) group hierarchies in categorical.
                    if (roleNamesForCategory && roleNamesForCategory.length === 1) {
                        var targetRoleName = roleNamesForCategory[0];
                        var isVisualExpectingMaxOneCategoryColumn = !_.isEmpty(roleMappingForCategorical.conditions) &&
                            _.every(roleMappingForCategorical.conditions, function (condition) { return condition[targetRoleName] && condition[targetRoleName].max === 1; });
                        if (isVisualExpectingMaxOneCategoryColumn) {
                            var categoriesForTargetRole = _.filter(dataViewCategorical.categories, function (categoryColumn) { return categoryColumn.source.roles && !!categoryColumn.source.roles[targetRoleName]; });
                            // At least for now, we expect all category columns for the same role to have the same number of value entries.
                            // If that's not the case, we won't run the concatenate logic for that role at all...
                            var areValuesCountsEqual = _.every(categoriesForTargetRole, function (categoryColumn) { return categoryColumn.values.length === categoriesForTargetRole[0].values.length; });
                            // Also, there is no need to concatenate columns unless there is actually more than one column
                            if (areValuesCountsEqual &&
                                categoriesForTargetRole.length >= 2) {
                                result = {
                                    roleName: targetRoleName,
                                    categories: categoriesForTargetRole
                                };
                            }
                        }
                    }
                }
                return result;
            }
            /**
             * Returns the array of role names that are mapped to categorical categories.
             * Returns an empty array if none exists.
             */
            function getAllRolesInCategories(categoricalRoleMapping) {
                debug.assertValue(categoricalRoleMapping, 'categoricalRoleMapping');
                var roleNames = [];
                powerbi.DataViewMapping.visitCategoricalCategories(categoricalRoleMapping.categories, {
                    visitRole: function (roleName) {
                        roleNames.push(roleName);
                    }
                });
                return roleNames;
            }
            function applyConcatenation(dataView, roleName, columnsSortedByProjectionOrdering) {
                debug.assertValue(dataView, 'dataView');
                debug.assertValue(roleName, 'roleName');
                debug.assert(columnsSortedByProjectionOrdering && columnsSortedByProjectionOrdering.length >= 2, 'columnsSortedByProjectionOrdering && columnsSortedByProjectionOrdering.length >= 2');
                var concatenatedValues = concatenateValues(columnsSortedByProjectionOrdering);
                var concatenatedColumnMetadata = createConcatenatedColumnMetadata(roleName, columnsSortedByProjectionOrdering);
                var transformedDataView = inheritSingle(dataView);
                addToMetadata(transformedDataView, concatenatedColumnMetadata);
                var concatenatedCategoryColumn = createConcatenatedCategoryColumn(columnsSortedByProjectionOrdering, concatenatedColumnMetadata, concatenatedValues);
                var dataViewCategorical = dataView.categorical;
                var transformedCategoricalCategories = _.difference(dataViewCategorical.categories, columnsSortedByProjectionOrdering);
                transformedCategoricalCategories.push(concatenatedCategoryColumn);
                var transformedCategorical = inheritSingle(dataViewCategorical);
                transformedCategorical.categories = transformedCategoricalCategories;
                transformedDataView.categorical = transformedCategorical;
                return transformedDataView;
            }
            function concatenateValues(columnsSortedByProjectionOrdering) {
                debug.assertValue(columnsSortedByProjectionOrdering, 'columnsSortedByProjectionOrdering');
                var concatenatedValues = [];
                // concatenate the values in dataViewCategorical.categories[0..length-1].values[j], and store it in combinedValues[j]
                for (var _i = 0; _i < columnsSortedByProjectionOrdering.length; _i++) {
                    var categoryColumn = columnsSortedByProjectionOrdering[_i];
                    for (var i = 0, len = categoryColumn.values.length; i < len; i++) {
                        // TODO VSTS 6842107: need to clean up this value concatenation logic
                        // This code does not have access to valueFormatter module.  So first, move valueFormatter.getFormatString(...)
                        // and/or valueFormatter.formatValueColumn(...) to somewhere near DataViewObjects.ts, and then use it from here.
                        var valueToAppend = categoryColumn.values && categoryColumn.values[i];
                        concatenatedValues[i] = (concatenatedValues[i] === undefined) ? (valueToAppend + '') : (valueToAppend + ' ' + concatenatedValues[i]);
                    }
                }
                return concatenatedValues;
            }
            /**
            * Returns a new array of elements from columns as they are ordered for the specified roleName in the specified projectionOrdering.
            */
            function sortColumnsByProjectionOrdering(projectionOrdering, roleName, columns) {
                debug.assertAnyValue(projectionOrdering, 'projectionOrdering');
                debug.assertValue(roleName, 'roleName');
                debug.assertValue(columns, 'columns');
                var columnsInProjectionOrdering;
                if (projectionOrdering) {
                    // the numeric values in projectionOrdering correspond to the index property of DataViewMetadataColumn
                    var columnsByIndex = {};
                    for (var _i = 0; _i < columns.length; _i++) {
                        var column = columns[_i];
                        if (column.source.roles[roleName]) {
                            debug.assert(!columnsByIndex[column.source.index], 'The specified columns should not contain multiple columns with same index: ' + column.source.index);
                            columnsByIndex[column.source.index] = column;
                        }
                    }
                    var columnIndicesInProjectionOrdering = projectionOrdering[roleName];
                    columnsInProjectionOrdering = _.chain(columnIndicesInProjectionOrdering)
                        .map(function (columnIndex) { return columnsByIndex[columnIndex]; })
                        .filter(function (column) { return !!column; })
                        .value();
                }
                else {
                    // If projectionOrder is unspecified, just return the columns for the specified role in their current order
                    columnsInProjectionOrdering = _.filter(columns, function (column) { return column.source.roles[roleName]; });
                }
                return columnsInProjectionOrdering;
            }
            /**
             * Creates the column metadata that will back the column with the concatenated values.
             */
            function createConcatenatedColumnMetadata(roleName, columnsSortedByProjectionOrdering) {
                debug.assertValue(roleName, 'roleName');
                debug.assertNonEmpty(columnsSortedByProjectionOrdering, 'columnsSortedByProjectionOrdering');
                var concatenatedDisplayName;
                var columnForCurrentDrillLevel = _.last(columnsSortedByProjectionOrdering);
                // By the end of the for-loop, consistentIsMeasure will be:
                // - true if _.every(categoryColumn, c => c.source.isMeasure === true), or else
                // - false if _.every(categoryColumn, c => c.source.isMeasure === false), or else
                // - undefined.
                var consistentIsMeasure = columnForCurrentDrillLevel.source.isMeasure;
                for (var _i = 0; _i < columnsSortedByProjectionOrdering.length; _i++) {
                    var categoryColumn = columnsSortedByProjectionOrdering[_i];
                    var columnSource = categoryColumn.source;
                    concatenatedDisplayName = (concatenatedDisplayName == null) ? columnSource.displayName : (columnSource.displayName + ' ' + concatenatedDisplayName);
                    if (consistentIsMeasure !== columnSource.isMeasure) {
                        consistentIsMeasure = undefined;
                    }
                }
                var newRoles = {};
                newRoles[roleName] = true;
                var newColumnMetadata = {
                    displayName: concatenatedDisplayName,
                    roles: newRoles,
                    type: powerbi.ValueType.fromPrimitiveTypeAndCategory(powerbi.PrimitiveType.Text)
                };
                if (consistentIsMeasure !== undefined) {
                    newColumnMetadata.isMeasure = consistentIsMeasure;
                }
                // TODO VSTS 6842046: Investigate whether we should change that property to mandatory or change the Chart visual code.
                // If queryName is not set at all, the column chart visual will only render column for the first group instance.
                // If queryName is set to any string other than columnForCurrentDrillLevel.source.queryName, then drilldown by group instance is broken (VSTS 6847879).
                newColumnMetadata.queryName = columnForCurrentDrillLevel.source.queryName;
                return newColumnMetadata;
            }
            function addToMetadata(transformedDataView, newColumn) {
                debug.assertValue(transformedDataView, 'transformedDataView');
                debug.assertValue(newColumn, 'newColumn');
                var transformedColumns = inheritSingle(transformedDataView.metadata.columns);
                transformedColumns.push(newColumn);
                var transformedMetadata = inheritSingle(transformedDataView.metadata);
                transformedMetadata.columns = transformedColumns;
                transformedDataView.metadata = transformedMetadata;
            }
            function createConcatenatedCategoryColumn(sourceColumnsSortedByProjectionOrdering, columnMetadata, concatenatedValues) {
                debug.assert(sourceColumnsSortedByProjectionOrdering && sourceColumnsSortedByProjectionOrdering.length >= 2, 'sourceColumnsSortedByProjectionOrdering && sourceColumnsSortedByProjectionOrdering.length >= 2');
                var newCategoryColumn = {
                    source: columnMetadata,
                    values: concatenatedValues
                };
                // We expect every DataViewCategoryColumn in concatenationSourceColumns to have the same set of identities, always.
                // So, we'll just take the identities and identityFields from the first column
                var firstColumn = sourceColumnsSortedByProjectionOrdering[0];
                if (firstColumn.identity) {
                    newCategoryColumn.identity = firstColumn.identity;
                }
                if (firstColumn.identityFields) {
                    newCategoryColumn.identityFields = firstColumn.identityFields;
                }
                // I doubt that any firstColumn.objects property would still make sense in the new column,
                // so I won't copy that over for now.
                return newCategoryColumn;
            }
        })(DataViewConcatenateCategoricalColumns = data.DataViewConcatenateCategoricalColumns || (data.DataViewConcatenateCategoricalColumns = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var DataViewMapping;
    (function (DataViewMapping) {
        function visitMapping(mapping, visitor) {
            debug.assertValue(mapping, 'mapping');
            debug.assertValue(visitor, 'visitor');
            var categorical = mapping.categorical;
            if (categorical)
                visitCategorical(categorical, visitor);
            var table = mapping.table;
            if (table)
                visitTable(table, visitor);
            var matrix = mapping.matrix;
            if (matrix)
                visitMatrix(matrix, visitor);
            var tree = mapping.tree;
            if (tree)
                visitTree(tree, visitor);
            var single = mapping.single;
            if (single)
                visitSingle(single, visitor);
        }
        DataViewMapping.visitMapping = visitMapping;
        function visitCategorical(mapping, visitor) {
            debug.assertValue(mapping, 'mapping');
            debug.assertValue(visitor, 'visitor');
            visitCategoricalCategories(mapping.categories, visitor);
            var values = mapping.values;
            visitCategoricalValues(values, visitor);
            visitGrouped(values, visitor);
        }
        DataViewMapping.visitCategorical = visitCategorical;
        function visitCategoricalCategories(mapping, visitor) {
            debug.assertAnyValue(mapping, 'mapping');
            debug.assertValue(visitor, 'visitor');
            if (mapping) {
                visitBind(mapping, visitor);
                visitFor(mapping, visitor);
                visitList(mapping, visitor);
                visitReduction(mapping, visitor);
            }
        }
        DataViewMapping.visitCategoricalCategories = visitCategoricalCategories;
        function visitCategoricalValues(mapping, visitor) {
            debug.assertAnyValue(mapping, 'mapping');
            debug.assertValue(visitor, 'visitor');
            if (mapping) {
                visitBind(mapping, visitor, 0 /* CategoricalValue */);
                visitFor(mapping, visitor, 0 /* CategoricalValue */);
                visitList(mapping, visitor, 0 /* CategoricalValue */);
                var group = mapping.group;
                if (group) {
                    for (var _i = 0, _a = group.select; _i < _a.length; _i++) {
                        var item = _a[_i];
                        visitBind(item, visitor, 1 /* CategoricalValueGroup */);
                        visitFor(item, visitor, 1 /* CategoricalValueGroup */);
                    }
                }
            }
        }
        DataViewMapping.visitCategoricalValues = visitCategoricalValues;
        function visitTable(mapping, visitor) {
            debug.assertValue(mapping, 'mapping');
            debug.assertValue(visitor, 'visitor');
            var rows = mapping.rows;
            visitBind(rows, visitor);
            visitFor(rows, visitor);
            visitList(rows, visitor);
            visitReduction(rows, visitor);
        }
        DataViewMapping.visitTable = visitTable;
        function visitMatrix(mapping, visitor) {
            debug.assertValue(mapping, 'mapping');
            debug.assertValue(visitor, 'visitor');
            visitMatrixItems(mapping.rows, visitor);
            visitMatrixItems(mapping.columns, visitor);
            visitMatrixItems(mapping.values, visitor);
        }
        /**
         * For visiting DataViewMatrixMapping.rows, DataViewMatrixMapping.columns, or DataViewMatrixMapping.values.
         *
         * @param mapping Can be one of DataViewMatrixMapping.rows, DataViewMatrixMapping.columns, or DataViewMatrixMapping.values.
         * @param visitor The visitor.
         */
        function visitMatrixItems(mapping, visitor) {
            debug.assertAnyValue(mapping, 'mapping');
            debug.assertValue(visitor, 'visitor');
            if (mapping) {
                visitFor(mapping, visitor);
                visitList(mapping, visitor);
                visitReduction(mapping, visitor);
            }
        }
        DataViewMapping.visitMatrixItems = visitMatrixItems;
        function visitTree(mapping, visitor) {
            debug.assertValue(mapping, 'mapping');
            debug.assertValue(visitor, 'visitor');
            visitTreeNodes(mapping.nodes, visitor);
            visitTreeValues(mapping.values, visitor);
        }
        function visitTreeNodes(mapping, visitor) {
            debug.assertAnyValue(mapping, 'mapping');
            debug.assertValue(visitor, 'visitor');
            if (mapping) {
                visitFor(mapping, visitor);
                visitReduction(mapping, visitor);
            }
        }
        DataViewMapping.visitTreeNodes = visitTreeNodes;
        function visitTreeValues(mapping, visitor) {
            debug.assertAnyValue(mapping, 'mapping');
            debug.assertValue(visitor, 'visitor');
            if (mapping) {
                visitFor(mapping, visitor);
            }
        }
        DataViewMapping.visitTreeValues = visitTreeValues;
        function visitBind(mapping, visitor, context) {
            debug.assertValue(mapping, 'mapping');
            debug.assertValue(visitor, 'visitor');
            var bind = mapping.bind;
            if (bind) {
                if (context != null)
                    visitor.visitRole(bind.to, context);
                else
                    visitor.visitRole(bind.to);
            }
        }
        function visitFor(mapping, visitor, context) {
            debug.assertValue(mapping, 'mapping');
            debug.assertValue(visitor, 'visitor');
            var forValue = mapping.for;
            if (forValue) {
                if (context != null)
                    visitor.visitRole(forValue.in, context);
                else
                    visitor.visitRole(forValue.in);
            }
        }
        function visitList(mapping, visitor, context) {
            debug.assertValue(mapping, 'mapping');
            debug.assertValue(visitor, 'visitor');
            var select = mapping.select;
            if (select) {
                for (var _i = 0; _i < select.length; _i++) {
                    var item = select[_i];
                    visitBind(item, visitor, context);
                    visitFor(item, visitor, context);
                }
            }
        }
        function visitGrouped(mapping, visitor) {
            debug.assertAnyValue(mapping, 'mapping');
            debug.assertValue(visitor, 'visitor');
            if (!mapping)
                return;
            var group = mapping.group;
            if (group) {
                visitor.visitRole(group.by);
                visitReduction(group, visitor);
            }
        }
        DataViewMapping.visitGrouped = visitGrouped;
        function visitReduction(mapping, visitor) {
            debug.assertValue(mapping, 'mapping');
            debug.assertValue(visitor, 'visitor');
            if (visitor.visitReduction) {
                var reductionAlgorithm = mapping.dataReductionAlgorithm;
                if (reductionAlgorithm) {
                    visitor.visitReduction(reductionAlgorithm);
                }
            }
        }
        function visitSingle(mapping, visitor) {
            debug.assertValue(mapping, 'mapping');
            debug.assertValue(visitor, 'visitor');
            visitor.visitRole(mapping.role);
        }
    })(DataViewMapping = powerbi.DataViewMapping || (powerbi.DataViewMapping = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        var inheritSingle = powerbi.Prototype.inheritSingle;
        var DataViewNormalizeValues;
        (function (DataViewNormalizeValues) {
            function apply(options) {
                debug.assertValue(options, 'options');
                var rolesToNormalize = _.filter(options.dataRoles, function (role) { return !_.isEmpty(role.requiredTypes); });
                filterVariantMeasures(options.dataview, options.dataViewMappings, rolesToNormalize);
            }
            DataViewNormalizeValues.apply = apply;
            function filterVariantMeasures(dataview, dataViewMappings, rolesToNormalize) {
                debug.assertValue(dataview, 'dataview');
                // Don't perform this unless we actually have dataViewMappings and variant measures to suppress
                // When we switch to lazy per-visual DataView creation, we'll be able to remove this check.
                if (_.isEmpty(dataViewMappings) || _.isEmpty(rolesToNormalize))
                    return;
                var columnFilter = generateMetadataColumnFilter(dataview.metadata.columns, rolesToNormalize);
                var valueFilter = generateValueFilter(dataview.metadata.columns, rolesToNormalize);
                var usedMappings = {};
                for (var _i = 0; _i < dataViewMappings.length; _i++) {
                    var dataViewMapping = dataViewMappings[_i];
                    // Get dataview specified in mappings which are also in dataview
                    for (var dataViewMappingProp in dataViewMapping) {
                        if (dataview[dataViewMappingProp] != null)
                            usedMappings[dataViewMappingProp] = true;
                    }
                }
                if (usedMappings['categorical'])
                    filterVariantMeasuresCategorical(dataview.categorical, columnFilter, valueFilter);
                if (usedMappings['table'])
                    filterVariantMeasuresTable(dataview.table, columnFilter, valueFilter);
                if (usedMappings['tree'])
                    filterVariantMeasuresTreeNode(dataview.tree.root, columnFilter, valueFilter);
                if (usedMappings['matrix'])
                    filterVariantMeasuresMatrix(dataview.matrix, columnFilter, valueFilter);
                if (usedMappings['single'])
                    filterVariantMeasuresSingle(dataview, dataViewMappings, rolesToNormalize, valueFilter);
            }
            DataViewNormalizeValues.filterVariantMeasures = filterVariantMeasures;
            function generateMetadataColumnFilter(columns, rolesToNormalize) {
                if (!columns || !rolesToNormalize)
                    return function () { return false; };
                var columnsToNormalize = {};
                for (var _i = 0; _i < columns.length; _i++) {
                    var column = columns[_i];
                    var roles = column.roles;
                    if (!roles)
                        continue;
                    for (var _a = 0; _a < rolesToNormalize.length; _a++) {
                        var role = rolesToNormalize[_a];
                        if (!roles[role.name])
                            continue;
                        columnsToNormalize[column.index] = true;
                        break;
                    }
                }
                return function (columnIndex) {
                    if (isNaN(columnIndex))
                        return false;
                    return !!columnsToNormalize[columnIndex];
                };
            }
            DataViewNormalizeValues.generateMetadataColumnFilter = generateMetadataColumnFilter;
            function generateValueFilter(columns, rolesToNormalize) {
                if (!columns || !rolesToNormalize)
                    return function () { return true; };
                var columnValueFilters = [];
                // Build columnValueFilters based on role requiredTypes
                for (var _i = 0; _i < columns.length; _i++) {
                    var column = columns[_i];
                    var columnValueFilter = generateColumnValueFilter(column, rolesToNormalize);
                    if (columnValueFilter)
                        columnValueFilters[column.index] = columnValueFilter;
                }
                return function (columnIndex, value) {
                    if (columnValueFilters[columnIndex])
                        return columnValueFilters[columnIndex](value);
                    return true;
                };
            }
            DataViewNormalizeValues.generateValueFilter = generateValueFilter;
            function generateColumnValueFilter(column, rolesToNormalize) {
                var requiredTypes = getColumnRequiredTypes(column, rolesToNormalize);
                if (_.isEmpty(requiredTypes))
                    return;
                return function (value) {
                    return doesValueMatchTypes(value, requiredTypes);
                };
            }
            function getColumnRequiredTypes(column, rolesToNormalize) {
                var requiredTypes = [];
                var columnRoles = column && column.roles;
                if (!columnRoles)
                    return requiredTypes;
                for (var _i = 0; _i < rolesToNormalize.length; _i++) {
                    var role = rolesToNormalize[_i];
                    if (!columnRoles[role.name])
                        continue;
                    for (var _a = 0, _b = role.requiredTypes; _a < _b.length; _a++) {
                        var typeDescriptor = _b[_a];
                        var type = powerbi.ValueType.fromDescriptor(typeDescriptor);
                        requiredTypes.push(type);
                    }
                }
                return requiredTypes;
            }
            DataViewNormalizeValues.getColumnRequiredTypes = getColumnRequiredTypes;
            function filterVariantMeasuresCategorical(dataview, columnFilter, valueFilter) {
                var values = dataview && dataview.values;
                if (!values)
                    return;
                var valuesGrouped = values.grouped();
                if (!valuesGrouped)
                    return;
                for (var _i = 0; _i < valuesGrouped.length; _i++) {
                    var valueGroup = valuesGrouped[_i];
                    var valuesInGroup = valueGroup.values;
                    for (var _a = 0; _a < valuesInGroup.length; _a++) {
                        var valueColumn = valuesInGroup[_a];
                        var columnIndex = valueColumn.source.index;
                        if (!columnFilter(columnIndex))
                            continue;
                        for (var i = 0, ilen = valueColumn.values.length; i < ilen; i++) {
                            valueColumn.values = normalizeVariant(valueColumn.values, i, columnIndex, valueFilter);
                        }
                    }
                }
            }
            function filterVariantMeasuresTable(dataview, columnFilter, valueFilter) {
                var columns = dataview && dataview.columns;
                if (!columns)
                    return;
                var filteredColumns = [];
                for (var _i = 0; _i < columns.length; _i++) {
                    var column = columns[_i];
                    if (columnFilter(column.index))
                        filteredColumns.push(column.index);
                }
                var rows = dataview.rows;
                for (var i = 0, ilen = rows.length; i < ilen; i++) {
                    for (var _a = 0; _a < filteredColumns.length; _a++) {
                        var index = filteredColumns[_a];
                        rows[i] = normalizeVariant(rows[i], index, index, valueFilter);
                    }
                }
            }
            function filterVariantMeasuresTreeNode(node, columnFilter, valueFilter) {
                if (node.values) {
                    for (var columnIndex in node.values) {
                        // In dataView.tree, the keys in node.values correspond to columnIndex of the node value
                        if (columnFilter(columnIndex)) {
                            // According to nojorgen, it is possible to have primitive values as values in the node.values dictionary.
                            if (typeof (node.values[columnIndex]) === 'object' && ('value' in node.values[columnIndex]))
                                node.values[columnIndex] = normalizeVariant(node.values[columnIndex], 'value', columnIndex, valueFilter);
                            else
                                node.values = normalizeVariant(node.values, columnIndex, columnIndex, valueFilter);
                        }
                    }
                }
                else if (node.children) {
                    for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                        var child = _a[_i];
                        filterVariantMeasuresTreeNode(child, columnFilter, valueFilter);
                    }
                }
            }
            function filterVariantMeasuresMatrix(dataview, columnFilter, valueFilter) {
                var root = dataview && dataview.rows && dataview.rows.root;
                if (!root)
                    return;
                // Recurse into rows.children
                // e.g. rows.children -> .children -> .children.values
                filterVariantMeasuresMatrixRecursive(dataview, root, columnFilter, valueFilter);
            }
            function filterVariantMeasuresMatrixRecursive(dataviewMatrix, node, columnFilter, valueFilter) {
                if (node.values) {
                    for (var id in node.values) {
                        // Note related to VSTS 6547124: In dataView.matrix, the keys in node.values are NOT equivalent to value.valueSourceIndex.
                        var nodeValue = node.values[id];
                        // the property DataViewMatrixNodeValue.valueSourceIndex will not exist if valueSourceIndex is 0 for that value
                        var valueSourceIndex = nodeValue.valueSourceIndex || 0;
                        // index is an optional property on DataViewMetadataColumn, but I am not sure when it will ever be undefined in a matrix' column metadata
                        var columnIndex = dataviewMatrix.valueSources[valueSourceIndex].index;
                        if (_.isNumber(columnIndex) && columnFilter(columnIndex)) {
                            node.values[id] = normalizeVariant(nodeValue, 'value', columnIndex, valueFilter);
                        }
                    }
                }
                else if (node.children) {
                    for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                        var child = _a[_i];
                        filterVariantMeasuresMatrixRecursive(dataviewMatrix, child, columnFilter, valueFilter);
                    }
                }
            }
            function filterVariantMeasuresSingle(dataview, dataViewMappings, rolesToNormalize, valueFilter) {
                if (!dataview.single)
                    return;
                var roleNames = [];
                for (var _i = 0; _i < rolesToNormalize.length; _i++) {
                    var role = rolesToNormalize[_i];
                    if (role.name)
                        roleNames.push(role.name);
                }
                var columns = dataview.metadata.columns;
                for (var _a = 0; _a < dataViewMappings.length; _a++) {
                    var dataViewMapping = dataViewMappings[_a];
                    var roleName = dataViewMapping.single.role;
                    if (roleNames.indexOf(roleName) !== -1) {
                        var column = firstColumnByRoleName(columns, roleName);
                        if (column)
                            dataview.single = normalizeVariant(dataview.single, 'value', column.index, valueFilter);
                        return;
                    }
                }
            }
            function normalizeVariant(object, key, columnIndex, valueFilter) {
                if (!object)
                    return;
                var value = object[key];
                if (value !== null && !valueFilter(columnIndex, value)) {
                    object = inheritSingle(object);
                    object[key] = null;
                }
                return object;
            }
            DataViewNormalizeValues.normalizeVariant = normalizeVariant;
            function doesValueMatchTypes(value, types) {
                for (var _i = 0; _i < types.length; _i++) {
                    var type = types[_i];
                    if (type.numeric || type.integer)
                        return typeof (value) === 'number';
                }
                return false;
            }
            function firstColumnByRoleName(columns, roleName) {
                for (var _i = 0; _i < columns.length; _i++) {
                    var column = columns[_i];
                    var columnRoles = column && column.roles;
                    if (columnRoles && columnRoles[roleName])
                        return column;
                }
            }
        })(DataViewNormalizeValues = data.DataViewNormalizeValues || (data.DataViewNormalizeValues = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var DataViewObjects;
    (function (DataViewObjects) {
        /** Gets the value of the given object/property pair. */
        function getValue(objects, propertyId, defaultValue) {
            debug.assertAnyValue(objects, 'objects');
            debug.assertValue(propertyId, 'propertyId');
            if (!objects)
                return defaultValue;
            var objectOrMap = objects[propertyId.objectName];
            debug.assert(!isUserDefined(objectOrMap), 'expected DataViewObject');
            var object = objectOrMap;
            return DataViewObject.getValue(object, propertyId.propertyName, defaultValue);
        }
        DataViewObjects.getValue = getValue;
        /** Gets an object from objects. */
        function getObject(objects, objectName, defaultValue) {
            if (objects && objects[objectName]) {
                var object = objects[objectName];
                debug.assert(!isUserDefined(object), 'expected DataViewObject');
                return object;
            }
            else {
                return defaultValue;
            }
        }
        DataViewObjects.getObject = getObject;
        /** Gets a map of user-defined objects. */
        function getUserDefinedObjects(objects, objectName) {
            if (objects && objects[objectName]) {
                var map = objects[objectName];
                debug.assert(isUserDefined(map), 'expected DataViewObjectMap');
                return map;
            }
        }
        DataViewObjects.getUserDefinedObjects = getUserDefinedObjects;
        /** Gets the solid color from a fill property. */
        function getFillColor(objects, propertyId, defaultColor) {
            var value = getValue(objects, propertyId);
            if (!value || !value.solid)
                return defaultColor;
            return value.solid.color;
        }
        DataViewObjects.getFillColor = getFillColor;
        /** Returns true if the given object represents a collection of user-defined objects */
        function isUserDefined(objectOrMap) {
            return _.isArray(objectOrMap);
        }
        DataViewObjects.isUserDefined = isUserDefined;
    })(DataViewObjects = powerbi.DataViewObjects || (powerbi.DataViewObjects = {}));
    var DataViewObject;
    (function (DataViewObject) {
        function getValue(object, propertyName, defaultValue) {
            debug.assertAnyValue(object, 'object');
            debug.assertValue(propertyName, 'propertyName');
            if (!object)
                return defaultValue;
            var propertyValue = object[propertyName];
            if (propertyValue === undefined)
                return defaultValue;
            return propertyValue;
        }
        DataViewObject.getValue = getValue;
        /** Gets the solid color from a fill property using only a propertyName */
        function getFillColorByPropertyName(objects, propertyName, defaultColor) {
            var value = DataViewObject.getValue(objects, propertyName);
            if (!value || !value.solid)
                return defaultColor;
            return value.solid.color;
        }
        DataViewObject.getFillColorByPropertyName = getFillColorByPropertyName;
    })(DataViewObject = powerbi.DataViewObject || (powerbi.DataViewObject = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        var JsonComparer = jsCommon.JsonComparer;
        var DataViewObjectDefinitions;
        (function (DataViewObjectDefinitions) {
            /** Creates or reuses a DataViewObjectDefinition for matching the given objectName and selector within the defns. */
            function ensure(defns, objectName, selector) {
                debug.assertValue(defns, 'defns');
                var defnsForObject = defns[objectName];
                if (!defnsForObject)
                    defns[objectName] = defnsForObject = [];
                for (var i = 0, len = defnsForObject.length; i < len; i++) {
                    var defn = defnsForObject[i];
                    if (data.Selector.equals(defn.selector, selector))
                        return defn;
                }
                var newDefn = {
                    selector: selector,
                    properties: {},
                };
                defnsForObject.push(newDefn);
                return newDefn;
            }
            DataViewObjectDefinitions.ensure = ensure;
            function deleteProperty(defns, objectName, selector, propertyName) {
                debug.assertValue(defns, 'defns');
                var defn = getObjectDefinition(defns, objectName, selector);
                if (!defn)
                    return;
                DataViewObjectDefinition.deleteSingleProperty(defn, propertyName);
            }
            DataViewObjectDefinitions.deleteProperty = deleteProperty;
            function setValue(defns, propertyId, selector, value) {
                debug.assertValue(defns, 'defns');
                debug.assertValue(propertyId, 'propertyId');
                ensure(defns, propertyId.objectName, selector).properties[propertyId.propertyName] = value;
            }
            DataViewObjectDefinitions.setValue = setValue;
            function getValue(defns, propertyId, selector) {
                var properties = getPropertyContainer(defns, propertyId, selector);
                if (!properties)
                    return;
                return properties[propertyId.propertyName];
            }
            DataViewObjectDefinitions.getValue = getValue;
            function getPropertyContainer(defns, propertyId, selector) {
                var defn = getObjectDefinition(defns, propertyId.objectName, selector);
                if (!defn)
                    return;
                return defn.properties;
            }
            DataViewObjectDefinitions.getPropertyContainer = getPropertyContainer;
            function getObjectDefinition(defns, objectName, selector) {
                debug.assertAnyValue(defns, 'defns');
                debug.assertValue(objectName, 'objectName');
                debug.assertAnyValue(selector, 'selector');
                if (!defns)
                    return;
                var defnsForObject = defns[objectName];
                if (!defnsForObject)
                    return;
                for (var i = 0, len = defnsForObject.length; i < len; i++) {
                    var defn = defnsForObject[i];
                    if (data.Selector.equals(defn.selector, selector))
                        return defn;
                }
            }
            DataViewObjectDefinitions.getObjectDefinition = getObjectDefinition;
            function propertiesAreEqual(a, b) {
                if (a instanceof data.SemanticFilter && b instanceof data.SemanticFilter) {
                    return data.SemanticFilter.isSameFilter(a, b);
                }
                return JsonComparer.equals(a, b);
            }
            DataViewObjectDefinitions.propertiesAreEqual = propertiesAreEqual;
            function allPropertiesAreEqual(a, b) {
                debug.assertValue(a, 'a');
                debug.assertValue(b, 'b');
                if (Object.keys(a).length !== Object.keys(b).length)
                    return false;
                for (var property in a) {
                    if (!propertiesAreEqual(a[property], b[property]))
                        return false;
                }
                return true;
            }
            DataViewObjectDefinitions.allPropertiesAreEqual = allPropertiesAreEqual;
            function encodePropertyValue(value, valueTypeDescriptor) {
                debug.assertAnyValue(value, 'value');
                debug.assertValue(valueTypeDescriptor, 'valueTypeDescriptor');
                if (valueTypeDescriptor.bool) {
                    if (typeof (value) !== 'boolean')
                        value = false; // This is fallback, which doesn't really belong here.
                    return data.SQExprBuilder.boolean(value);
                }
                else if (valueTypeDescriptor.text || (valueTypeDescriptor.scripting && valueTypeDescriptor.scripting.source)) {
                    return data.SQExprBuilder.text(value);
                }
                else if (valueTypeDescriptor.numeric) {
                    if ($.isNumeric(value))
                        return data.SQExprBuilder.double(+value);
                }
                else if (valueTypeDescriptor.fill) {
                    if (value) {
                        return {
                            solid: { color: data.SQExprBuilder.text(value) }
                        };
                    }
                }
                else if (valueTypeDescriptor.formatting) {
                    if (valueTypeDescriptor.formatting.labelDisplayUnits) {
                        return data.SQExprBuilder.double(+value);
                    }
                    else {
                        return data.SQExprBuilder.text(value);
                    }
                }
                else if (valueTypeDescriptor.enumeration) {
                    if ($.isNumeric(value))
                        return data.SQExprBuilder.double(+value);
                    else
                        return data.SQExprBuilder.text(value);
                }
                else if (valueTypeDescriptor.misc) {
                    if (value) {
                        value = data.SQExprBuilder.text(value);
                    }
                    else {
                        value = null;
                    }
                }
                else if (valueTypeDescriptor.image) {
                    if (value) {
                        var imageValue = value;
                        var imageDefinition = {
                            name: data.SQExprBuilder.text(imageValue.name),
                            url: data.SQExprBuilder.text(imageValue.url),
                        };
                        if (imageValue.scaling)
                            imageDefinition.scaling = data.SQExprBuilder.text(imageValue.scaling);
                        return imageDefinition;
                    }
                }
                return value;
            }
            DataViewObjectDefinitions.encodePropertyValue = encodePropertyValue;
            function clone(original) {
                debug.assertValue(original, 'original');
                var cloned = {};
                for (var objectName in original) {
                    var originalDefns = original[objectName];
                    if (_.isEmpty(originalDefns))
                        continue;
                    var clonedDefns = [];
                    for (var _i = 0; _i < originalDefns.length; _i++) {
                        var originalDefn = originalDefns[_i];
                        clonedDefns.push({
                            properties: cloneProperties(originalDefn.properties),
                            selector: originalDefn.selector,
                        });
                    }
                    cloned[objectName] = clonedDefns;
                }
                return cloned;
            }
            DataViewObjectDefinitions.clone = clone;
            function cloneProperties(original) {
                debug.assertValue(original, 'original');
                // NOTE: properties are considered atomic, so a shallow clone is appropriate here.
                return _.clone(original);
            }
        })(DataViewObjectDefinitions = data.DataViewObjectDefinitions || (data.DataViewObjectDefinitions = {}));
        var DataViewObjectDefinition;
        (function (DataViewObjectDefinition) {
            function deleteSingleProperty(defn, propertyName) {
                //note: We decided that delete is acceptable here and that we don't need optimization here
                delete defn.properties[propertyName];
            }
            DataViewObjectDefinition.deleteSingleProperty = deleteSingleProperty;
        })(DataViewObjectDefinition = data.DataViewObjectDefinition || (data.DataViewObjectDefinition = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        var DataViewObjectDescriptors;
        (function (DataViewObjectDescriptors) {
            /** Attempts to find the format string property.  This can be useful for upgrade and conversion. */
            function findFormatString(descriptors) {
                return findProperty(descriptors, function (propDesc) {
                    var formattingTypeDesc = powerbi.ValueType.fromDescriptor(propDesc.type).formatting;
                    return formattingTypeDesc && formattingTypeDesc.formatString;
                });
            }
            DataViewObjectDescriptors.findFormatString = findFormatString;
            /** Attempts to find the filter property.  This can be useful for propagating filters from one visual to others. */
            function findFilterOutput(descriptors) {
                return findProperty(descriptors, function (propDesc) {
                    var propType = propDesc.type;
                    return propType && !!propType.filter;
                });
            }
            DataViewObjectDescriptors.findFilterOutput = findFilterOutput;
            /** Attempts to find the default value property.  This can be useful for propagating schema default value. */
            function findDefaultValue(descriptors) {
                return findProperty(descriptors, function (propDesc) {
                    var propType = propDesc.type;
                    return propType && !!propType.expression && propType.expression.defaultValue;
                });
            }
            DataViewObjectDescriptors.findDefaultValue = findDefaultValue;
            function findProperty(descriptors, propPredicate) {
                debug.assertAnyValue(descriptors, 'descriptors');
                debug.assertAnyValue(propPredicate, 'propPredicate');
                if (!descriptors)
                    return;
                for (var objectName in descriptors) {
                    var objPropDescs = descriptors[objectName].properties;
                    for (var propertyName in objPropDescs) {
                        if (propPredicate(objPropDescs[propertyName])) {
                            return {
                                objectName: objectName,
                                propertyName: propertyName,
                            };
                        }
                    }
                }
            }
        })(DataViewObjectDescriptors = data.DataViewObjectDescriptors || (data.DataViewObjectDescriptors = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        var DataViewObjectEvaluationUtils;
        (function (DataViewObjectEvaluationUtils) {
            function evaluateDataViewObjects(evalContext, objectDescriptors, objectDefns) {
                debug.assertValue(evalContext, 'evalContext');
                debug.assertValue(objectDescriptors, 'objectDescriptors');
                debug.assertValue(objectDefns, 'objectDefns');
                var objects;
                for (var j = 0, jlen = objectDefns.length; j < jlen; j++) {
                    var objectDefinition = objectDefns[j], objectName = objectDefinition.name;
                    var evaluatedObject = data.DataViewObjectEvaluator.run(evalContext, objectDescriptors[objectName], objectDefinition.properties);
                    if (!evaluatedObject)
                        continue;
                    if (!objects)
                        objects = {};
                    // NOTE: this currently has last-object-wins semantics.
                    objects[objectName] = evaluatedObject;
                }
                return objects;
            }
            DataViewObjectEvaluationUtils.evaluateDataViewObjects = evaluateDataViewObjects;
            function groupObjectsBySelector(objectDefinitions) {
                debug.assertAnyValue(objectDefinitions, 'objectDefinitions');
                var grouped = {
                    data: [],
                };
                if (objectDefinitions) {
                    for (var objectName in objectDefinitions) {
                        var objectDefnList = objectDefinitions[objectName];
                        for (var i = 0, len = objectDefnList.length; i < len; i++) {
                            var objectDefn = objectDefnList[i];
                            ensureDefinitionListForSelector(grouped, objectDefn.selector).objects.push({
                                name: objectName,
                                properties: objectDefn.properties,
                            });
                        }
                    }
                }
                return grouped;
            }
            DataViewObjectEvaluationUtils.groupObjectsBySelector = groupObjectsBySelector;
            function ensureDefinitionListForSelector(grouped, selector) {
                debug.assertValue(grouped, 'grouped');
                debug.assertAnyValue(selector, 'selector');
                if (!selector) {
                    if (!grouped.metadataOnce)
                        grouped.metadataOnce = { objects: [] };
                    return grouped.metadataOnce;
                }
                var groupedObjects;
                if (selector.data) {
                    groupedObjects = grouped.data;
                }
                else if (selector.metadata) {
                    if (!grouped.metadata)
                        grouped.metadata = [];
                    groupedObjects = grouped.metadata;
                }
                else if (selector.id) {
                    if (!grouped.userDefined)
                        grouped.userDefined = [];
                    groupedObjects = grouped.userDefined;
                }
                debug.assert(!!groupedObjects, 'GroupedObjects is not defined.  Indicates malformed selector.');
                for (var _i = 0; _i < groupedObjects.length; _i++) {
                    var item_1 = groupedObjects[_i];
                    if (data.Selector.equals(selector, item_1.selector))
                        return item_1;
                }
                var item = {
                    selector: selector,
                    objects: [],
                };
                groupedObjects.push(item);
                return item;
            }
            function addImplicitObjects(objectsForAllSelectors, objectDescriptors, columns, selectTransforms) {
                debug.assertValue(objectsForAllSelectors, 'objectsForAllSelectors');
                debug.assertValue(objectDescriptors, 'objectDescriptors');
                debug.assertValue(columns, 'columns');
                debug.assertAnyValue(selectTransforms, 'selectTransforms');
                if (selectTransforms) {
                    addDefaultFormatString(objectsForAllSelectors, objectDescriptors, columns, selectTransforms);
                    addDefaultValue(objectsForAllSelectors, objectDescriptors, columns, selectTransforms);
                }
            }
            DataViewObjectEvaluationUtils.addImplicitObjects = addImplicitObjects;
            function addDefaultFormatString(objectsForAllSelectors, objectDescriptors, columns, selectTransforms) {
                debug.assertValue(objectsForAllSelectors, 'objectsForAllSelectors');
                debug.assertValue(objectDescriptors, 'objectDescriptors');
                debug.assertValue(columns, 'columns');
                debug.assertValue(selectTransforms, 'selectTransforms');
                var formatStringProp = data.DataViewObjectDescriptors.findFormatString(objectDescriptors);
                if (!formatStringProp)
                    return;
                for (var selectIdx = 0, selectLen = selectTransforms.length; selectIdx < selectLen; selectIdx++) {
                    var selectTransform = selectTransforms[selectIdx];
                    if (!selectTransform)
                        continue;
                    debug.assertValue(selectTransform.queryName, 'selectTransform.queryName');
                    applyFormatString(objectsForAllSelectors, formatStringProp, selectTransform.queryName, selectTransform.format || getColumnFormatForIndex(columns, selectIdx));
                }
            }
            /** Registers properties for default value, if the properties are not explicitly provided. */
            function addDefaultValue(objectsForAllSelectors, objectDescriptors, columns, selectTransforms) {
                debug.assertValue(objectsForAllSelectors, 'objectsForAllSelectors');
                debug.assertValue(objectDescriptors, 'objectDescriptors');
                debug.assertValue(columns, 'columns');
                debug.assertValue(selectTransforms, 'selectTransforms');
                var defaultValueProp = data.DataViewObjectDescriptors.findDefaultValue(objectDescriptors);
                if (!defaultValueProp)
                    return;
                for (var _i = 0; _i < selectTransforms.length; _i++) {
                    var selectTransform = selectTransforms[_i];
                    if (!selectTransform)
                        continue;
                    debug.assertValue(selectTransform.queryName, 'selectTransform.queryName');
                    applyDefaultValue(objectsForAllSelectors, defaultValueProp, selectTransform.queryName, selectTransform.defaultValue);
                }
            }
            function getColumnFormatForIndex(columns, selectIdx) {
                for (var columnIdx = 0, columnLen = columns.length; columnIdx < columnLen; columnIdx++) {
                    var column = columns[columnIdx];
                    if (!column || column.index !== selectIdx)
                        continue;
                    return column.format;
                }
            }
            function applyFormatString(objectsForAllSelectors, formatStringProp, queryName, formatStringValue) {
                if (!formatStringValue)
                    return;
                // There is a format string specified -- apply it as an object property, if there is not already one specified.
                applyMetadataProperty(objectsForAllSelectors, formatStringProp, { metadata: queryName }, data.SQExprBuilder.text(formatStringValue));
            }
            function applyDefaultValue(objectsForAllSelectors, defaultValueProp, queryName, defaultValue) {
                if (!defaultValue)
                    return;
                // There is a default value specified -- apply it as an object property, if there is not already one specified.
                applyMetadataProperty(objectsForAllSelectors, defaultValueProp, { metadata: queryName }, defaultValue);
            }
            function applyMetadataProperty(objectsForAllSelectors, propertyId, selector, value) {
                var objectDefns;
                if (selector) {
                    var metadataObjects = objectsForAllSelectors.metadata;
                    if (!metadataObjects)
                        metadataObjects = objectsForAllSelectors.metadata = [];
                    objectDefns = metadataObjects;
                }
                else {
                    var metadataOnce = objectsForAllSelectors.metadataOnce;
                    if (!metadataOnce)
                        metadataOnce = objectsForAllSelectors.metadataOnce = { selector: selector, objects: [] };
                    objectDefns = [metadataOnce];
                }
                var targetMetadataObject = findWithMatchingSelector(objectDefns, selector);
                var targetObjectDefn;
                if (targetMetadataObject) {
                    var targetObjectDefns = targetMetadataObject.objects;
                    targetObjectDefn = findExistingObject(targetObjectDefns, propertyId.objectName);
                    if (targetObjectDefn) {
                        if (targetObjectDefn.properties[propertyId.propertyName])
                            return;
                    }
                    else {
                        targetObjectDefn = {
                            name: propertyId.objectName,
                            properties: {},
                        };
                        targetObjectDefns.push(targetObjectDefn);
                    }
                }
                else {
                    targetObjectDefn = {
                        name: propertyId.objectName,
                        properties: {}
                    };
                    objectDefns.push({
                        selector: selector,
                        objects: [targetObjectDefn],
                    });
                }
                targetObjectDefn.properties[propertyId.propertyName] = value;
            }
            function findWithMatchingSelector(objects, selector) {
                debug.assertValue(objects, 'objects');
                debug.assertAnyValue(selector, 'selector');
                for (var i = 0, len = objects.length; i < len; i++) {
                    var object = objects[i];
                    if (data.Selector.equals(object.selector, selector))
                        return object;
                }
            }
            function findExistingObject(objectDefns, objectName) {
                debug.assertValue(objectDefns, 'objectDefns');
                debug.assertValue(objectName, 'objectName');
                for (var i = 0, len = objectDefns.length; i < len; i++) {
                    var objectDefn = objectDefns[i];
                    if (objectDefn.name === objectName)
                        return objectDefn;
                }
            }
        })(DataViewObjectEvaluationUtils = data.DataViewObjectEvaluationUtils || (data.DataViewObjectEvaluationUtils = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        /** Responsible for evaluating object property expressions to be applied at various scopes in a DataView. */
        var DataViewObjectEvaluator;
        (function (DataViewObjectEvaluator) {
            var colorValueType = powerbi.ValueType.fromDescriptor({ formatting: { color: true } });
            var numericType = powerbi.ValueType.fromDescriptor({ numeric: true });
            var textType = powerbi.ValueType.fromDescriptor({ text: true });
            function run(evalContext, objectDescriptor, propertyDefinitions) {
                debug.assertValue(evalContext, 'evalContext');
                debug.assertAnyValue(objectDescriptor, 'objectDescriptor');
                debug.assertValue(propertyDefinitions, 'propertyDefinitions');
                if (!objectDescriptor)
                    return;
                var object, propertyDescriptors = objectDescriptor.properties;
                for (var propertyName in propertyDefinitions) {
                    var propertyDefinition = propertyDefinitions[propertyName], propertyDescriptor = propertyDescriptors[propertyName];
                    if (!propertyDescriptor)
                        continue;
                    var propertyValue = evaluateProperty(evalContext, propertyDescriptor, propertyDefinition);
                    if (propertyValue === undefined)
                        continue;
                    if (!object)
                        object = {};
                    object[propertyName] = propertyValue;
                }
                return object;
            }
            DataViewObjectEvaluator.run = run;
            /** Note: Exported for testability */
            function evaluateProperty(evalContext, propertyDescriptor, propertyDefinition) {
                debug.assertValue(evalContext, 'evalContext');
                debug.assertValue(propertyDescriptor, 'propertyDescriptor');
                debug.assertValue(propertyDefinition, 'propertyDefinition');
                var structuralType = propertyDescriptor.type;
                if (structuralType && structuralType.expression)
                    return propertyDefinition;
                var value = evaluateValue(evalContext, propertyDefinition, powerbi.ValueType.fromDescriptor(propertyDescriptor.type));
                if (value !== undefined || (propertyDefinition instanceof data.RuleEvaluation))
                    return value;
                return evaluateFill(evalContext, propertyDefinition, structuralType)
                    || evaluateFillRule(evalContext, propertyDefinition, structuralType)
                    || evaluateImage(evalContext, propertyDefinition, structuralType)
                    || evaluateParagraphs(evalContext, propertyDefinition, structuralType)
                    || propertyDefinition;
            }
            DataViewObjectEvaluator.evaluateProperty = evaluateProperty;
            function evaluateFill(evalContext, fillDefn, type) {
                var fillType = type.fill;
                if (!fillType)
                    return;
                if (fillType && fillType.solid && fillType.solid.color && fillDefn.solid) {
                    return {
                        solid: {
                            color: evaluateValue(evalContext, fillDefn.solid.color, powerbi.ValueType.fromExtendedType(powerbi.ExtendedType.Color)),
                        }
                    };
                }
            }
            function evaluateFillRule(evalContext, fillRuleDefn, type) {
                if (!type.fillRule)
                    return;
                if (fillRuleDefn.linearGradient2) {
                    var linearGradient2 = fillRuleDefn.linearGradient2;
                    return {
                        linearGradient2: {
                            min: evaluateColorStop(evalContext, linearGradient2.min),
                            max: evaluateColorStop(evalContext, linearGradient2.max),
                        }
                    };
                }
                if (fillRuleDefn.linearGradient3) {
                    var linearGradient3 = fillRuleDefn.linearGradient3;
                    return {
                        linearGradient3: {
                            min: evaluateColorStop(evalContext, linearGradient3.min),
                            mid: evaluateColorStop(evalContext, linearGradient3.mid),
                            max: evaluateColorStop(evalContext, linearGradient3.max),
                        }
                    };
                }
            }
            function evaluateColorStop(evalContext, colorStop) {
                debug.assertValue(evalContext, 'evalContext');
                debug.assertValue(colorStop, 'colorStop');
                var step = {
                    color: evaluateValue(evalContext, colorStop.color, colorValueType),
                };
                var value = evaluateValue(evalContext, colorStop.value, numericType);
                if (value != null)
                    step.value = value;
                return step;
            }
            function evaluateImage(evalContext, definition, type) {
                debug.assertValue(evalContext, 'evalContext');
                debug.assertAnyValue(definition, 'definition');
                debug.assertValue(type, 'type');
                if (!type.image || !definition)
                    return;
                var value = {
                    name: evaluateValue(evalContext, definition.name, textType),
                    url: evaluateValue(evalContext, definition.url, powerbi.ValueType.fromDescriptor(powerbi.ImageDefinition.urlType)),
                };
                if (definition.scaling)
                    value.scaling = evaluateValue(evalContext, definition.scaling, textType);
                return value;
            }
            function evaluateParagraphs(evalContext, definition, type) {
                debug.assertValue(evalContext, 'evalContext');
                debug.assertAnyValue(definition, 'definition');
                debug.assertValue(type, 'type');
                if (!type.paragraphs || !definition)
                    return;
                return evaluateArrayCopyOnChange(evalContext, definition, evaluateParagraph);
            }
            function evaluateParagraph(evalContext, definition) {
                debug.assertValue(evalContext, 'evalContext');
                debug.assertValue(definition, 'definition');
                var evaluated;
                var definitionTextRuns = definition.textRuns;
                var evaluatedTextRuns = evaluateArrayCopyOnChange(evalContext, definitionTextRuns, evaluateTextRun);
                if (definitionTextRuns !== evaluatedTextRuns) {
                    evaluated = _.clone(definition);
                    evaluated.textRuns = evaluatedTextRuns;
                }
                return evaluated || definition;
            }
            function evaluateTextRun(evalContext, definition) {
                debug.assertValue(evalContext, 'evalContext');
                debug.assertValue(definition, 'definition');
                var evaluated;
                var definitionValue = definition.value;
                var evaluatedValue = evaluateValue(evalContext, definitionValue, textType);
                if (evaluatedValue !== undefined) {
                    evaluated = _.clone(definition);
                    evaluated.value = evaluatedValue;
                }
                return evaluated || definition;
            }
            /**
             * Evaluates an array, and lazily copies on write whenever the evaluator function returns something
             * other than the input to it.
             */
            function evaluateArrayCopyOnChange(evalContext, definitions, evaluator) {
                debug.assertValue(evalContext, 'evalContext');
                debug.assertValue(definitions, 'definitions');
                debug.assertValue(evaluator, 'evaluator');
                var evaluatedValues;
                for (var i = 0, len = definitions.length; i < len; i++) {
                    var definition = definitions[i];
                    var evaluated = evaluator(evalContext, definition);
                    // NOTE: the any casts here are necessary due to the compiler not knowing the relationship
                    // between TEvaluated & TDefinition
                    if (!evaluatedValues && definition !== evaluated) {
                        evaluatedValues = _.take(definitions, i);
                    }
                    if (evaluatedValues) {
                        evaluatedValues.push(evaluated);
                    }
                }
                return evaluatedValues || definitions;
            }
            function evaluateValue(evalContext, definition, valueType) {
                if (definition instanceof data.SQExpr)
                    return ExpressionEvaluator.evaluate(definition, evalContext);
                if (definition instanceof data.RuleEvaluation)
                    return definition.evaluate(evalContext);
            }
            /** Responsible for evaluating SQExprs into values. */
            var ExpressionEvaluator = (function (_super) {
                __extends(ExpressionEvaluator, _super);
                function ExpressionEvaluator() {
                    _super.apply(this, arguments);
                }
                ExpressionEvaluator.evaluate = function (expr, evalContext) {
                    if (expr == null)
                        return;
                    return expr.accept(ExpressionEvaluator.instance, evalContext);
                };
                ExpressionEvaluator.prototype.visitColumnRef = function (expr, evalContext) {
                    return evalContext.getExprValue(expr);
                };
                ExpressionEvaluator.prototype.visitConstant = function (expr, evalContext) {
                    return expr.value;
                };
                ExpressionEvaluator.prototype.visitMeasureRef = function (expr, evalContext) {
                    return evalContext.getExprValue(expr);
                };
                ExpressionEvaluator.prototype.visitAggr = function (expr, evalContext) {
                    return evalContext.getExprValue(expr);
                };
                ExpressionEvaluator.instance = new ExpressionEvaluator();
                return ExpressionEvaluator;
            })(data.DefaultSQExprVisitorWithArg);
        })(DataViewObjectEvaluator = data.DataViewObjectEvaluator || (data.DataViewObjectEvaluator = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        var inherit = powerbi.Prototype.inherit;
        var DataViewPivotCategorical;
        (function (DataViewPivotCategorical) {
            /**
             * Pivots categories in a categorical DataView into valueGroupings.
             * This is akin to a mathematical matrix transpose.
             */
            function apply(dataView) {
                debug.assertValue(dataView, 'dataView');
                var categorical = dataView.categorical;
                if (!categorical)
                    return null;
                var categories = categorical.categories;
                if (!categories || categories.length !== 1)
                    return null;
                var values = categorical.values;
                if (_.isEmpty(values) || values.source)
                    return null;
                var category = categories[0], categoryIdentities = category.identity, categoryValues = category.values, pivotedColumns = [], pivotedValues = [];
                for (var rowIdx = 0, rowCount = categoryValues.length; rowIdx < rowCount; rowIdx++) {
                    var categoryValue = categoryValues[rowIdx], categoryIdentity = categoryIdentities[rowIdx];
                    for (var colIdx = 0, colCount = values.length; colIdx < colCount; colIdx++) {
                        var value = values[colIdx], pivotedColumn = inherit(value.source);
                        // A value has a series group, which is not implemented for pivoting -- just give up.
                        if (value.identity)
                            return null;
                        pivotedColumn.groupName = categoryValue;
                        var pivotedValue = {
                            source: pivotedColumn,
                            values: [value.values[rowIdx]],
                            identity: categoryIdentity,
                            min: value.min,
                            max: value.max,
                            subtotal: value.subtotal
                        };
                        var highlights = value.highlights;
                        if (highlights) {
                            pivotedValue.highlights = [highlights[rowIdx]];
                        }
                        pivotedColumns.push(pivotedColumn);
                        pivotedValues.push(pivotedValue);
                    }
                }
                var pivotedMetadata = inherit(dataView.metadata);
                pivotedMetadata.columns = pivotedColumns;
                values = data.DataViewTransform.createValueColumns(pivotedValues, category.identityFields, category.source);
                return {
                    metadata: pivotedMetadata,
                    categorical: {
                        values: values,
                    },
                    matrix: dataView.matrix
                };
            }
            DataViewPivotCategorical.apply = apply;
        })(DataViewPivotCategorical = data.DataViewPivotCategorical || (data.DataViewPivotCategorical = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        var DataViewPivotMatrix;
        (function (DataViewPivotMatrix) {
            /** Pivots row hierarchy members in a matrix DataView into column hierarchy. */
            function apply(dataViewMatrix, context) {
                debug.assertValue(dataViewMatrix, 'dataViewMatrix');
                if (!context.columnHierarchyRewritten)
                    dataViewMatrix.columns = powerbi.Prototype.inherit(dataViewMatrix.columns);
                var columns = dataViewMatrix.columns;
                if (!context.rowHierarchyRewritten)
                    dataViewMatrix.rows = powerbi.Prototype.inherit(dataViewMatrix.rows);
                var rows = dataViewMatrix.rows;
                if (columns.levels.length > 1)
                    return;
                var pivotedRowNode = {
                    level: 0
                };
                var columnLeafNodes = columns.root.children;
                var measureCount = columnLeafNodes.length;
                // Notes related to VSTS 6999369: The level value of Measure Header nodes is not necessarily its parent node's level + 1.
                // In particular, the Measure Header column nodes directly under the Grand Total node at level 0 (i.e. _.last(pivotResultMatrix.columns.root.children))
                // will have level === (pivotResultMatrix.columns.levels.length - 1), which will be greater than the Grand Total node's 'level + 1' 
                // in a matrix with 2+ column fields and 2+ measure fields.
                // In this code, all row levels will get pivoted over to the columns hierarchy, hence the level of any Measure Header nodes in the pivot result
                // is just (1 + the level of the deepest row node's level), which === rows.levels.length.
                var pivotResultMeasureHeaderLevel = rows.levels.length;
                if (measureCount > 0) {
                    var index = 0;
                    var callback = function (node) {
                        // Collect values and remove them from row leaves
                        if (node.values) {
                            if (!pivotedRowNode.values)
                                pivotedRowNode.values = {};
                            for (var i = 0; i < measureCount; i++)
                                pivotedRowNode.values[index++] = node.values[i];
                            delete node.values;
                        }
                        // Create measure headers if there are more than one measures
                        if (measureCount > 1) {
                            if (!node.children)
                                node.children = [];
                            for (var j = 0; j < measureCount; j++) {
                                var measureHeaderLeaf = { level: pivotResultMeasureHeaderLevel };
                                // Copy levelSourceIndex from columnLeafNodes (as they might have been reordered)
                                var columnLeafNode = columnLeafNodes[j];
                                measureHeaderLeaf.levelSourceIndex = columnLeafNode.levelSourceIndex;
                                if (node.isSubtotal)
                                    measureHeaderLeaf.isSubtotal = true;
                                node.children.push(measureHeaderLeaf);
                            }
                        }
                    };
                    if (context.hierarchyTreesRewritten) {
                        forEachLeaf(rows.root, callback);
                    }
                    else {
                        dataViewMatrix.columns.root = cloneTreeExecuteOnLeaf(rows.root, callback);
                    }
                }
                else {
                    if (!context.hierarchyTreesRewritten) {
                        dataViewMatrix.columns.root = cloneTree(rows.root);
                    }
                }
                if (measureCount > 1) {
                    // Keep measure headers, but move them to the innermost level
                    var level = { sources: columns.levels[0].sources };
                    rows.levels.push(level);
                    columns.levels.length = 0;
                }
                if (context.hierarchyTreesRewritten) {
                    dataViewMatrix.columns.root = rows.root;
                    dataViewMatrix.rows.root = {
                        children: [pivotedRowNode]
                    };
                }
                else {
                    var updatedRowRoot = powerbi.Prototype.inherit(dataViewMatrix.rows.root);
                    updatedRowRoot.children = [pivotedRowNode];
                    dataViewMatrix.rows.root = updatedRowRoot;
                }
                dataViewMatrix.columns.levels = rows.levels;
                dataViewMatrix.rows.levels = [];
            }
            DataViewPivotMatrix.apply = apply;
            function forEachLeaf(root, callback) {
                var children = root.children;
                if (children && children.length > 0) {
                    for (var i = 0, ilen = children.length; i < ilen; i++)
                        forEachLeaf(children[i], callback);
                    return;
                }
                callback(root);
            }
            function cloneTree(node) {
                return cloneTreeExecuteOnLeaf(node);
            }
            DataViewPivotMatrix.cloneTree = cloneTree;
            function cloneTreeExecuteOnLeaf(node, callback) {
                var updatedNode = powerbi.Prototype.inherit(node);
                var children = node.children;
                if (children && children.length > 0) {
                    var newChildren = [];
                    for (var i = 0, ilen = children.length; i < ilen; i++) {
                        var updatedChild = cloneTreeExecuteOnLeaf(children[i], callback);
                        newChildren.push(updatedChild);
                    }
                    updatedNode.children = newChildren;
                }
                else {
                    if (callback)
                        callback(updatedNode);
                }
                return updatedNode;
            }
            DataViewPivotMatrix.cloneTreeExecuteOnLeaf = cloneTreeExecuteOnLeaf;
        })(DataViewPivotMatrix = data.DataViewPivotMatrix || (data.DataViewPivotMatrix = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        var DataViewSelfCrossJoin;
        (function (DataViewSelfCrossJoin) {
            /**
             * Returns a new DataView based on the original, with a single DataViewCategorical category that is "cross joined"
             * to itself as a value grouping.
             * This is the mathematical equivalent of taking an array and turning it into an identity matrix.
             */
            function apply(dataView) {
                debug.assertValue(dataView, 'dataView');
                if (!dataView.categorical)
                    return;
                var dataViewCategorical = dataView.categorical;
                if (!dataViewCategorical.categories || dataViewCategorical.categories.length !== 1)
                    return;
                if (dataViewCategorical.values && dataViewCategorical.values.source)
                    return;
                return applyCategorical(dataView.metadata, dataViewCategorical);
            }
            DataViewSelfCrossJoin.apply = apply;
            function applyCategorical(dataViewMetadata, dataViewCategorical) {
                debug.assertValue(dataViewMetadata, 'dataViewMetadata');
                debug.assertValue(dataViewCategorical, 'dataViewCategorical');
                debug.assertValue(dataViewCategorical.categories, 'dataViewCategorical.categories');
                var category = dataViewCategorical.categories[0], categoryValues = category.values, categoryLength = categoryValues.length;
                if (categoryLength === 0)
                    return;
                var valuesArray = dataViewCategorical.values
                    ? dataViewCategorical.values.grouped()[0].values
                    : [];
                var transformedDataView = data.createCategoricalDataViewBuilder()
                    .withCategories(dataViewCategorical.categories)
                    .withGroupedValues(createGroupedValues(category, categoryValues, categoryLength, valuesArray))
                    .build();
                dataViewMetadata = powerbi.Prototype.inherit(dataViewMetadata);
                dataViewMetadata.columns = transformedDataView.metadata.columns;
                return {
                    metadata: dataViewMetadata,
                    categorical: transformedDataView.categorical,
                };
            }
            function createGroupedValues(category, categoryValues, categoryLength, valuesArray) {
                debug.assertValue(category, 'category');
                debug.assertValue(categoryValues, 'categoryValues');
                debug.assertValue(categoryLength, 'categoryLength');
                debug.assertValue(valuesArray, 'valuesArray');
                var nullValuesArray = createNullValues(categoryLength), valuesArrayLen = valuesArray.length, seriesData = [];
                for (var i = 0; i < categoryLength; i++) {
                    var seriesDataItem = [];
                    for (var j = 0; j < valuesArrayLen; j++) {
                        var originalValueColumn = valuesArray[j], originalHighlightValues = originalValueColumn.highlights;
                        var seriesDataItemCategory = {
                            values: inheritArrayWithValue(nullValuesArray, originalValueColumn.values, i),
                        };
                        if (originalHighlightValues)
                            seriesDataItemCategory.highlights = inheritArrayWithValue(nullValuesArray, originalHighlightValues, i);
                        seriesDataItem.push(seriesDataItemCategory);
                    }
                    seriesData.push(seriesDataItem);
                }
                return {
                    groupColumn: {
                        source: category.source,
                        identityFrom: { fields: category.identityFields, identities: category.identity },
                        values: category.values,
                    },
                    valueColumns: _.map(valuesArray, function (v) { return { source: v.source }; }),
                    data: seriesData,
                };
            }
        })(DataViewSelfCrossJoin = data.DataViewSelfCrossJoin || (data.DataViewSelfCrossJoin = {}));
        function createNullValues(length) {
            debug.assertValue(length, 'length');
            var array = new Array(length);
            for (var i = 0; i < length; i++)
                array[i] = null;
            return array;
        }
        function inheritArrayWithValue(nullValues, original, index) {
            var inherited = powerbi.Prototype.inherit(nullValues);
            inherited[index] = original[index];
            return inherited;
        }
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        var ArrayExtensions = jsCommon.ArrayExtensions;
        var DataShapeBindingDataReduction = powerbi.data.DataShapeBindingDataReduction;
        var DataViewPivotCategoricalToPrimaryGroups;
        (function (DataViewPivotCategoricalToPrimaryGroups) {
            /**
             * If mapping requests cross axis data reduction and the binding has secondary grouping, mutates the binding to
             * pivot the secondary before the primary.
             */
            function pivotBinding(binding, allMappings, finalMapping, defaultDataVolume) {
                // unpivot is inferred from result in DataViewTransform.apply but it does not have the
                // compiled mappings available, let alone the merged mapping, only the original
                // DataViewMappings. to keep that inference easy, only apply pivot when there's
                // only one matching mapping
                if (!allMappings || allMappings.length !== 1)
                    return;
                if (!finalMapping.categorical || !finalMapping.categorical.dataReductionAlgorithm)
                    return;
                if (!binding)
                    return;
                if (!canPivotCategorical(binding, finalMapping))
                    return;
                // pivot secondary onto front of primary
                binding.Primary.Groupings = [binding.Secondary.Groupings[0], binding.Primary.Groupings[0]];
                binding.Secondary = undefined;
                // set primary to pivot reduction
                binding.DataReduction = {
                    Primary: DataShapeBindingDataReduction.createFrom(finalMapping.categorical.dataReductionAlgorithm),
                    DataVolume: finalMapping.categorical.dataVolume || defaultDataVolume,
                };
            }
            DataViewPivotCategoricalToPrimaryGroups.pivotBinding = pivotBinding;
            /** narrowly targets scatter chart scenario for now to keep code simple */
            function isPivotableAxis(axis) {
                return axis
                    && axis.Groupings
                    && axis.Groupings.length === 1
                    && !_.isEmpty(axis.Groupings[0].Projections)
                    && !axis.Groupings[0].Subtotal
                    && _.isEmpty(axis.Groupings[0].SuppressedProjections);
            }
            function canPivotCategorical(binding, mapping) {
                if (!isPivotableAxis(binding.Primary))
                    return false;
                if (!isPivotableAxis(binding.Secondary) || binding.Secondary.Groupings[0].Projections.length !== 1)
                    return false;
                // don't pivot if either axis has a data reduction
                if (binding.DataReduction && (binding.DataReduction.Primary || binding.DataReduction.Secondary))
                    return false;
                return true;
            }
            function unpivotResult(oldDataView, selects, dataViewMappings, projectionActiveItems) {
                if (!inferUnpivotTransform(selects, dataViewMappings, oldDataView, projectionActiveItems))
                    return oldDataView;
                // This returns a subsetted version of the DataView rather than using prototypal inheritance because
                // any dataviews in the old one (including ones invented after this code is written) will correspond
                // to a pivoted query result and therefore will be in the wrong shape for the unpivoted query the
                // querying code made.
                var newDataView = {
                    metadata: {
                        columns: ArrayExtensions.copy(oldDataView.metadata.columns),
                    },
                };
                // preserve view types that aren't affected by pivoting
                if (oldDataView.single)
                    newDataView.single = oldDataView.single;
                if (oldDataView.table)
                    newDataView.table = oldDataView.table;
                // other views are derived from matrix
                if (oldDataView.matrix) {
                    var newDataViewMatrix = unpivotMatrix(oldDataView.matrix);
                    // categorical only if there's data
                    if (!_.isEmpty(newDataViewMatrix.valueSources))
                        newDataView.categorical = categoricalFromUnpivotedMatrix(newDataViewMatrix, newDataView.metadata.columns);
                }
                return newDataView;
            }
            DataViewPivotCategoricalToPrimaryGroups.unpivotResult = unpivotResult;
            /** Get roles from a role mapping */
            function getRolesInRoleMapping(role, roleMapping) {
                if (!roleMapping)
                    return;
                if (roleMapping.bind)
                    role(roleMapping.bind.to);
                if (roleMapping.for)
                    role(roleMapping.for.in);
                if (roleMapping.group) {
                    role(roleMapping.group.by);
                    getRolesInRoleMappings(role, roleMapping.group.select);
                }
                getRolesInRoleMappings(role, roleMapping.select);
            }
            /** Get roles from a list of role mappings */
            function getRolesInRoleMappings(role, roleMappings) {
                if (!_.isEmpty(roleMappings)) {
                    for (var _i = 0; _i < roleMappings.length; _i++) {
                        var roleMapping = roleMappings[_i];
                        getRolesInRoleMapping(role, roleMapping);
                    }
                }
            }
            /**
             * Infer from the query result and the visual mappings whether the query was pivoted.
             * Narrowly targets scatter chart scenario for now to keep code simple
             */
            function inferUnpivotTransform(selects, dataViewMappings, dataView, projectionActiveItems) {
                if (!selects || !dataViewMappings || !dataView)
                    return false;
                // select applicable mappings based on select roles
                var roleKinds = data.DataViewSelectTransform.createRoleKindFromMetadata(selects, dataView.metadata);
                var projections = data.DataViewSelectTransform.projectionsFromSelects(selects, projectionActiveItems);
                dataViewMappings = powerbi.DataViewAnalysis.chooseDataViewMappings(projections, dataViewMappings, roleKinds).supportedMappings;
                // NOTE: limiting to simple situation that handles scatter for now - see the other side in canPivotCategorical
                if (!dataViewMappings || dataViewMappings.length !== 1)
                    return false;
                var categoricalMapping = dataViewMappings[0].categorical;
                if (!categoricalMapping)
                    return false;
                // pivoted query will have produced a matrix
                var matrixDataview = dataView.matrix;
                if (!matrixDataview)
                    return false;
                // matrix must have two levels of grouping
                if (!matrixDataview.rows || !matrixDataview.rows.levels || matrixDataview.rows.levels.length !== 2)
                    return false;
                // get category and value grouping roles
                var categoryGroups = [];
                var valueGroups = [];
                var addGroupingRole = function (roleName, groups) {
                    var roleProjections = projections[roleName];
                    if (!roleProjections)
                        return;
                    for (var _i = 0, _a = roleProjections.all(); _i < _a.length; _i++) {
                        var roleProjection = _a[_i];
                        if (roleKinds[roleProjection.queryRef] === powerbi.VisualDataRoleKind.Grouping)
                            groups.push(roleProjection.queryRef);
                    }
                };
                getRolesInRoleMapping(function (roleName) { addGroupingRole(roleName, categoryGroups); }, categoricalMapping.categories);
                getRolesInRoleMapping(function (roleName) { addGroupingRole(roleName, valueGroups); }, categoricalMapping.values);
                // need both for pivot to have been done
                if (_.isEmpty(categoryGroups) || _.isEmpty(valueGroups))
                    return false;
                // if there was a pivot, there won't be any measures left in the columns
                for (var _i = 0, _a = matrixDataview.columns.levels; _i < _a.length; _i++) {
                    var level = _a[_i];
                    for (var _b = 0, _c = level.sources; _b < _c.length; _b++) {
                        var source = _c[_b];
                        if (!source.isMeasure)
                            return false;
                    }
                }
                return true;
            }
            /**
             * matrix will have two groupings in the rows, outer (series) and inner (categories), and none in the columns.
             * this function changes that so that the categories become the rows and the series the columns.
             */
            function unpivotMatrix(oldMatrix) {
                var oldRows = oldMatrix.rows;
                var oldRoot = oldRows.root;
                var oldChildren = oldRoot.children;
                // series are the outer grouping
                var series = [];
                var seriesIdLevel = oldRows.levels[0];
                var seriesIdFields = oldRoot.childIdentityFields;
                // categories are the inner grouping. 
                var categoryIndex = {};
                var categories = [];
                var categoryIdLevel = oldRows.levels[1];
                var categoryIdFields = _.isEmpty(oldChildren) ? undefined : oldChildren[0].childIdentityFields;
                var measureCount = oldMatrix.valueSources.length;
                // within each series value, the category list may not be complete so cannot simply use the inner loop index
                // to reference it.
                var findCategory = function (identity) {
                    var index = categoryIndex[identity.key];
                    debug.assert(index !== undefined, "findcat() !== undefined");
                    return index;
                };
                // collect series and categories from the row hierarchy
                if (oldChildren) {
                    var addCategory = function (identity, value) {
                        var key = identity.key;
                        var index = categoryIndex[key];
                        if (index === undefined) {
                            index = categories.length;
                            categoryIndex[key] = index;
                            categories.push({ value: value, identity: identity });
                        }
                    };
                    for (var _i = 0; _i < oldChildren.length; _i++) {
                        var seriesNode = oldChildren[_i];
                        series.push({ value: seriesNode.value, identity: seriesNode.identity });
                        for (var _a = 0, _b = seriesNode.children; _a < _b.length; _a++) {
                            var categoryNode = _b[_a];
                            addCategory(categoryNode.identity, categoryNode.value);
                        }
                    }
                }
                // extract intersection values from pivoted matrix
                // values will be indexed by categories then series
                var matrixValues = new Array(categories.length);
                for (var j = 0; j < series.length; ++j) {
                    var seriesNode = oldChildren[j];
                    for (var _c = 0, _d = seriesNode.children; _c < _d.length; _c++) {
                        var categoryNode = _d[_c];
                        var i = findCategory(categoryNode.identity); // must lookup actual category index
                        if (!matrixValues[i])
                            matrixValues[i] = new Array(series.length);
                        matrixValues[i][j] = categoryNode.values;
                    }
                }
                // unpivoted matrix columns are the series
                var newColumns = {
                    root: {
                        children: _.map(series, function (s) {
                            return {
                                level: 0,
                                value: s.value,
                                identity: s.identity,
                            };
                        }),
                        childIdentityFields: seriesIdFields,
                    },
                    levels: [
                        seriesIdLevel,
                    ],
                };
                if (measureCount > 0) {
                    var newColChildren = _.map(oldMatrix.columns.root.children, function (srcnode) {
                        var dstnode = { level: 1 };
                        if (srcnode.levelSourceIndex)
                            dstnode.levelSourceIndex = srcnode.levelSourceIndex;
                        return dstnode;
                    });
                    for (var i = 0; i < newColumns.root.children.length; ++i)
                        newColumns.root.children[i].children = newColChildren;
                    newColumns.levels.push(oldMatrix.columns.levels[0]);
                }
                // unpivoted rows are the categories
                var newRows = {
                    root: {
                        children: _.map(categories, function (s) { return { level: 0, value: s.value, identity: s.identity }; }),
                        childIdentityFields: categoryIdFields,
                    },
                    levels: [
                        categoryIdLevel,
                    ],
                };
                // put values into rows
                if (measureCount > 0) {
                    for (var i = 0; i < categories.length; ++i) {
                        var row = newRows.root.children[i];
                        var rowValues = {};
                        for (var j = 0; j < series.length; ++j) {
                            var mvalues = matrixValues[i][j];
                            for (var k = 0; k < measureCount; ++k) {
                                var l = j * measureCount + k;
                                rowValues[l] = !mvalues
                                    ? (k === 0 ? { value: null } : { value: null, valueSourceIndex: k })
                                    : mvalues[k];
                            }
                        }
                        row.values = rowValues;
                    }
                }
                var newMatrix = {
                    rows: newRows,
                    columns: newColumns,
                    valueSources: oldMatrix.valueSources,
                };
                return newMatrix;
            }
            /** build a categorical data view from an unpivoted matrix. */
            function categoricalFromUnpivotedMatrix(matrix, columnMetadata) {
                var seriesCount = matrix.columns.root.children.length;
                var measureMetadata = matrix.valueSources;
                var measureCount = measureMetadata.length;
                // create categories from rows
                var categories = [
                    {
                        source: matrix.rows.levels[0].sources[0],
                        values: _.map(matrix.rows.root.children, function (x) { return x.value; }),
                        identity: _.map(matrix.rows.root.children, function (x) { return x.identity; }),
                        identityFields: matrix.rows.root.childIdentityFields,
                    },
                ];
                // create grouped values
                var groups = [];
                for (var j = 0; j < seriesCount; ++j) {
                    var seriesColumn = matrix.columns.root.children[j];
                    var group = {
                        values: [],
                        identity: seriesColumn.identity,
                        name: seriesColumn.value || null,
                    };
                    groups.push(group);
                    for (var k = 0; k < measureCount; ++k) {
                        var valueColumnMetadataSrc = measureMetadata[k];
                        var valueColumnMetadataDst = {};
                        for (var key in valueColumnMetadataSrc)
                            valueColumnMetadataDst[key] = valueColumnMetadataSrc[key];
                        valueColumnMetadataDst.groupName = group.name;
                        columnMetadata.push(valueColumnMetadataDst);
                        var valueColumn = {
                            source: valueColumnMetadataDst,
                            values: [],
                            identity: group.identity,
                        };
                        group.values.push(valueColumn);
                        // grab measure values in the group from across rows of matrix
                        var index = k + j * measureCount;
                        for (var _i = 0, _a = matrix.rows.root.children; _i < _a.length; _i++) {
                            var categoryNode = _a[_i];
                            var value = categoryNode.values[index].value;
                            valueColumn.values.push(value);
                        }
                    }
                }
                // and now ungrouped
                var values = [];
                for (var _b = 0; _b < groups.length; _b++) {
                    var group = groups[_b];
                    for (var k = 0; k < measureCount; ++k) {
                        values.push(group.values[k]);
                    }
                }
                values.grouped = function () { return groups; };
                values.identityFields = matrix.columns.root.childIdentityFields;
                values.source = matrix.columns.levels[0].sources[0];
                // final assembly
                var categorical = {
                    categories: categories,
                    values: values,
                };
                return categorical;
            }
        })(DataViewPivotCategoricalToPrimaryGroups = data.DataViewPivotCategoricalToPrimaryGroups || (data.DataViewPivotCategoricalToPrimaryGroups = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        var inherit = powerbi.Prototype.inherit;
        var inheritSingle = powerbi.Prototype.inheritSingle;
        var ArrayExtensions = jsCommon.ArrayExtensions;
        var EnumExtensions = jsCommon.EnumExtensions;
        // TODO: refactor & focus DataViewTransform into a service with well-defined dependencies.
        var DataViewTransform;
        (function (DataViewTransform) {
            function apply(options) {
                debug.assertValue(options, 'options');
                // TODO: Flow a context object through to capture errors/warnings about what happens here for better diagnosability.
                var prototype = options.prototype, objectDescriptors = options.objectDescriptors, dataViewMappings = options.dataViewMappings, transforms = options.transforms, projectionActiveItems = transforms && transforms.roles && transforms.roles.activeItems, colorAllocatorFactory = options.colorAllocatorFactory, dataRoles = options.dataRoles;
                if (!prototype)
                    return transformEmptyDataView(objectDescriptors, transforms, colorAllocatorFactory);
                if (!transforms)
                    return [prototype];
                // Transform Query DataView
                prototype = data.DataViewPivotCategoricalToPrimaryGroups.unpivotResult(prototype, transforms.selects, dataViewMappings, projectionActiveItems);
                var transformedDataViews = transformQueryToVisualDataView(prototype, transforms, objectDescriptors, dataViewMappings, colorAllocatorFactory, dataRoles);
                // Transform and generate derived visual DataViews
                transformedDataViews = data.DataViewRegression.run({
                    dataViewMappings: dataViewMappings,
                    transformedDataViews: transformedDataViews,
                    dataRoles: dataRoles,
                    objectDescriptors: objectDescriptors,
                    objectDefinitions: transforms.objects,
                    colorAllocatorFactory: colorAllocatorFactory,
                    transformSelects: transforms.selects,
                    dataView: prototype,
                    projectionActiveItems: projectionActiveItems,
                });
                return transformedDataViews;
            }
            DataViewTransform.apply = apply;
            function transformQueryToVisualDataView(prototype, transforms, objectDescriptors, dataViewMappings, colorAllocatorFactory, dataRoles) {
                var transformedDataViews = [];
                var splits = transforms.splits;
                if (_.isEmpty(splits)) {
                    transformedDataViews.push(transformDataView(prototype, objectDescriptors, dataViewMappings, transforms, colorAllocatorFactory, dataRoles));
                }
                else {
                    for (var _i = 0; _i < splits.length; _i++) {
                        var split = splits[_i];
                        var transformed = transformDataView(prototype, objectDescriptors, dataViewMappings, transforms, colorAllocatorFactory, dataRoles, split.selects);
                        transformedDataViews.push(transformed);
                    }
                }
                return transformedDataViews;
            }
            function transformEmptyDataView(objectDescriptors, transforms, colorAllocatorFactory) {
                if (transforms && transforms.objects) {
                    var emptyDataView = {
                        metadata: {
                            columns: [],
                        }
                    };
                    transformObjects(emptyDataView, 0 /* None */, objectDescriptors, transforms.objects, transforms.selects, colorAllocatorFactory);
                    return [emptyDataView];
                }
                return [];
            }
            function transformDataView(prototype, objectDescriptors, roleMappings, transforms, colorAllocatorFactory, dataRoles, selectsToInclude) {
                debug.assertValue(prototype, 'prototype');
                var targetKinds = getTargetKinds(roleMappings);
                var transformed = inherit(prototype);
                transformed.metadata = inherit(prototype.metadata);
                var projectionOrdering = transforms.roles && transforms.roles.ordering;
                var projectionActiveItems = transforms.roles && transforms.roles.activeItems;
                transformed = transformSelects(transformed, roleMappings, transforms.selects, projectionOrdering, selectsToInclude);
                transformObjects(transformed, targetKinds, objectDescriptors, transforms.objects, transforms.selects, colorAllocatorFactory);
                // Note: Do this step after transformObjects() so that metadata columns in 'transformed' have roles and objects.general.formatString populated
                transformed = data.DataViewConcatenateCategoricalColumns.detectAndApply(transformed, roleMappings, projectionOrdering, transforms.selects, projectionActiveItems);
                data.DataViewNormalizeValues.apply({
                    dataview: transformed,
                    dataViewMappings: roleMappings,
                    dataRoles: dataRoles,
                });
                return transformed;
            }
            function getTargetKinds(roleMappings) {
                debug.assertAnyValue(roleMappings, 'roleMappings');
                if (!roleMappings)
                    return 0 /* None */;
                var result = 0 /* None */;
                for (var _i = 0; _i < roleMappings.length; _i++) {
                    var roleMapping = roleMappings[_i];
                    if (roleMapping.categorical)
                        result |= 1 /* Categorical */;
                    if (roleMapping.matrix)
                        result |= 2 /* Matrix */;
                    if (roleMapping.single)
                        result |= 4 /* Single */;
                    if (roleMapping.table)
                        result |= 8 /* Table */;
                    if (roleMapping.tree)
                        result |= 16 /* Tree */;
                }
                return result;
            }
            function transformSelects(dataView, roleMappings, selectTransforms, projectionOrdering, selectsToInclude) {
                var columnRewrites = [];
                if (selectTransforms) {
                    dataView.metadata.columns = applyTransformsToColumns(dataView.metadata.columns, selectTransforms, columnRewrites);
                }
                // NOTE: no rewrites necessary for Tree (it doesn't reference the columns)
                if (dataView.categorical) {
                    dataView.categorical = applyRewritesToCategorical(dataView.categorical, columnRewrites, selectsToInclude);
                    // TODO VSTS 7024199: separate out structural transformations from dataViewTransform.transformSelects(...)
                    // NOTE: This is slightly DSR-specific.
                    dataView = pivotIfNecessary(dataView, roleMappings);
                }
                if (dataView.matrix) {
                    var matrixTransformationContext = {
                        rowHierarchyRewritten: false,
                        columnHierarchyRewritten: false,
                        hierarchyTreesRewritten: false
                    };
                    dataView.matrix = applyRewritesToMatrix(dataView.matrix, columnRewrites, roleMappings, projectionOrdering, matrixTransformationContext);
                    // TODO VSTS 7024199: separate out structural transformations from dataViewTransform.transformSelects(...)
                    if (shouldPivotMatrix(dataView.matrix, roleMappings))
                        data.DataViewPivotMatrix.apply(dataView.matrix, matrixTransformationContext);
                }
                if (dataView.table)
                    dataView.table = applyRewritesToTable(dataView.table, columnRewrites, roleMappings, projectionOrdering);
                return dataView;
            }
            function applyTransformsToColumns(prototypeColumns, selects, rewrites) {
                debug.assertValue(prototypeColumns, 'columns');
                if (!selects)
                    return prototypeColumns;
                //column may contain undefined entries
                var columns = inherit(prototypeColumns);
                for (var i = 0, len = prototypeColumns.length; i < len; i++) {
                    var prototypeColumn = prototypeColumns[i];
                    var select = selects[prototypeColumn.index];
                    if (!select)
                        continue;
                    var column = columns[i] = inherit(prototypeColumn);
                    if (select.roles)
                        column.roles = select.roles;
                    if (select.type)
                        column.type = select.type;
                    column.format = getFormatForColumn(select, column);
                    if (select.displayName)
                        column.displayName = select.displayName;
                    if (select.queryName)
                        column.queryName = select.queryName;
                    if (select.kpi)
                        column.kpi = select.kpi;
                    if (select.sort)
                        column.sort = select.sort;
                    if (select.discourageAggregationAcrossGroups)
                        column.discourageAggregationAcrossGroups = select.discourageAggregationAcrossGroups;
                    rewrites.push({
                        from: prototypeColumn,
                        to: column,
                    });
                }
                return columns;
            }
            /**
             * Get the column format. Order of precendence is:
             *  1. Select format
             *  2. Column format
             */
            function getFormatForColumn(select, column) {
                // TODO: we already copied the select.Format to column.format, we probably don't need this check
                return select.format || column.format;
            }
            function applyRewritesToCategorical(prototype, columnRewrites, selectsToInclude) {
                debug.assertValue(prototype, 'prototype');
                debug.assertValue(columnRewrites, 'columnRewrites');
                var categorical = inherit(prototype);
                function override(value) {
                    var rewrittenSource = findOverride(value.source, columnRewrites);
                    if (rewrittenSource) {
                        var rewritten = inherit(value);
                        rewritten.source = rewrittenSource;
                        return rewritten;
                    }
                }
                var categories = powerbi.Prototype.overrideArray(prototype.categories, override);
                if (categories)
                    categorical.categories = categories;
                var values = powerbi.Prototype.overrideArray(prototype.values, override);
                if (values) {
                    if (selectsToInclude) {
                        for (var i = values.length - 1; i >= 0; i--) {
                            if (!selectsToInclude[values[i].source.index])
                                values.splice(i, 1);
                        }
                    }
                    if (values.source) {
                        if (selectsToInclude && !selectsToInclude[values.source.index]) {
                            values.source = undefined;
                        }
                        else {
                            var rewrittenValuesSource = findOverride(values.source, columnRewrites);
                            if (rewrittenValuesSource)
                                values.source = rewrittenValuesSource;
                        }
                    }
                    categorical.values = values;
                    setGrouped(values);
                }
                return categorical;
            }
            function applyRewritesToTable(prototype, columnRewrites, roleMappings, projectionOrdering) {
                debug.assertValue(prototype, 'prototype');
                debug.assertValue(columnRewrites, 'columnRewrites');
                // Don't perform this potentially expensive transform unless we actually have a table.
                // When we switch to lazy per-visual DataView creation, we'll be able to remove this check.
                if (!roleMappings || roleMappings.length !== 1 || !roleMappings[0].table)
                    return prototype;
                var table = inherit(prototype);
                // Copy the rewritten columns into the table view
                var override = function (metadata) { return findOverride(metadata, columnRewrites); };
                var columns = powerbi.Prototype.overrideArray(prototype.columns, override);
                if (columns)
                    table.columns = columns;
                if (!projectionOrdering)
                    return table;
                var newToOldPositions = createTableColumnPositionMapping(projectionOrdering, columnRewrites);
                if (!newToOldPositions)
                    return table;
                // Reorder the columns
                var columnsClone = columns.slice(0);
                var keys = Object.keys(newToOldPositions);
                for (var i = 0, len = keys.length; i < len; i++) {
                    var sourceColumn = columnsClone[newToOldPositions[keys[i]]];
                    // In the case we've hit the end of our columns array, but still have position reordering keys,
                    // there is a duplicate column so we will need to add a new column for the duplicate data
                    if (i === columns.length)
                        columns.push(sourceColumn);
                    else {
                        debug.assert(i < columns.length, 'The column index is out of range for reordering.');
                        columns[i] = sourceColumn;
                    }
                }
                // Reorder the rows
                var rows = powerbi.Prototype.overrideArray(table.rows, function (row) {
                    var newRow = [];
                    for (var i = 0, len = keys.length; i < len; ++i)
                        newRow[i] = row[newToOldPositions[keys[i]]];
                    return newRow;
                });
                if (rows)
                    table.rows = rows;
                return table;
            }
            /** Creates a mapping of new position to original position. */
            function createTableColumnPositionMapping(projectionOrdering, columnRewrites) {
                var roles = Object.keys(projectionOrdering);
                // If we have more than one role then the ordering of columns between roles is ambiguous, so don't reorder anything.
                if (roles.length !== 1)
                    return;
                var role = roles[0], originalOrder = _.map(columnRewrites, function (rewrite) { return rewrite.from.index; }), newOrder = projectionOrdering[role];
                return createOrderMapping(originalOrder, newOrder);
            }
            function applyRewritesToMatrix(prototype, columnRewrites, roleMappings, projectionOrdering, context) {
                debug.assertValue(prototype, 'prototype');
                debug.assertValue(columnRewrites, 'columnRewrites');
                // Don't perform this potentially expensive transform unless we actually have a matrix.
                // When we switch to lazy per-visual DataView creation, we'll be able to remove this check.
                if (!roleMappings || roleMappings.length < 1 || !(roleMappings[0].matrix || (roleMappings[1] && roleMappings[1].matrix)))
                    return prototype;
                var matrixMapping = roleMappings[0].matrix || roleMappings[1].matrix;
                var matrix = inherit(prototype);
                function override(metadata) {
                    return findOverride(metadata, columnRewrites);
                }
                function overrideHierarchy(hierarchy) {
                    var rewrittenHierarchy = null;
                    var newLevels = powerbi.Prototype.overrideArray(hierarchy.levels, function (level) {
                        var newLevel = null;
                        var levelSources = powerbi.Prototype.overrideArray(level.sources, override);
                        if (levelSources)
                            newLevel = ensureRewritten(newLevel, level, function (h) { return h.sources = levelSources; });
                        return newLevel;
                    });
                    if (newLevels)
                        rewrittenHierarchy = ensureRewritten(rewrittenHierarchy, hierarchy, function (r) { return r.levels = newLevels; });
                    return rewrittenHierarchy;
                }
                var rows = overrideHierarchy(matrix.rows);
                if (rows) {
                    matrix.rows = rows;
                    context.rowHierarchyRewritten = true;
                }
                var columns = overrideHierarchy(matrix.columns);
                if (columns) {
                    matrix.columns = columns;
                    context.columnHierarchyRewritten = true;
                }
                var valueSources = powerbi.Prototype.overrideArray(matrix.valueSources, override);
                if (valueSources) {
                    matrix.valueSources = valueSources;
                    // Only need to reorder if we have more than one value source, and they are all bound to the same role
                    var matrixValues = matrixMapping.values;
                    if (projectionOrdering && valueSources.length > 1 && matrixValues && matrixValues.for) {
                        var columnLevels = columns.levels.length;
                        if (columnLevels > 0) {
                            var newToOldPositions = createMatrixValuesPositionMapping(matrixValues, projectionOrdering, valueSources, columnRewrites);
                            if (newToOldPositions) {
                                var keys = Object.keys(newToOldPositions);
                                var numKeys = keys.length;
                                // Reorder the value columns
                                columns.root = data.DataViewPivotMatrix.cloneTree(columns.root);
                                if (columnLevels === 1)
                                    reorderChildNodes(columns.root, newToOldPositions);
                                else
                                    forEachNodeAtLevel(columns.root, columnLevels - 2, function (node) { return reorderChildNodes(node, newToOldPositions); });
                                // Reorder the value rows
                                matrix.rows.root = data.DataViewPivotMatrix.cloneTreeExecuteOnLeaf(matrix.rows.root, function (node) {
                                    if (!node.values)
                                        return;
                                    var newValues = {};
                                    var iterations = Object.keys(node.values).length / numKeys;
                                    for (var i = 0, len = iterations; i < len; i++) {
                                        var offset = i * numKeys;
                                        for (var keysIndex = 0; keysIndex < numKeys; keysIndex++)
                                            newValues[offset + keysIndex] = node.values[offset + newToOldPositions[keys[keysIndex]]];
                                    }
                                    node.values = newValues;
                                });
                                context.hierarchyTreesRewritten = true;
                            }
                        }
                    }
                }
                reorderMatrixCompositeGroups(matrix, matrixMapping, projectionOrdering);
                return matrix;
            }
            function reorderChildNodes(node, newToOldPositions) {
                var keys = Object.keys(newToOldPositions);
                var numKeys = keys.length;
                var children = node.children;
                var childrenClone = children.slice(0);
                for (var i = 0, len = numKeys; i < len; i++) {
                    var sourceColumn = childrenClone[newToOldPositions[keys[i]]];
                    // In the case we've hit the end of our columns array, but still have position reordering keys,
                    // there is a duplicate column so we will need to add a new column for the duplicate data
                    if (i === children.length)
                        children.push(sourceColumn);
                    else {
                        debug.assert(i < children.length, 'The column index is out of range for reordering.');
                        children[i] = sourceColumn;
                    }
                }
            }
            /**
             * Returns a inheritSingle() version of the specified prototype DataViewMatrix with any composite group levels
             * and values re-ordered by projection ordering.
             * Returns undefined if no re-ordering under the specified prototype is necessary.
             */
            function reorderMatrixCompositeGroups(prototype, supportedDataViewMapping, projection) {
                var transformedDataView;
                if (prototype && supportedDataViewMapping && projection) {
                    // reorder levelValues in any composite groups in rows hierarchy
                    var transformedRowsHierarchy;
                    powerbi.DataViewMapping.visitMatrixItems(supportedDataViewMapping.rows, {
                        visitRole: function (role, context) {
                            transformedRowsHierarchy = reorderMatrixHierarchyCompositeGroups(transformedRowsHierarchy || prototype.rows, role, projection);
                        }
                    });
                    // reorder levelValues in any composite groups in columns hierarchy
                    var transformedColumnsHierarchy;
                    powerbi.DataViewMapping.visitMatrixItems(supportedDataViewMapping.columns, {
                        visitRole: function (role, context) {
                            transformedColumnsHierarchy = reorderMatrixHierarchyCompositeGroups(transformedColumnsHierarchy || prototype.columns, role, projection);
                        }
                    });
                    if (transformedRowsHierarchy || transformedColumnsHierarchy) {
                        transformedDataView = inheritSingle(prototype);
                        transformedDataView.rows = transformedRowsHierarchy || transformedDataView.rows;
                        transformedDataView.columns = transformedColumnsHierarchy || transformedDataView.columns;
                    }
                }
                return transformedDataView;
            }
            /**
             * Returns a inheritSingle() version of the specified matrixHierarchy with any composite group levels and
             * values re-ordered by projection ordering.
             * Returns undefined if no re-ordering under the specified matrixHierarchy is necessary.
             */
            function reorderMatrixHierarchyCompositeGroups(matrixHierarchy, hierarchyRole, projection) {
                debug.assertValue(matrixHierarchy, 'matrixHierarchy');
                debug.assertValue(hierarchyRole, 'hierarchyRole');
                debug.assertValue(projection, 'projection');
                var transformedHierarchy;
                var selectIndicesInProjectionOrder = projection[hierarchyRole];
                // reordering needs to happen only if there are multiple columns for the hierarchy's role in the projection
                var hasMultipleColumnsInProjection = selectIndicesInProjectionOrder && selectIndicesInProjectionOrder.length >= 2;
                if (hasMultipleColumnsInProjection && !_.isEmpty(matrixHierarchy.levels)) {
                    for (var i = matrixHierarchy.levels.length - 1; i >= 0; i--) {
                        var hierarchyLevel = matrixHierarchy.levels[i];
                        // compute a mapping for any necessary reordering of columns at this given level, based on projection ordering
                        var newToOldLevelSourceIndicesMapping = createMatrixHierarchyLevelSourcesPositionMapping(hierarchyLevel, hierarchyRole, projection);
                        if (newToOldLevelSourceIndicesMapping) {
                            if (_.isUndefined(transformedHierarchy)) {
                                // Because we start inspecting the hierarchy from the deepest level and work backwards to the root,
                                // the current hierarchyLevel is therefore the inner-most level that needs re-ordering of composite group values...
                                transformedHierarchy = inheritSingle(matrixHierarchy);
                                transformedHierarchy.levels = inheritSingle(matrixHierarchy.levels);
                                // Because the current hierarchyLevel is the inner-most level that needs re-ordering of composite group values,
                                // inheriting all nodes from root down to this level will also prepare the nodes for any transform that needs to 
                                // happen in other hierarchy levels in the later iterations of this for-loop.
                                transformedHierarchy.root = data.utils.DataViewMatrixUtils.inheritMatrixNodeHierarchy(matrixHierarchy.root, i, true);
                            }
                            // reorder the metadata columns in the sources array at that level
                            var transformingHierarchyLevel = inheritSingle(matrixHierarchy.levels[i]); // inherit at most once during the whole dataViewTransform for this obj...
                            transformedHierarchy.levels[i] = reorderMatrixHierarchyLevelColumnSources(transformingHierarchyLevel, newToOldLevelSourceIndicesMapping);
                            // reorder the level values in the composite group nodes at the current hierarchy level
                            reorderMatrixHierarchyLevelValues(transformedHierarchy.root, i, newToOldLevelSourceIndicesMapping);
                        }
                    }
                }
                return transformedHierarchy;
            }
            /**
             * If reordering is needed on the level's metadata column sources (i.e. hierarchyLevel.sources),
             * returns the mapping from the target LevelSourceIndex (based on projection order) to original LevelSourceIndex.
             *
             * The returned value maps level source indices from the new target order (calculated from projection order)
             * back to the original order as they appear in the specified hierarchyLevel's sources.
             * Please refer to comments on the createOrderMapping() function for more explanation on the mappings in the return value.
             *
             * Note: The return value is the mapping from new index to old index, for consistency with existing and similar functions in this module.
             *
             * @param hierarchyLevel The hierarchy level that contains the metadata column sources.
             * @param hierarchyRoleName The role name for the hierarchy where the specified hierarchyLevel belongs.
             * @param projection The projection ordering that includes an ordering for the specified hierarchyRoleName.
             */
            function createMatrixHierarchyLevelSourcesPositionMapping(hierarchyLevel, hierarchyRole, projection) {
                debug.assertValue(hierarchyLevel, 'hierarchyLevel');
                debug.assertValue(hierarchyRole, 'hierarchyRole');
                debug.assertValue(projection, 'projection');
                debug.assertValue(projection[hierarchyRole], 'pre-condition: The specified projection must contain an ordering for the specified hierarchyRoleName.');
                var newToOldLevelSourceIndicesMapping;
                var levelSourceColumns = hierarchyLevel.sources;
                if (levelSourceColumns && levelSourceColumns.length >= 2) {
                    // The hierarchy level has multiple columns, so it is possible to have composite group, go on to check other conditions...
                    var columnsForHierarchyRoleOrderedByLevelSourceIndex = data.utils.DataViewMetadataColumnUtils.joinMetadataColumnsAndProjectionOrder(levelSourceColumns, projection, hierarchyRole);
                    if (columnsForHierarchyRoleOrderedByLevelSourceIndex && columnsForHierarchyRoleOrderedByLevelSourceIndex.length >= 2) {
                        // The hierarchy level has multiple columns for the hierarchy's role, go on to calculate newToOldLevelSourceIndicesMapping...
                        var columnsForHierarchyRoleOrderedByProjection = _.sortBy(columnsForHierarchyRoleOrderedByLevelSourceIndex, function (columnInfo) { return columnInfo.projectionOrderIndex; });
                        newToOldLevelSourceIndicesMapping = createOrderMapping(_.map(columnsForHierarchyRoleOrderedByLevelSourceIndex, function (columnInfo) { return columnInfo.sourceIndex; }), _.map(columnsForHierarchyRoleOrderedByProjection, function (columnInfo) { return columnInfo.sourceIndex; }));
                    }
                }
                return newToOldLevelSourceIndicesMapping;
            }
            /**
             * Applies re-ordering on the specified transformingHierarchyLevel's sources.
             * Returns the same object as the specified transformingHierarchyLevel.
             */
            function reorderMatrixHierarchyLevelColumnSources(transformingHierarchyLevel, newToOldLevelSourceIndicesMapping) {
                debug.assertValue(transformingHierarchyLevel, 'transformingHierarchyLevel');
                debug.assertValue(newToOldLevelSourceIndicesMapping, 'newToOldLevelSourceIndicesMapping');
                var originalLevelSources = transformingHierarchyLevel.sources;
                transformingHierarchyLevel.sources = originalLevelSources.slice(0); // make a clone of the array before modifying it, because the for-loop depends on the origin array.
                var newLevelSourceIndices = Object.keys(newToOldLevelSourceIndicesMapping);
                for (var i = 0, ilen = newLevelSourceIndices.length; i < ilen; i++) {
                    var newLevelSourceIndex = newLevelSourceIndices[i];
                    var oldLevelSourceIndex = newToOldLevelSourceIndicesMapping[newLevelSourceIndex];
                    debug.assert(oldLevelSourceIndex < originalLevelSources.length, 'pre-condition: The value in every mapping in the specified levelSourceIndicesReorderingMap must be a valid index to the specified hierarchyLevel.sources array property');
                    transformingHierarchyLevel.sources[newLevelSourceIndex] = originalLevelSources[oldLevelSourceIndex];
                }
                return transformingHierarchyLevel;
            }
            /**
             * Reorders the elements in levelValues in each node under transformingHierarchyRootNode at the specified hierarchyLevel,
             * and updates their DataViewMatrixGroupValue.levelSourceIndex property.
             *
             * Returns the same object as the specified transformingHierarchyRootNode.
             */
            function reorderMatrixHierarchyLevelValues(transformingHierarchyRootNode, transformingHierarchyLevelIndex, newToOldLevelSourceIndicesMapping) {
                debug.assertValue(transformingHierarchyRootNode, 'transformingHierarchyRootNode');
                debug.assertValue(newToOldLevelSourceIndicesMapping, 'newToOldLevelSourceIndicesMapping');
                var oldToNewLevelSourceIndicesMapping = createReversedMapping(newToOldLevelSourceIndicesMapping);
                forEachNodeAtLevel(transformingHierarchyRootNode, transformingHierarchyLevelIndex, function (transformingMatrixNode) {
                    var originalLevelValues = transformingMatrixNode.levelValues;
                    // Note: Technically this function is incorrect, because the driving source of the new LevelValues is really
                    // the "projection for this composite group", a concept that isn't yet implemented in DataViewProjectionOrdering.
                    // The following code isn't correct in the special case where a column is projected twice in this composite group,
                    // in which case the DSR will not have the duplicate columns; DataViewTransform is supposed to expand the duplicates.
                    // Until we fully implement composite group projection, though, we'll just sort what we have in transformingMatrixNode.levelValues.
                    if (!_.isEmpty(originalLevelValues)) {
                        // First, re-order the elements in transformingMatrixNode.levelValues by the new levelSourceIndex order.
                        // _.sortBy() also creates a new array, which we want to do for all nodes (including when levelValues.length === 1)
                        // because we don't want to accidentally modify the array AND its value references in Query DataView
                        var newlyOrderedLevelValues = _.sortBy(originalLevelValues, function (levelValue) { return oldToNewLevelSourceIndicesMapping[levelValue.levelSourceIndex]; });
                        for (var i = 0, ilen = newlyOrderedLevelValues.length; i < ilen; i++) {
                            var transformingLevelValue = inheritSingle(newlyOrderedLevelValues[i]);
                            transformingLevelValue.levelSourceIndex = oldToNewLevelSourceIndicesMapping[transformingLevelValue.levelSourceIndex];
                            newlyOrderedLevelValues[i] = transformingLevelValue;
                        }
                        transformingMatrixNode.levelValues = newlyOrderedLevelValues;
                        // For consistency with how DataViewTreeNode.value works, and for a bit of backward compatibility,
                        // copy the last value from DataViewMatrixNode.levelValues to DataViewMatrixNode.value.
                        var newlyOrderedLastLevelValue = _.last(newlyOrderedLevelValues);
                        if (transformingMatrixNode.value !== newlyOrderedLastLevelValue.value) {
                            transformingMatrixNode.value = newlyOrderedLastLevelValue.value;
                        }
                        if ((transformingMatrixNode.levelSourceIndex || 0) !== newlyOrderedLastLevelValue.levelSourceIndex) {
                            transformingMatrixNode.levelSourceIndex = newlyOrderedLastLevelValue.levelSourceIndex;
                        }
                    }
                });
                return transformingHierarchyRootNode;
            }
            /**
             * Creates a mapping of new position to original position.
             *
             * The return value is a mapping where each key-value pair represent the order  mapping of a particular column:
             * - the key in the key-value pair is the index of the particular column in the new order (e.g. projection order)
             * - the value in the key-value pair is the index of the particular column in the original order
             */
            function createMatrixValuesPositionMapping(matrixValues, projectionOrdering, valueSources, columnRewrites) {
                var role = matrixValues.for.in;
                var newOrder = projectionOrdering[role];
                var originalOrder = _.chain(columnRewrites)
                    .filter(function (rewrite) { return _.contains(valueSources, rewrite.to); })
                    .map(function (rewrite) { return rewrite.from.index; })
                    .value();
                return createOrderMapping(originalOrder, newOrder);
            }
            /**
             * Creates a mapping of indices, from indices to the specified newOrder array, back to indices to the specified
             * originalOrder array.
             * Each of the number value in originalOrder and newOrder is actually the unique key of a column (unqiue
             * under the context of the caller code), e.g. the Select Index in projection ordering array.
             * Also, the specified originalOrder must contain every value that exists in newOrder.
             *
             * If the specified originalOrder and newOrder are different in sequence order, then this function returns a collection of
             * key-value pair, each of which represents the new and old indices of a particular column:
             * - the key in each key-value pair is the index of the particular column key as it exists in the specified newOrder array
             * - the value in each key-value pair is the index of the particular column key as it exists in the specified originalOrder array
             *
             * For example on how the return value is consumed, see functions such as reorderMatrixHierarchyLevelColumnSources(...).
             *
             * If the specified originalOrder and newOrder are same, then this function returns undefined.
             *
             * @param originalOrder E.g. an array of metadata column "select indices", in the original order as they exist in Query DataView.
             * @param newOrder E.g. an array of metadata column "select indices", in rojection ordering.
             */
            function createOrderMapping(originalOrder, newOrder) {
                // Optimization: avoid rewriting if the current order is correct
                if (ArrayExtensions.sequenceEqual(originalOrder, newOrder, function (x, y) { return x === y; }))
                    return;
                var mapping = {};
                for (var i = 0, len = newOrder.length; i < len; ++i) {
                    var newPosition = newOrder[i];
                    mapping[i] = originalOrder.indexOf(newPosition);
                }
                return mapping;
            }
            function createReversedMapping(mapping) {
                debug.assertValue(mapping, 'mapping');
                var reversed = {};
                for (var key in mapping) {
                    // Note: key is a string after we get it out from mapping, thus we need to parse it 
                    // back into a number before putting it as the value in the reversed mapping
                    var value = mapping[key];
                    var keyAsNumber = parseInt(key, 10);
                    reversed[value] = keyAsNumber;
                }
                debug.assertValue(Object.keys(mapping).length === Object.keys(reversed).length, 'pre-condition: The specified mapping must not contain any duplicate value because duplicate values are obmitted from the reversed mapping.');
                return reversed;
            }
            function forEachNodeAtLevel(node, targetLevel, callback) {
                debug.assertValue(node, 'node');
                debug.assert(targetLevel >= 0, 'argetLevel >= 0');
                debug.assertValue(callback, 'callback');
                if (node.level === targetLevel) {
                    callback(node);
                    return;
                }
                var children = node.children;
                if (children && children.length > 0) {
                    for (var i = 0, ilen = children.length; i < ilen; i++)
                        forEachNodeAtLevel(children[i], targetLevel, callback);
                }
            }
            DataViewTransform.forEachNodeAtLevel = forEachNodeAtLevel;
            function findOverride(source, columnRewrites) {
                for (var i = 0, len = columnRewrites.length; i < len; i++) {
                    var columnRewrite = columnRewrites[i];
                    if (columnRewrite.from === source)
                        return columnRewrite.to;
                }
            }
            function ensureRewritten(rewritten, prototype, callback) {
                if (!rewritten)
                    rewritten = inherit(prototype);
                if (callback)
                    callback(rewritten);
                return rewritten;
            }
            function transformObjects(dataView, targetDataViewKinds, objectDescriptors, objectDefinitions, selectTransforms, colorAllocatorFactory) {
                debug.assertValue(dataView, 'dataView');
                debug.assertValue(targetDataViewKinds, 'targetDataViewKinds');
                debug.assertAnyValue(objectDescriptors, 'objectDescriptors');
                debug.assertAnyValue(objectDefinitions, 'objectDefinitions');
                debug.assertAnyValue(selectTransforms, 'selectTransforms');
                debug.assertValue(colorAllocatorFactory, 'colorAllocatorFactory');
                if (!objectDescriptors)
                    return;
                var objectsForAllSelectors = data.DataViewObjectEvaluationUtils.groupObjectsBySelector(objectDefinitions);
                data.DataViewObjectEvaluationUtils.addImplicitObjects(objectsForAllSelectors, objectDescriptors, dataView.metadata.columns, selectTransforms);
                var metadataOnce = objectsForAllSelectors.metadataOnce;
                var dataObjects = objectsForAllSelectors.data;
                if (metadataOnce)
                    evaluateMetadataObjects(dataView, selectTransforms, objectDescriptors, metadataOnce.objects, dataObjects, colorAllocatorFactory);
                var metadataObjects = objectsForAllSelectors.metadata;
                if (metadataObjects) {
                    for (var i = 0, len = metadataObjects.length; i < len; i++) {
                        var metadataObject = metadataObjects[i];
                        evaluateMetadataRepetition(dataView, selectTransforms, objectDescriptors, metadataObject.selector, metadataObject.objects);
                    }
                }
                for (var i = 0, len = dataObjects.length; i < len; i++) {
                    var dataObject = dataObjects[i];
                    evaluateDataRepetition(dataView, targetDataViewKinds, selectTransforms, objectDescriptors, dataObject.selector, dataObject.rules, dataObject.objects);
                }
                var userDefined = objectsForAllSelectors.userDefined;
                if (userDefined) {
                    // TODO: We only handle user defined objects at the metadata level, but should be able to support them with arbitrary repetition.
                    evaluateUserDefinedObjects(dataView, selectTransforms, objectDescriptors, userDefined);
                }
            }
            DataViewTransform.transformObjects = transformObjects;
            function evaluateUserDefinedObjects(dataView, selectTransforms, objectDescriptors, objectDefns) {
                debug.assertValue(dataView, 'dataView');
                debug.assertAnyValue(selectTransforms, 'selectTransforms');
                debug.assertValue(objectDescriptors, 'objectDescriptors');
                debug.assertValue(objectDefns, 'objectDefns');
                var dataViewObjects = dataView.metadata.objects;
                if (!dataViewObjects) {
                    dataViewObjects = dataView.metadata.objects = {};
                }
                var evalContext = data.createStaticEvalContext(dataView, selectTransforms);
                for (var _i = 0; _i < objectDefns.length; _i++) {
                    var objectDefn = objectDefns[_i];
                    var id = objectDefn.selector.id;
                    var objects = data.DataViewObjectEvaluationUtils.evaluateDataViewObjects(evalContext, objectDescriptors, objectDefn.objects);
                    for (var objectName in objects) {
                        var object = objects[objectName];
                        var map = dataViewObjects[objectName];
                        if (!map)
                            map = dataViewObjects[objectName] = [];
                        debug.assert(powerbi.DataViewObjects.isUserDefined(map), 'expected DataViewObjectMap');
                        // NOTE: We do not check for duplicate ids.
                        map.push({ id: id, object: object });
                    }
                }
            }
            /** Evaluates and sets properties on the DataView metadata. */
            function evaluateMetadataObjects(dataView, selectTransforms, objectDescriptors, objectDefns, dataObjects, colorAllocatorFactory) {
                debug.assertValue(dataView, 'dataView');
                debug.assertAnyValue(selectTransforms, 'selectTransforms');
                debug.assertValue(objectDescriptors, 'objectDescriptors');
                debug.assertValue(objectDefns, 'objectDefns');
                debug.assertValue(dataObjects, 'dataObjects');
                debug.assertValue(colorAllocatorFactory, 'colorAllocatorFactory');
                var evalContext = data.createStaticEvalContext(dataView, selectTransforms);
                var objects = data.DataViewObjectEvaluationUtils.evaluateDataViewObjects(evalContext, objectDescriptors, objectDefns);
                if (objects) {
                    dataView.metadata.objects = objects;
                    for (var objectName in objects) {
                        var object = objects[objectName], objectDesc = objectDescriptors[objectName];
                        for (var propertyName in object) {
                            var propertyDesc = objectDesc.properties[propertyName], ruleDesc = propertyDesc.rule;
                            if (!ruleDesc)
                                continue;
                            var definition = createRuleEvaluationInstance(dataView, colorAllocatorFactory, ruleDesc, objectName, object[propertyName], propertyDesc.type);
                            if (!definition)
                                continue;
                            dataObjects.push(definition);
                        }
                    }
                }
            }
            function createRuleEvaluationInstance(dataView, colorAllocatorFactory, ruleDesc, objectName, propertyValue, ruleType) {
                debug.assertValue(dataView, 'dataView');
                debug.assertValue(colorAllocatorFactory, 'colorAllocatorFactory');
                debug.assertValue(ruleDesc, 'ruleDesc');
                debug.assertValue(propertyValue, 'propertyValue');
                debug.assertValue(ruleType, 'ruleType');
                var ruleOutput = ruleDesc.output;
                if (!ruleOutput)
                    return;
                var selectorToCreate = findSelectorForRuleInput(dataView, ruleOutput.selector);
                if (!selectorToCreate)
                    return;
                if (ruleType.fillRule)
                    return createRuleEvaluationInstanceFillRule(dataView, colorAllocatorFactory, ruleDesc, selectorToCreate, objectName, propertyValue);
            }
            function createRuleEvaluationInstanceFillRule(dataView, colorAllocatorFactory, ruleDesc, selectorToCreate, objectName, propertyValue) {
                debug.assertValue(dataView, 'dataView');
                debug.assertValue(colorAllocatorFactory, 'colorAllocatorFactory');
                debug.assertValue(ruleDesc, 'ruleDesc');
                debug.assertValue(selectorToCreate, 'selectorToCreate');
                debug.assertValue(propertyValue, 'propertyValue');
                var colorAllocator;
                if (propertyValue.linearGradient2)
                    colorAllocator = createColorAllocatorLinearGradient2(dataView, colorAllocatorFactory, ruleDesc, propertyValue, propertyValue.linearGradient2);
                else if (propertyValue.linearGradient3)
                    colorAllocator = createColorAllocatorLinearGradient3(dataView, colorAllocatorFactory, ruleDesc, propertyValue, propertyValue.linearGradient3);
                if (!colorAllocator)
                    return;
                var rule = new data.ColorRuleEvaluation(ruleDesc.inputRole, colorAllocator);
                var fillRuleProperties = {};
                fillRuleProperties[ruleDesc.output.property] = {
                    solid: { color: rule }
                };
                return {
                    selector: selectorToCreate,
                    rules: [rule],
                    objects: [{
                            name: objectName,
                            properties: fillRuleProperties,
                        }]
                };
            }
            function createColorAllocatorLinearGradient2(dataView, colorAllocatorFactory, ruleDesc, propertyValueFillRule, linearGradient2) {
                debug.assertValue(dataView, 'dataView');
                debug.assertValue(colorAllocatorFactory, 'colorAllocatorFactory');
                debug.assertValue(ruleDesc, 'ruleDesc');
                debug.assertValue(linearGradient2, 'linearGradient2');
                linearGradient2 = propertyValueFillRule.linearGradient2;
                if (linearGradient2.min.value === undefined ||
                    linearGradient2.max.value === undefined) {
                    var inputRange = findRuleInputColumnNumberRange(dataView, ruleDesc.inputRole);
                    if (!inputRange)
                        return;
                    if (linearGradient2.min.value === undefined)
                        linearGradient2.min.value = inputRange.min;
                    if (linearGradient2.max.value === undefined)
                        linearGradient2.max.value = inputRange.max;
                }
                return colorAllocatorFactory.linearGradient2(propertyValueFillRule.linearGradient2);
            }
            function createColorAllocatorLinearGradient3(dataView, colorAllocatorFactory, ruleDesc, propertyValueFillRule, linearGradient3) {
                debug.assertValue(dataView, 'dataView');
                debug.assertValue(colorAllocatorFactory, 'colorAllocatorFactory');
                debug.assertValue(ruleDesc, 'ruleDesc');
                debug.assertValue(linearGradient3, 'linearGradient3');
                var splitScales = undefined;
                linearGradient3 = propertyValueFillRule.linearGradient3;
                if (linearGradient3.min.value === undefined ||
                    linearGradient3.mid.value === undefined ||
                    linearGradient3.max.value === undefined) {
                    var inputRange = findRuleInputColumnNumberRange(dataView, ruleDesc.inputRole);
                    if (!inputRange)
                        return;
                    splitScales =
                        linearGradient3.min.value === undefined &&
                            linearGradient3.max.value === undefined &&
                            linearGradient3.mid.value !== undefined;
                    if (linearGradient3.min.value === undefined) {
                        linearGradient3.min.value = inputRange.min;
                    }
                    if (linearGradient3.max.value === undefined) {
                        linearGradient3.max.value = inputRange.max;
                    }
                    if (linearGradient3.mid.value === undefined) {
                        var midValue = (linearGradient3.max.value + linearGradient3.min.value) / 2;
                        linearGradient3.mid.value = midValue;
                    }
                }
                return colorAllocatorFactory.linearGradient3(propertyValueFillRule.linearGradient3, splitScales);
            }
            function evaluateDataRepetition(dataView, targetDataViewKinds, selectTransforms, objectDescriptors, selector, rules, objectDefns) {
                debug.assertValue(dataView, 'dataView');
                debug.assertValue(targetDataViewKinds, 'targetDataViewKinds');
                debug.assertValue(selectTransforms, 'selectTransforms');
                debug.assertValue(objectDescriptors, 'objectDescriptors');
                debug.assertValue(selector, 'selector');
                debug.assertAnyValue(rules, 'rules');
                debug.assertValue(objectDefns, 'objectDefns');
                var containsWildcard = data.Selector.containsWildcard(selector);
                var dataViewCategorical = dataView.categorical;
                if (dataViewCategorical && EnumExtensions.hasFlag(targetDataViewKinds, 1 /* Categorical */)) {
                    // 1) Match against categories
                    evaluateDataRepetitionCategoricalCategory(dataViewCategorical, objectDescriptors, selector, rules, containsWildcard, objectDefns);
                    // 2) Match against valueGrouping
                    evaluateDataRepetitionCategoricalValueGrouping(dataViewCategorical, objectDescriptors, selector, rules, containsWildcard, objectDefns);
                }
                var dataViewMatrix = dataView.matrix;
                if (dataViewMatrix && EnumExtensions.hasFlag(targetDataViewKinds, 2 /* Matrix */)) {
                    var rewrittenMatrix = evaluateDataRepetitionMatrix(dataViewMatrix, objectDescriptors, selector, rules, containsWildcard, objectDefns);
                    if (rewrittenMatrix) {
                        // TODO: This mutates the DataView -- the assumption is that prototypal inheritance has already occurred.  We should
                        // revisit this, likely when we do lazy evaluation of DataView.
                        dataView.matrix = rewrittenMatrix;
                    }
                }
                var dataViewTable = dataView.table;
                if (dataViewTable && EnumExtensions.hasFlag(targetDataViewKinds, 8 /* Table */)) {
                    var rewrittenTable = evaluateDataRepetitionTable(dataViewTable, selectTransforms, objectDescriptors, selector, rules, containsWildcard, objectDefns);
                    if (rewrittenTable) {
                        // TODO: This mutates the DataView -- the assumption is that prototypal inheritance has already occurred.  We should
                        // revisit this, likely when we do lazy evaluation of DataView.
                        dataView.table = rewrittenTable;
                    }
                }
            }
            function evaluateDataRepetitionCategoricalCategory(dataViewCategorical, objectDescriptors, selector, rules, containsWildcard, objectDefns) {
                debug.assertValue(dataViewCategorical, 'dataViewCategorical');
                debug.assertValue(objectDescriptors, 'objectDescriptors');
                debug.assertValue(selector, 'selector');
                debug.assertAnyValue(rules, 'rules');
                debug.assertValue(containsWildcard, 'containsWildcard');
                debug.assertValue(objectDefns, 'objectDefns');
                if (!dataViewCategorical.categories || dataViewCategorical.categories.length === 0)
                    return;
                var targetColumn = findSelectedCategoricalColumn(dataViewCategorical, selector);
                if (!targetColumn)
                    return;
                var identities = targetColumn.identities, foundMatch, evalContext = data.createCategoricalEvalContext(dataViewCategorical);
                if (!identities)
                    return;
                debug.assert(targetColumn.column.values.length === identities.length, 'Column length mismatch');
                for (var i = 0, len = identities.length; i < len; i++) {
                    var identity = identities[i];
                    if (containsWildcard || data.Selector.matchesData(selector, [identity])) {
                        evalContext.setCurrentRowIndex(i);
                        var objects = data.DataViewObjectEvaluationUtils.evaluateDataViewObjects(evalContext, objectDescriptors, objectDefns);
                        if (objects) {
                            // TODO: This mutates the DataView -- the assumption is that prototypal inheritance has already occurred.  We should
                            // revisit this, likely when we do lazy evaluation of DataView.
                            if (!targetColumn.column.objects) {
                                targetColumn.column.objects = [];
                                targetColumn.column.objects.length = len;
                            }
                            targetColumn.column.objects[i] = objects;
                        }
                        if (!containsWildcard)
                            return true;
                        foundMatch = true;
                    }
                }
                return foundMatch;
            }
            function evaluateDataRepetitionCategoricalValueGrouping(dataViewCategorical, objectDescriptors, selector, rules, containsWildcard, objectDefns) {
                debug.assertValue(dataViewCategorical, 'dataViewCategorical');
                debug.assertValue(objectDescriptors, 'objectDescriptors');
                debug.assertValue(selector, 'selector');
                debug.assertAnyValue(rules, 'rules');
                debug.assertValue(containsWildcard, 'containsWildcard');
                debug.assertValue(objectDefns, 'objectDefns');
                var dataViewCategoricalValues = dataViewCategorical.values;
                if (!dataViewCategoricalValues || !dataViewCategoricalValues.identityFields)
                    return;
                if (!data.Selector.matchesKeys(selector, [dataViewCategoricalValues.identityFields]))
                    return;
                var valuesGrouped = dataViewCategoricalValues.grouped();
                if (!valuesGrouped)
                    return;
                // NOTE: We do not set the evalContext row index below because iteration is over value groups (i.e., columns, no rows).
                // This should be enhanced in the future.
                var evalContext = data.createCategoricalEvalContext(dataViewCategorical);
                var foundMatch;
                for (var i = 0, len = valuesGrouped.length; i < len; i++) {
                    var valueGroup = valuesGrouped[i];
                    var selectorMetadata = selector.metadata;
                    var valuesInGroup = valueGroup.values;
                    if (containsWildcard || data.Selector.matchesData(selector, [valueGroup.identity])) {
                        var objects = data.DataViewObjectEvaluationUtils.evaluateDataViewObjects(evalContext, objectDescriptors, objectDefns);
                        if (objects) {
                            // TODO: This mutates the DataView -- the assumption is that prototypal inheritance has already occurred.  We should
                            // revisit this, likely when we do lazy evaluation of DataView.
                            if (selectorMetadata) {
                                for (var j = 0, jlen = valuesInGroup.length; j < jlen; j++) {
                                    var valueColumn = valuesInGroup[j], valueSource = valueColumn.source;
                                    if (valueSource.queryName === selectorMetadata) {
                                        var valueSourceOverwrite = powerbi.Prototype.inherit(valueSource);
                                        valueSourceOverwrite.objects = objects;
                                        valueColumn.source = valueSourceOverwrite;
                                        foundMatch = true;
                                        break;
                                    }
                                }
                            }
                            else {
                                valueGroup.objects = objects;
                                setGrouped(dataViewCategoricalValues, valuesGrouped);
                                foundMatch = true;
                            }
                        }
                        if (!containsWildcard)
                            return true;
                    }
                }
                return foundMatch;
            }
            function evaluateDataRepetitionMatrix(dataViewMatrix, objectDescriptors, selector, rules, containsWildcard, objectDefns) {
                var evalContext = data.createMatrixEvalContext(dataViewMatrix);
                var rewrittenRows = evaluateDataRepetitionMatrixHierarchy(evalContext, dataViewMatrix.rows, objectDescriptors, selector, rules, containsWildcard, objectDefns);
                var rewrittenCols = evaluateDataRepetitionMatrixHierarchy(evalContext, dataViewMatrix.columns, objectDescriptors, selector, rules, containsWildcard, objectDefns);
                if (rewrittenRows || rewrittenCols) {
                    var rewrittenMatrix = inheritSingle(dataViewMatrix);
                    if (rewrittenRows)
                        rewrittenMatrix.rows = rewrittenRows;
                    if (rewrittenCols)
                        rewrittenMatrix.columns = rewrittenCols;
                    return rewrittenMatrix;
                }
            }
            function evaluateDataRepetitionMatrixHierarchy(evalContext, dataViewMatrixHierarchy, objectDescriptors, selector, rules, containsWildcard, objectDefns) {
                debug.assertAnyValue(dataViewMatrixHierarchy, 'dataViewMatrixHierarchy');
                debug.assertValue(objectDescriptors, 'objectDescriptors');
                debug.assertValue(selector, 'selector');
                debug.assertAnyValue(rules, 'rules');
                debug.assertValue(objectDefns, 'objectDefns');
                if (!dataViewMatrixHierarchy)
                    return;
                var root = dataViewMatrixHierarchy.root;
                if (!root)
                    return;
                var rewrittenRoot = evaluateDataRepetitionMatrixNode(evalContext, root, objectDescriptors, selector, rules, containsWildcard, objectDefns);
                if (rewrittenRoot) {
                    var rewrittenHierarchy = inheritSingle(dataViewMatrixHierarchy);
                    rewrittenHierarchy.root = rewrittenRoot;
                    return rewrittenHierarchy;
                }
            }
            function evaluateDataRepetitionMatrixNode(evalContext, dataViewNode, objectDescriptors, selector, rules, containsWildcard, objectDefns) {
                debug.assertValue(evalContext, 'evalContext');
                debug.assertValue(dataViewNode, 'dataViewNode');
                debug.assertValue(objectDescriptors, 'objectDescriptors');
                debug.assertValue(selector, 'selector');
                debug.assertAnyValue(rules, 'rules');
                debug.assertValue(objectDefns, 'objectDefns');
                var childNodes = dataViewNode.children;
                if (!childNodes)
                    return;
                var rewrittenNode;
                var shouldSearchChildren;
                var childIdentityFields = dataViewNode.childIdentityFields;
                if (childIdentityFields) {
                    // NOTE: selector matching in matrix currently only considers the current node, and does not consider parents as part of the match.
                    shouldSearchChildren = data.Selector.matchesKeys(selector, [childIdentityFields]);
                }
                for (var i = 0, len = childNodes.length; i < len; i++) {
                    var childNode = childNodes[i], identity = childNode.identity, rewrittenChildNode = null;
                    if (shouldSearchChildren) {
                        if (containsWildcard || data.Selector.matchesData(selector, [identity])) {
                            // TODO: Need to initialize context for rule-based properties.  Rule-based properties
                            // (such as fillRule/gradients) are not currently implemented.
                            var objects = data.DataViewObjectEvaluationUtils.evaluateDataViewObjects(evalContext, objectDescriptors, objectDefns);
                            if (objects) {
                                rewrittenChildNode = inheritSingle(childNode);
                                rewrittenChildNode.objects = objects;
                            }
                        }
                    }
                    else {
                        rewrittenChildNode = evaluateDataRepetitionMatrixNode(evalContext, childNode, objectDescriptors, selector, rules, containsWildcard, objectDefns);
                    }
                    if (rewrittenChildNode) {
                        if (!rewrittenNode)
                            rewrittenNode = inheritNodeAndChildren(dataViewNode);
                        rewrittenNode.children[i] = rewrittenChildNode;
                        if (!containsWildcard) {
                            // NOTE: once we find a match for a non-wildcard selector, stop looking.
                            break;
                        }
                    }
                }
                return rewrittenNode;
            }
            function inheritNodeAndChildren(node) {
                if (Object.getPrototypeOf(node) !== Object.prototype) {
                    return node;
                }
                var inherited = inheritSingle(node);
                inherited.children = inherit(node.children);
                return inherited;
            }
            function evaluateDataRepetitionTable(dataViewTable, selectTransforms, objectDescriptors, selector, rules, containsWildcard, objectDefns) {
                debug.assertValue(dataViewTable, 'dataViewTable');
                debug.assertValue(selectTransforms, 'selectTransforms');
                debug.assertValue(objectDescriptors, 'objectDescriptors');
                debug.assertValue(selector, 'selector');
                debug.assertAnyValue(rules, 'rules');
                debug.assertValue(objectDefns, 'objectDefns');
                var evalContext = data.createTableEvalContext(dataViewTable, selectTransforms);
                var rewrittenRows = evaluateDataRepetitionTableRows(evalContext, dataViewTable.columns, dataViewTable.rows, dataViewTable.identity, dataViewTable.identityFields, objectDescriptors, selector, rules, containsWildcard, objectDefns);
                if (rewrittenRows) {
                    var rewrittenTable = inheritSingle(dataViewTable);
                    rewrittenTable.rows = rewrittenRows;
                    return rewrittenTable;
                }
            }
            function evaluateDataRepetitionTableRows(evalContext, columns, rows, identities, identityFields, objectDescriptors, selector, rules, containsWildcard, objectDefns) {
                debug.assertValue(evalContext, 'evalContext');
                debug.assertValue(columns, 'columns');
                debug.assertValue(rows, 'rows');
                debug.assertAnyValue(identities, 'identities');
                debug.assertAnyValue(identityFields, 'identityFields');
                debug.assertValue(objectDescriptors, 'objectDescriptors');
                debug.assertValue(selector, 'selector');
                debug.assertAnyValue(rules, 'rules');
                debug.assertValue(objectDefns, 'objectDefns');
                if (_.isEmpty(identities) || _.isEmpty(identityFields))
                    return;
                if (!selector.metadata &&
                    !data.Selector.matchesKeys(selector, [identityFields]))
                    return;
                var colIdx = _.findIndex(columns, function (col) { return col.queryName === selector.metadata; });
                if (colIdx < 0)
                    return;
                debug.assert(rows.length === identities.length, 'row length mismatch');
                var colLen = columns.length;
                var inheritedRows;
                for (var rowIdx = 0, rowLen = identities.length; rowIdx < rowLen; rowIdx++) {
                    var identity = identities[rowIdx];
                    if (containsWildcard || data.Selector.matchesData(selector, [identity])) {
                        evalContext.setCurrentRowIndex(rowIdx);
                        var objects = data.DataViewObjectEvaluationUtils.evaluateDataViewObjects(evalContext, objectDescriptors, objectDefns);
                        if (objects) {
                            if (!inheritedRows)
                                inheritedRows = inheritSingle(rows);
                            var inheritedRow = inheritedRows[rowIdx] = inheritSingle(inheritedRows[rowIdx]);
                            var objectsForColumns = inheritedRow.objects;
                            if (!objectsForColumns)
                                inheritedRow.objects = objectsForColumns = new Array(colLen);
                            objectsForColumns[colIdx] = objects;
                        }
                        if (!containsWildcard)
                            break;
                    }
                }
                return inheritedRows;
            }
            function evaluateMetadataRepetition(dataView, selectTransforms, objectDescriptors, selector, objectDefns) {
                debug.assertValue(dataView, 'dataView');
                debug.assertAnyValue(selectTransforms, 'selectTransforms');
                debug.assertValue(objectDescriptors, 'objectDescriptors');
                debug.assertValue(selector, 'selector');
                debug.assertValue(objectDefns, 'objectDefns');
                // TODO: This mutates the DataView -- the assumption is that prototypal inheritance has already occurred.  We should
                // revisit this, likely when we do lazy evaluation of DataView.
                var columns = dataView.metadata.columns, metadataId = selector.metadata, evalContext = data.createStaticEvalContext(dataView, selectTransforms);
                for (var i = 0, len = columns.length; i < len; i++) {
                    var column = columns[i];
                    if (column.queryName === metadataId) {
                        var objects = data.DataViewObjectEvaluationUtils.evaluateDataViewObjects(evalContext, objectDescriptors, objectDefns);
                        if (objects)
                            column.objects = objects;
                    }
                }
            }
            /** Attempts to find a column that can possibly match the selector. */
            function findSelectedCategoricalColumn(dataViewCategorical, selector) {
                debug.assertValue(dataViewCategorical.categories[0], 'dataViewCategorical.categories[0]');
                var categoricalColumn = dataViewCategorical.categories[0];
                if (!categoricalColumn.identityFields)
                    return;
                if (!data.Selector.matchesKeys(selector, [categoricalColumn.identityFields]))
                    return;
                var identities = categoricalColumn.identity, targetColumn = categoricalColumn;
                var selectedMetadataId = selector.metadata;
                if (selectedMetadataId) {
                    var valueColumns = dataViewCategorical.values;
                    if (valueColumns) {
                        for (var i = 0, len = valueColumns.length; i < len; i++) {
                            var valueColumn = valueColumns[i];
                            if (valueColumn.source.queryName === selectedMetadataId) {
                                targetColumn = valueColumn;
                                break;
                            }
                        }
                    }
                }
                return {
                    column: targetColumn,
                    identities: identities,
                };
            }
            function findSelectorForRuleInput(dataView, selectorRoles) {
                debug.assertValue(dataView, 'dataView');
                debug.assertValue(selectorRoles, 'selectorRoles');
                if (selectorRoles.length !== 1)
                    return;
                var dataViewCategorical = dataView.categorical;
                if (!dataViewCategorical)
                    return;
                var categories = dataViewCategorical.categories;
                if (!categories || categories.length !== 1)
                    return;
                var categoryColumn = categories[0], categoryRoles = categoryColumn.source.roles, categoryIdentityFields = categoryColumn.identityFields;
                if (!categoryRoles || !categoryIdentityFields || !categoryRoles[selectorRoles[0]])
                    return;
                return { data: [data.DataViewScopeWildcard.fromExprs(categoryIdentityFields)] };
            }
            /** Attempts to find the value range for the single column with the given inputRole. */
            function findRuleInputColumnNumberRange(dataView, inputRole) {
                debug.assertValue(dataView, 'dataView');
                debug.assertValue(inputRole, 'inputRole');
                // NOTE: This implementation currently only supports categorical DataView, becuase that's the
                // only scenario that has custom colors, as of this writing.  This would be rewritten to be more generic
                // as required, when needed.
                var dataViewCategorical = dataView.categorical;
                if (!dataViewCategorical)
                    return;
                var values = dataViewCategorical.values;
                if (!values)
                    return;
                for (var i = 0, len = values.length; i < len; i++) {
                    var valueCol = values[i], valueColRoles = valueCol.source.roles;
                    if (!valueColRoles || !valueColRoles[inputRole])
                        continue;
                    var min = valueCol.min;
                    if (min === undefined)
                        min = valueCol.minLocal;
                    if (min === undefined)
                        continue;
                    var max = valueCol.max;
                    if (max === undefined)
                        max = valueCol.maxLocal;
                    if (max === undefined)
                        continue;
                    return { min: min, max: max };
                }
            }
            function createValueColumns(values, valueIdentityFields, source) {
                if (values === void 0) { values = []; }
                var result = values;
                setGrouped(values);
                if (valueIdentityFields)
                    result.identityFields = valueIdentityFields;
                if (source)
                    result.source = source;
                return result;
            }
            DataViewTransform.createValueColumns = createValueColumns;
            function setGrouped(values, groupedResult) {
                values.grouped = groupedResult
                    ? function () { return groupedResult; }
                    : function () { return groupValues(values); };
            }
            /** Group together the values with a common identity. */
            function groupValues(values) {
                debug.assertValue(values, 'values');
                var groups = [], currentGroup;
                for (var i = 0, len = values.length; i < len; i++) {
                    var value = values[i];
                    if (!currentGroup || currentGroup.identity !== value.identity) {
                        currentGroup = {
                            values: []
                        };
                        if (value.identity) {
                            currentGroup.identity = value.identity;
                            var source = value.source;
                            // allow null, which will be formatted as (Blank).
                            if (source.groupName !== undefined)
                                currentGroup.name = source.groupName;
                            else if (source.displayName)
                                currentGroup.name = source.displayName;
                        }
                        groups.push(currentGroup);
                    }
                    currentGroup.values.push(value);
                }
                return groups;
            }
            function pivotIfNecessary(dataView, dataViewMappings) {
                debug.assertValue(dataView, 'dataView');
                var transformedDataView;
                switch (determineCategoricalTransformation(dataView.categorical, dataViewMappings)) {
                    case 1 /* Pivot */:
                        transformedDataView = data.DataViewPivotCategorical.apply(dataView);
                        break;
                    case 2 /* SelfCrossJoin */:
                        transformedDataView = data.DataViewSelfCrossJoin.apply(dataView);
                        break;
                }
                return transformedDataView || dataView;
            }
            function determineCategoricalTransformation(categorical, dataViewMappings) {
                if (!categorical || _.isEmpty(dataViewMappings))
                    return;
                var categories = categorical.categories;
                if (!categories || categories.length !== 1)
                    return;
                var values = categorical.values;
                if (_.isEmpty(values))
                    return;
                if (values.grouped().some(function (vg) { return !!vg.identity; }))
                    return;
                // If we made it here, the DataView has a single category and no valueGrouping.
                var categoryRoles = categories[0].source.roles;
                for (var i = 0, len = dataViewMappings.length; i < len; i++) {
                    var roleMappingCategorical = dataViewMappings[i].categorical;
                    if (!roleMappingCategorical)
                        continue;
                    if (!hasRolesGrouped(categoryRoles, roleMappingCategorical.values))
                        continue;
                    // If we made it here, the DataView's single category has the value grouping role.
                    var categoriesMapping = roleMappingCategorical.categories;
                    var hasCategoryRole = hasRolesBind(categoryRoles, categoriesMapping) ||
                        hasRolesFor(categoryRoles, categoriesMapping);
                    if (hasCategoryRole)
                        return 2 /* SelfCrossJoin */;
                    return 1 /* Pivot */;
                }
            }
            function shouldPivotMatrix(matrix, dataViewMappings) {
                if (!matrix || _.isEmpty(dataViewMappings))
                    return;
                var rowLevels = matrix.rows.levels;
                if (rowLevels.length < 1)
                    return;
                var rows = matrix.rows.root.children;
                if (!rows || rows.length === 0)
                    return;
                var rowRoles = rowLevels[0].sources[0].roles;
                for (var i = 0, len = dataViewMappings.length; i < len; i++) {
                    var roleMappingMatrix = dataViewMappings[i].matrix;
                    if (!roleMappingMatrix)
                        continue;
                    if (!hasRolesFor(rowRoles, roleMappingMatrix.rows) &&
                        hasRolesFor(rowRoles, roleMappingMatrix.columns)) {
                        return true;
                    }
                }
            }
            function hasRolesBind(roles, roleMapping) {
                if (roles && roleMapping && roleMapping.bind)
                    return roles[roleMapping.bind.to];
            }
            function hasRolesFor(roles, roleMapping) {
                if (roles && roleMapping && roleMapping.for)
                    return roles[roleMapping.for.in];
            }
            function hasRolesGrouped(roles, roleMapping) {
                if (roles && roleMapping && roleMapping.group)
                    return roles[roleMapping.group.by];
            }
        })(DataViewTransform = data.DataViewTransform || (data.DataViewTransform = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        function createDisplayNameGetter(displayNameKey) {
            return function (resourceProvider) { return resourceProvider.get(displayNameKey); };
        }
        data.createDisplayNameGetter = createDisplayNameGetter;
        function getDisplayName(displayNameGetter, resourceProvider) {
            if (typeof displayNameGetter === 'function')
                return displayNameGetter(resourceProvider);
            if (typeof displayNameGetter === 'string')
                return displayNameGetter;
        }
        data.getDisplayName = getDisplayName;
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
/*
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
var powerbi;
(function (powerbi) {
    /** Enumeration of DateTimeUnits */
    (function (DateTimeUnit) {
        DateTimeUnit[DateTimeUnit["Year"] = 0] = "Year";
        DateTimeUnit[DateTimeUnit["Month"] = 1] = "Month";
        DateTimeUnit[DateTimeUnit["Week"] = 2] = "Week";
        DateTimeUnit[DateTimeUnit["Day"] = 3] = "Day";
        DateTimeUnit[DateTimeUnit["Hour"] = 4] = "Hour";
        DateTimeUnit[DateTimeUnit["Minute"] = 5] = "Minute";
        DateTimeUnit[DateTimeUnit["Second"] = 6] = "Second";
        DateTimeUnit[DateTimeUnit["Millisecond"] = 7] = "Millisecond";
    })(powerbi.DateTimeUnit || (powerbi.DateTimeUnit = {}));
    var DateTimeUnit = powerbi.DateTimeUnit;
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        var SQExprBuilder;
        (function (SQExprBuilder) {
            function fieldExpr(fieldExpr) {
                return wrapColumnAggr(fieldExpr)
                    || wrapColumn(fieldExpr)
                    || wrapMeasure(fieldExpr)
                    || wrapHierarchyLevel(fieldExpr)
                    || wrapHierarchy(fieldExpr)
                    || wrapEntityAggr(fieldExpr)
                    || wrapPropertyVariationSource(fieldExpr)
                    || wrapEntity(fieldExpr);
            }
            SQExprBuilder.fieldExpr = fieldExpr;
            function wrapColumnAggr(fieldExpr) {
                var aggr = fieldExpr.columnAggr;
                if (aggr) {
                    var entityExpr = wrapEntity(fieldExpr.columnAggr);
                    return SQExprBuilder.aggregate(SQExprBuilder.columnRef(entityExpr, aggr.name), aggr.aggregate);
                }
            }
            function wrapHierarchyLevel(fieldExpr) {
                var hierarchyLevelPattern = fieldExpr.hierarchyLevel;
                if (hierarchyLevelPattern) {
                    var hierarchyExpr = SQExprBuilder.hierarchy(wrapEntity(hierarchyLevelPattern), hierarchyLevelPattern.name);
                    return SQExprBuilder.hierarchyLevel(hierarchyExpr, hierarchyLevelPattern.level);
                }
            }
            function wrapHierarchy(fieldExpr) {
                var hierarchyExprPattern = fieldExpr.hierarchy;
                if (hierarchyExprPattern) {
                    var entityExpr = wrapEntity(hierarchyExprPattern);
                    return SQExprBuilder.hierarchy(entityExpr, hierarchyExprPattern.name);
                }
            }
            function wrapPropertyVariationSource(fieldExpr) {
                var variation = fieldExpr.columnHierarchyLevelVariation;
                if (variation) {
                    var entitiyExpr = wrapEntity(variation.source);
                    return SQExprBuilder.propertyVariationSource(entitiyExpr, variation.source.name, variation.level.name);
                }
            }
            function wrapColumn(fieldExpr) {
                var column = fieldExpr.column;
                if (column) {
                    var entityExpr = wrapEntity(fieldExpr.column);
                    return SQExprBuilder.columnRef(entityExpr, column.name);
                }
            }
            function wrapMeasure(fieldExpr) {
                var measure = fieldExpr.measure;
                if (measure) {
                    var entityExpr = wrapEntity(fieldExpr.measure);
                    return SQExprBuilder.measureRef(entityExpr, measure.name);
                }
            }
            function wrapEntityAggr(fieldExpr) {
                var entityAggregate = fieldExpr.entityAggr;
                if (entityAggregate) {
                    var entityExpr = wrapEntity(fieldExpr.entityAggr);
                    return SQExprBuilder.aggregate(entityExpr, entityAggregate.aggregate);
                }
            }
            function wrapEntity(fieldExpr) {
                var fieldExprEntityItemPattern = FieldExprPattern.toFieldExprEntityItemPattern(fieldExpr);
                return SQExprBuilder.entity(fieldExprEntityItemPattern.schema, fieldExprEntityItemPattern.entity, fieldExprEntityItemPattern.entityVar);
            }
        })(SQExprBuilder = data.SQExprBuilder || (data.SQExprBuilder = {}));
        var SQExprConverter;
        (function (SQExprConverter) {
            function asFieldPattern(sqExpr) {
                // TODO: adding entity to the FieldExprPattern
                if (sqExpr instanceof data.SQEntityExpr) {
                    return {
                        entity: sqExpr.entity,
                        schema: sqExpr.schema,
                    };
                }
                return sqExpr.accept(FieldExprPatternBuilder.instance);
            }
            SQExprConverter.asFieldPattern = asFieldPattern;
        })(SQExprConverter = data.SQExprConverter || (data.SQExprConverter = {}));
        var FieldExprPatternBuilder = (function (_super) {
            __extends(FieldExprPatternBuilder, _super);
            function FieldExprPatternBuilder() {
                _super.apply(this, arguments);
            }
            FieldExprPatternBuilder.prototype.visitColumnRef = function (expr) {
                var sourceRef = expr.source.accept(SourceExprPatternBuilder.instance);
                if (!sourceRef)
                    return;
                if (sourceRef.entity) {
                    var columnRef = sourceRef.entity;
                    columnRef.name = expr.ref;
                    return { column: columnRef };
                }
            };
            FieldExprPatternBuilder.prototype.visitMeasureRef = function (expr) {
                var sourceRef = expr.source.accept(SourceExprPatternBuilder.instance);
                if (!sourceRef)
                    return;
                if (sourceRef.entity) {
                    var measureRef = sourceRef.entity;
                    measureRef.name = expr.ref;
                    return { measure: measureRef };
                }
            };
            FieldExprPatternBuilder.prototype.visitAggr = function (expr) {
                var fieldPattern = expr.arg.accept(this);
                if (fieldPattern && fieldPattern.column) {
                    var argAggr = fieldPattern.column;
                    argAggr.aggregate = expr.func;
                    return { columnAggr: argAggr };
                }
                else if (fieldPattern && fieldPattern.columnAggr) {
                    var argAggr = fieldPattern.columnAggr;
                    argAggr.aggregate = expr.func;
                    return { columnAggr: argAggr };
                }
                else if (fieldPattern && fieldPattern.hierarchyLevel) {
                    var argAggr = fieldPattern.hierarchyLevel;
                    argAggr.aggregate = expr.func;
                    return { hierarchyLevelAggr: argAggr };
                }
                var sourcePattern = expr.arg.accept(SourceExprPatternBuilder.instance);
                if (sourcePattern && sourcePattern.entity) {
                    var argAggr = sourcePattern.entity;
                    argAggr.aggregate = expr.func;
                    return { entityAggr: argAggr };
                }
            };
            FieldExprPatternBuilder.prototype.visitHierarchy = function (expr) {
                var sourcePattern = expr.arg.accept(SourceExprPatternBuilder.instance);
                if (sourcePattern && sourcePattern.entity) {
                    var hierarchyRef = (sourcePattern.entity);
                    hierarchyRef.name = expr.hierarchy;
                    return { hierarchy: hierarchyRef };
                }
            };
            FieldExprPatternBuilder.prototype.visitHierarchyLevel = function (expr) {
                var hierarchySourceExprPattern = expr.arg.accept(HierarchyExprPatternBuiler.instance);
                if (!hierarchySourceExprPattern)
                    return;
                var hierarchyLevel;
                if (hierarchySourceExprPattern.hierarchy) {
                    hierarchyLevel = {
                        entity: hierarchySourceExprPattern.hierarchy.entity,
                        schema: hierarchySourceExprPattern.hierarchy.schema,
                        name: hierarchySourceExprPattern.hierarchy.name,
                        level: expr.level,
                    };
                }
                if (hierarchySourceExprPattern.variation) {
                    return {
                        columnHierarchyLevelVariation: {
                            source: {
                                entity: hierarchySourceExprPattern.variation.column.entity,
                                schema: hierarchySourceExprPattern.variation.column.schema,
                                name: hierarchySourceExprPattern.variation.column.name,
                            },
                            level: hierarchyLevel,
                            variationName: hierarchySourceExprPattern.variation.variationName,
                        }
                    };
                }
                return { hierarchyLevel: hierarchyLevel };
            };
            FieldExprPatternBuilder.instance = new FieldExprPatternBuilder();
            return FieldExprPatternBuilder;
        })(data.DefaultSQExprVisitor);
        var SourceExprPatternBuilder = (function (_super) {
            __extends(SourceExprPatternBuilder, _super);
            function SourceExprPatternBuilder() {
                _super.apply(this, arguments);
            }
            SourceExprPatternBuilder.prototype.visitEntity = function (expr) {
                var entityRef = {
                    schema: expr.schema,
                    entity: expr.entity
                };
                if (expr.variable)
                    entityRef.entityVar = expr.variable;
                return { entity: entityRef };
            };
            SourceExprPatternBuilder.prototype.visitPropertyVariationSource = function (expr) {
                var entityExpr = expr.arg;
                if (entityExpr instanceof data.SQEntityExpr) {
                    var propertyVariationSource = {
                        schema: entityExpr.schema,
                        entity: entityExpr.entity,
                        name: expr.property,
                    };
                    if (entityExpr.variable)
                        propertyVariationSource.entityVar = entityExpr.variable;
                    return {
                        variation: {
                            column: propertyVariationSource,
                            variationName: expr.name,
                        }
                    };
                }
            };
            SourceExprPatternBuilder.instance = new SourceExprPatternBuilder();
            return SourceExprPatternBuilder;
        })(data.DefaultSQExprVisitor);
        var HierarchyExprPatternBuiler = (function (_super) {
            __extends(HierarchyExprPatternBuiler, _super);
            function HierarchyExprPatternBuiler() {
                _super.apply(this, arguments);
            }
            HierarchyExprPatternBuiler.prototype.visitHierarchy = function (expr) {
                var exprPattern = expr.arg.accept(SourceExprPatternBuilder.instance);
                var hierarchyRef;
                var variationRef;
                if (exprPattern.variation) {
                    hierarchyRef = {
                        name: expr.hierarchy,
                        schema: exprPattern.variation.column.schema,
                        entity: exprPattern.variation.column.entity,
                    };
                    variationRef = exprPattern.variation;
                }
                else
                    hierarchyRef = {
                        name: expr.hierarchy,
                        schema: exprPattern.entity.schema,
                        entity: exprPattern.entity.entity,
                    };
                return {
                    hierarchy: hierarchyRef,
                    variation: variationRef
                };
            };
            HierarchyExprPatternBuiler.instance = new HierarchyExprPatternBuiler();
            return HierarchyExprPatternBuiler;
        })(data.DefaultSQExprVisitor);
        var FieldExprPattern;
        (function (FieldExprPattern) {
            function hasFieldExprName(fieldExpr) {
                return (fieldExpr.column ||
                    fieldExpr.columnAggr ||
                    fieldExpr.measure) !== undefined;
            }
            FieldExprPattern.hasFieldExprName = hasFieldExprName;
            function getPropertyName(fieldExpr) {
                var column = (fieldExpr.column ||
                    fieldExpr.columnAggr ||
                    fieldExpr.measure);
                if (column)
                    return column.name;
            }
            FieldExprPattern.getPropertyName = getPropertyName;
            function getHierarchyName(fieldExpr) {
                var hierarchy = fieldExpr.hierarchy;
                if (hierarchy)
                    return hierarchy.name;
            }
            FieldExprPattern.getHierarchyName = getHierarchyName;
            function getColumnRef(fieldExpr) {
                if (fieldExpr.columnHierarchyLevelVariation)
                    return fieldExpr.columnHierarchyLevelVariation.source;
                return fieldExpr.column || fieldExpr.measure || fieldExpr.columnAggr;
            }
            FieldExprPattern.getColumnRef = getColumnRef;
            function getFieldExprName(fieldExpr) {
                var name = getPropertyName(fieldExpr);
                if (name)
                    return name;
                // In case it is an entity
                return toFieldExprEntityItemPattern(fieldExpr).entity;
            }
            FieldExprPattern.getFieldExprName = getFieldExprName;
            function toFieldExprEntityItemPattern(fieldExpr) {
                var field = (fieldExpr.column ||
                    fieldExpr.columnAggr ||
                    fieldExpr.entityAggr ||
                    fieldExpr.hierarchy ||
                    fieldExpr.hierarchyLevel ||
                    fieldExpr.hierarchyLevelAggr ||
                    fieldExpr.measure ||
                    (fieldExpr.columnHierarchyLevelVariation && fieldExpr.columnHierarchyLevelVariation.source) ||
                    fieldExpr); // fieldExpr for entity
                return {
                    schema: field.schema,
                    entity: field.entity,
                    entityVar: field.entityVar,
                };
            }
            FieldExprPattern.toFieldExprEntityItemPattern = toFieldExprEntityItemPattern;
        })(FieldExprPattern = data.FieldExprPattern || (data.FieldExprPattern = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var DataViewAnalysis;
    (function (DataViewAnalysis) {
        var ArrayExtensions = jsCommon.ArrayExtensions;
        var DataViewObjectDefinitions = powerbi.data.DataViewObjectDefinitions;
        (function (DataViewMappingMatchErrorCode) {
            DataViewMappingMatchErrorCode[DataViewMappingMatchErrorCode["conditionRangeTooLarge"] = 0] = "conditionRangeTooLarge";
            DataViewMappingMatchErrorCode[DataViewMappingMatchErrorCode["conditionRangeTooSmall"] = 1] = "conditionRangeTooSmall";
            DataViewMappingMatchErrorCode[DataViewMappingMatchErrorCode["conditionKindExpectedMeasure"] = 2] = "conditionKindExpectedMeasure";
            DataViewMappingMatchErrorCode[DataViewMappingMatchErrorCode["conditionKindExpectedGrouping"] = 3] = "conditionKindExpectedGrouping";
            DataViewMappingMatchErrorCode[DataViewMappingMatchErrorCode["conditionKindExpectedGroupingOrMeasure"] = 4] = "conditionKindExpectedGroupingOrMeasure";
        })(DataViewAnalysis.DataViewMappingMatchErrorCode || (DataViewAnalysis.DataViewMappingMatchErrorCode = {}));
        var DataViewMappingMatchErrorCode = DataViewAnalysis.DataViewMappingMatchErrorCode;
        /** Reshapes the data view to match the provided schema if possible. If not, returns null */
        function validateAndReshape(dataView, dataViewMappings) {
            if (!dataViewMappings || dataViewMappings.length === 0)
                return { dataView: dataView, isValid: true };
            if (dataView) {
                for (var _i = 0; _i < dataViewMappings.length; _i++) {
                    var dataViewMapping = dataViewMappings[_i];
                    // Keep the original when possible.
                    if (supports(dataView, dataViewMapping))
                        return { dataView: dataView, isValid: true };
                    if (dataViewMapping.categorical && dataView.categorical)
                        return reshapeCategorical(dataView, dataViewMapping);
                    if (dataViewMapping.tree && dataView.tree)
                        return reshapeTree(dataView, dataViewMapping.tree);
                    if (dataViewMapping.single && dataView.single)
                        return reshapeSingle(dataView, dataViewMapping.single);
                    if (dataViewMapping.table && dataView.table)
                        return reshapeTable(dataView, dataViewMapping.table);
                }
            }
            else if (powerbi.ScriptResultUtil.findScriptResult(dataViewMappings)) {
                // Currently, PBI Service treats R Script Visuals as static images.
                // This causes validation to fail, since in PBI service no DataView is generated, but there are DataViewMappings,
                // to support the PBI Desktop scenario.
                // This code will be removed once PBI Service fully supports R Script Visuals.
                // VSTS: 6217994 - [R Viz] Remove temporary DataViewAnalysis validation workaround of static R Script Visual mappings
                return { dataView: dataView, isValid: true };
            }
            return { isValid: false };
        }
        DataViewAnalysis.validateAndReshape = validateAndReshape;
        function reshapeCategorical(dataView, dataViewMapping) {
            debug.assertValue(dataViewMapping, 'dataViewMapping');
            //The functionality that used to compare categorical.values.length to schema.values doesn't apply any more, we don't want to use the same logic for re-shaping.
            var categoryRoleMapping = dataViewMapping.categorical;
            var categorical = dataView.categorical;
            if (!categorical)
                return { isValid: false };
            var rowCount;
            if (categoryRoleMapping.rowCount) {
                rowCount = categoryRoleMapping.rowCount.supported;
                if (rowCount && rowCount.max) {
                    var updated;
                    var categories = categorical.categories;
                    var maxRowCount = rowCount.max;
                    var originalLength = undefined;
                    if (categories) {
                        for (var i = 0, len = categories.length; i < len; i++) {
                            var category = categories[i];
                            originalLength = category.values.length;
                            if (maxRowCount !== undefined && originalLength > maxRowCount) {
                                // Row count too large: Trim it to fit.
                                var updatedCategories = ArrayExtensions.range(category.values, 0, maxRowCount - 1);
                                updated = updated || { categories: [] };
                                updated.categories.push({
                                    source: category.source,
                                    values: updatedCategories
                                });
                            }
                        }
                    }
                    if (categorical.values && categorical.values.length > 0 && maxRowCount) {
                        if (!originalLength)
                            originalLength = categorical.values[0].values.length;
                        if (maxRowCount !== undefined && originalLength > maxRowCount) {
                            updated = updated || {};
                            updated.values = powerbi.data.DataViewTransform.createValueColumns();
                            for (var i = 0, len = categorical.values.length; i < len; i++) {
                                var column = categorical.values[i], updatedColumn = {
                                    source: column.source,
                                    values: ArrayExtensions.range(column.values, 0, maxRowCount - 1)
                                };
                                if (column.min !== undefined)
                                    updatedColumn.min = column.min;
                                if (column.max !== undefined)
                                    updatedColumn.max = column.max;
                                if (column.subtotal !== undefined)
                                    updatedColumn.subtotal = column.subtotal;
                                updated.values.push(updatedColumn);
                            }
                        }
                    }
                    if (updated) {
                        dataView = {
                            metadata: dataView.metadata,
                            categorical: updated,
                        };
                    }
                }
            }
            if (supportsCategorical(dataView, dataViewMapping))
                return { dataView: dataView, isValid: true };
            return null;
        }
        function reshapeSingle(dataView, singleRoleMapping) {
            debug.assertValue(dataView, 'dataView');
            debug.assertValue(singleRoleMapping, 'singleRoleMapping');
            if (dataView.single)
                return { dataView: dataView, isValid: true };
            return { isValid: false };
        }
        function reshapeTree(dataView, treeRoleMapping) {
            debug.assertValue(dataView, 'dataView');
            debug.assertValue(treeRoleMapping, 'treeRoleMapping');
            // TODO: Need to implement the reshaping of Tree
            var metadata = dataView.metadata;
            if (validateRange(countGroups(metadata.columns), treeRoleMapping.depth) == null /*&& conforms(countMeasures(metadata.columns), treeRoleMapping.aggregates)*/)
                return { dataView: dataView, isValid: true };
            return { isValid: false };
        }
        function reshapeTable(dataView, tableRoleMapping) {
            debug.assertValue(dataView, 'dataView');
            debug.assertValue(tableRoleMapping, 'tableRoleMapping');
            if (dataView.table)
                return { dataView: dataView, isValid: true };
            return { isValid: false };
        }
        function countGroups(columns) {
            var count = 0;
            for (var i = 0, len = columns.length; i < len; i++) {
                if (!columns[i].isMeasure)
                    ++count;
            }
            return count;
        }
        DataViewAnalysis.countGroups = countGroups;
        function countMeasures(columns) {
            var count = 0;
            for (var i = 0, len = columns.length; i < len; i++) {
                if (columns[i].isMeasure)
                    ++count;
            }
            return count;
        }
        DataViewAnalysis.countMeasures = countMeasures;
        /** Indicates whether the dataView conforms to the specified schema. */
        function supports(dataView, roleMapping, usePreferredDataViewSchema) {
            if (!roleMapping || !dataView)
                return false;
            if (roleMapping.scriptResult && !supportsScriptResult(dataView.scriptResult, roleMapping.scriptResult))
                return false;
            if (roleMapping.categorical && !supportsCategorical(dataView, roleMapping.categorical, usePreferredDataViewSchema))
                return false;
            if (roleMapping.tree && !supportsTree(dataView, roleMapping.tree))
                return false;
            if (roleMapping.single && !supportsSingle(dataView.single, roleMapping.single))
                return false;
            if (roleMapping.table && !supportsTable(dataView.table, roleMapping.table, usePreferredDataViewSchema))
                return false;
            return true;
        }
        DataViewAnalysis.supports = supports;
        function supportsCategorical(dataView, categoryRoleMapping, usePreferredDataViewSchema) {
            debug.assertValue(categoryRoleMapping, 'categoryRoleMapping');
            var dataViewCategorical = dataView.categorical;
            if (!dataViewCategorical)
                return false;
            // TODO: Disabling this implementation isn't right.
            //if (!conforms(countMeasures(dataView.metadata.columns), categoryRoleMapping.values.roles.length))
            //    return false;
            if (categoryRoleMapping.rowCount) {
                var rowCount = categoryRoleMapping.rowCount.supported;
                if (usePreferredDataViewSchema && categoryRoleMapping.rowCount.preferred)
                    rowCount = categoryRoleMapping.rowCount.preferred;
                if (rowCount) {
                    var len = 0;
                    if (dataViewCategorical.values && dataViewCategorical.values.length)
                        len = dataViewCategorical.values[0].values.length;
                    else if (dataViewCategorical.categories && dataViewCategorical.categories.length)
                        len = dataViewCategorical.categories[0].values.length;
                    if (validateRange(len, rowCount) != null)
                        return false;
                }
            }
            return true;
        }
        function supportsSingle(dataViewSingle, singleRoleMapping) {
            debug.assertValue(singleRoleMapping, 'singleRoleMapping');
            if (!dataViewSingle)
                return false;
            return true;
        }
        function supportsTree(dataView, treeRoleMapping) {
            debug.assertValue(treeRoleMapping, 'treeRoleMapping');
            var metadata = dataView.metadata;
            return validateRange(countGroups(metadata.columns), treeRoleMapping.depth) == null;
        }
        function supportsTable(dataViewTable, tableRoleMapping, usePreferredDataViewSchema) {
            debug.assertValue(tableRoleMapping, 'tableRoleMapping');
            if (!dataViewTable)
                return false;
            if (tableRoleMapping.rowCount) {
                var rowCount = tableRoleMapping.rowCount.supported;
                if (usePreferredDataViewSchema && tableRoleMapping.rowCount.preferred)
                    rowCount = tableRoleMapping.rowCount.preferred;
                if (rowCount) {
                    var len = 0;
                    if (dataViewTable.rows && dataViewTable.rows.length)
                        len = dataViewTable.rows.length;
                    if (validateRange(len, rowCount) != null)
                        return false;
                }
            }
            return true;
        }
        function supportsScriptResult(dataView, scriptResultRoleMapping) {
            debug.assertValue(scriptResultRoleMapping, 'scriptResultRoleMapping');
            if (!dataView)
                return false;
            if (!dataView.imageBase64)
                return false;
            return true;
        }
        /**
         * Determines whether the value conforms to the range in the role condition, returning undefined
         * if so or an appropriate error code if not.
         */
        function validateRange(value, roleCondition, ignoreMin) {
            debug.assertValue(value, 'value');
            if (!roleCondition)
                return;
            if (!ignoreMin && roleCondition.min !== undefined && roleCondition.min > value)
                return DataViewMappingMatchErrorCode.conditionRangeTooSmall;
            if (roleCondition.max !== undefined && roleCondition.max < value)
                return DataViewMappingMatchErrorCode.conditionRangeTooLarge;
        }
        DataViewAnalysis.validateRange = validateRange;
        /**
         * Determines whether the value conforms to the kind in the role condition, returning undefined
         * if so or an appropriate error code if not.
         */
        function validateKind(roleCondition, roleName, projections, roleKindByQueryRef) {
            if (!roleCondition || roleCondition.kind === undefined) {
                return;
            }
            var expectedKind = roleCondition.kind;
            var roleCollection = projections[roleName];
            if (roleCollection) {
                var roleProjections = roleCollection.all();
                for (var _i = 0; _i < roleProjections.length; _i++) {
                    var roleProjection = roleProjections[_i];
                    if (roleKindByQueryRef[roleProjection.queryRef] !== expectedKind) {
                        switch (expectedKind) {
                            case powerbi.VisualDataRoleKind.Measure:
                                return DataViewMappingMatchErrorCode.conditionKindExpectedMeasure;
                            case powerbi.VisualDataRoleKind.Grouping:
                                return DataViewMappingMatchErrorCode.conditionKindExpectedGrouping;
                            case powerbi.VisualDataRoleKind.GroupingOrMeasure:
                                return DataViewMappingMatchErrorCode.conditionKindExpectedGroupingOrMeasure;
                        }
                    }
                }
            }
        }
        /** Determines the appropriate DataViewMappings for the projections. */
        function chooseDataViewMappings(projections, mappings, roleKindByQueryRef, objectDescriptors, objectDefinitions) {
            debug.assertValue(projections, 'projections');
            debug.assertValue(mappings, 'mappings');
            var supportedMappings = [];
            var errors = [];
            for (var mappingIndex = 0, mappingCount = mappings.length; mappingIndex < mappingCount; mappingIndex++) {
                var mapping = mappings[mappingIndex], mappingConditions = mapping.conditions, requiredProperties = mapping.requiredProperties;
                var allPropertiesValid = areAllPropertiesValid(requiredProperties, objectDescriptors, objectDefinitions);
                var conditionsMet = [];
                if (!_.isEmpty(mappingConditions)) {
                    for (var conditionIndex = 0, conditionCount = mappingConditions.length; conditionIndex < conditionCount; conditionIndex++) {
                        var condition = mappingConditions[conditionIndex];
                        var currentConditionErrors = checkForConditionErrors(projections, condition, roleKindByQueryRef);
                        if (!_.isEmpty(currentConditionErrors)) {
                            for (var _i = 0; _i < currentConditionErrors.length; _i++) {
                                var error = currentConditionErrors[_i];
                                error.mappingIndex = mappingIndex;
                                error.conditionIndex = conditionIndex;
                                errors.push(error);
                            }
                        }
                        else
                            conditionsMet.push(condition);
                    }
                }
                else {
                    conditionsMet.push({});
                }
                if (!_.isEmpty(conditionsMet) && allPropertiesValid) {
                    var supportedMapping = _.cloneDeep(mapping);
                    var updatedConditions = _.filter(conditionsMet, function (condition) { return Object.keys(condition).length > 0; });
                    if (!_.isEmpty(updatedConditions))
                        supportedMapping.conditions = updatedConditions;
                    supportedMappings.push(supportedMapping);
                }
            }
            return {
                supportedMappings: ArrayExtensions.emptyToNull(supportedMappings),
                mappingErrors: ArrayExtensions.emptyToNull(errors),
            };
        }
        DataViewAnalysis.chooseDataViewMappings = chooseDataViewMappings;
        function checkForConditionErrors(projections, condition, roleKindByQueryRef) {
            debug.assertValue(projections, 'projections');
            debug.assertValue(condition, 'condition');
            var conditionRoles = Object.keys(condition);
            var errors = [];
            for (var i = 0, len = conditionRoles.length; i < len; i++) {
                var roleName = conditionRoles[i], isDrillable = projections[roleName] && !_.isEmpty(projections[roleName].activeProjectionRefs), roleCondition = condition[roleName];
                var roleCount = getPropertyCount(roleName, projections, isDrillable);
                var rangeError = validateRange(roleCount, roleCondition);
                if (rangeError != null) {
                    errors.push({
                        code: rangeError,
                        roleName: roleName,
                    });
                }
                var kindError = validateKind(roleCondition, roleName, projections, roleKindByQueryRef);
                if (kindError != null) {
                    errors.push({
                        code: kindError,
                        roleName: roleName,
                    });
                }
            }
            return errors;
        }
        function areAllPropertiesValid(requiredProperties, objectDescriptors, objectDefinitions) {
            if (_.isEmpty(requiredProperties))
                return true;
            if (!objectDescriptors || !objectDefinitions)
                return false;
            var staticEvalContext = powerbi.data.createStaticEvalContext();
            return _.every(requiredProperties, function (requiredProperty) {
                var objectDescriptorValue = null;
                var objectDescriptorProperty = objectDescriptors[requiredProperty.objectName];
                if (objectDescriptorProperty)
                    objectDescriptorValue = objectDescriptorProperty.properties[requiredProperty.propertyName];
                var objectDefinitionValue = DataViewObjectDefinitions.getValue(objectDefinitions, requiredProperty, null);
                if (!objectDescriptorValue || !objectDefinitionValue)
                    return false;
                return powerbi.data.DataViewObjectEvaluator.evaluateProperty(staticEvalContext, objectDescriptorValue, objectDefinitionValue);
            });
        }
        function getPropertyCount(roleName, projections, useActiveIfAvailable) {
            debug.assertValue(roleName, 'roleName');
            debug.assertValue(projections, 'projections');
            var projectionsForRole = projections[roleName];
            if (projectionsForRole) {
                if (useActiveIfAvailable)
                    return 1;
                return projectionsForRole.all().length;
            }
            return 0;
        }
        DataViewAnalysis.getPropertyCount = getPropertyCount;
        function hasSameCategoryIdentity(dataView1, dataView2) {
            if (dataView1
                && dataView2
                && dataView1.categorical
                && dataView2.categorical) {
                var dv1Categories = dataView1.categorical.categories;
                var dv2Categories = dataView2.categorical.categories;
                if (dv1Categories
                    && dv2Categories
                    && dv1Categories.length === dv2Categories.length) {
                    for (var i = 0, len = dv1Categories.length; i < len; i++) {
                        var dv1Identity = dv1Categories[i].identity;
                        var dv2Identity = dv2Categories[i].identity;
                        var dv1Length = getLengthOptional(dv1Identity);
                        if (dv1Length !== getLengthOptional(dv2Identity))
                            return false;
                        for (var j = 0; j < dv1Length; j++) {
                            if (!powerbi.DataViewScopeIdentity.equals(dv1Identity[j], dv2Identity[j]))
                                return false;
                        }
                    }
                    return true;
                }
            }
            return false;
        }
        DataViewAnalysis.hasSameCategoryIdentity = hasSameCategoryIdentity;
        function getLengthOptional(identity) {
            if (identity)
                return identity.length;
            return 0;
        }
        function areMetadataColumnsEquivalent(column1, column2) {
            if (!column1 && !column2)
                return true;
            if (!column1 || !column2)
                return false;
            if (column1.displayName !== column2.displayName)
                return false;
            if (column1.queryName !== column2.queryName)
                return false;
            if (column1.isMeasure !== column2.isMeasure)
                return false;
            if (column1.type !== column2.type)
                return false;
            if (column1.sort !== column2.sort)
                return false;
            return true;
        }
        DataViewAnalysis.areMetadataColumnsEquivalent = areMetadataColumnsEquivalent;
        /* Returns true if the metadata columns at the same positions in the array are equivalent. */
        function isMetadataEquivalent(metadata1, metadata2) {
            if (!metadata1 && !metadata2)
                return true;
            if (!metadata1 || !metadata2)
                return false;
            var previousColumnsLength = metadata1.columns.length;
            var newColumnsLength = metadata2.columns.length;
            if (previousColumnsLength !== newColumnsLength)
                return false;
            for (var i = 0; i < newColumnsLength; i++) {
                if (!DataViewAnalysis.areMetadataColumnsEquivalent(metadata1.columns[i], metadata2.columns[i]))
                    return false;
            }
            return true;
        }
        DataViewAnalysis.isMetadataEquivalent = isMetadataEquivalent;
    })(DataViewAnalysis = powerbi.DataViewAnalysis || (powerbi.DataViewAnalysis = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var DataViewScopeIdentity;
    (function (DataViewScopeIdentity) {
        /** Compares the two DataViewScopeIdentity values for equality. */
        function equals(x, y, ignoreCase) {
            // Normalize falsy to null
            x = x || null;
            y = y || null;
            if (x === y)
                return true;
            if (!x !== !y)
                return false;
            debug.assertValue(x, 'x');
            debug.assertValue(y, 'y');
            return data.SQExpr.equals(x.expr, y.expr, ignoreCase);
        }
        DataViewScopeIdentity.equals = equals;
        function filterFromIdentity(identities, isNot) {
            if (_.isEmpty(identities))
                return;
            var exprs = [];
            for (var _i = 0; _i < identities.length; _i++) {
                var identity = identities[_i];
                exprs.push(identity.expr);
            }
            return filterFromExprs(exprs, isNot);
        }
        DataViewScopeIdentity.filterFromIdentity = filterFromIdentity;
        function filterFromExprs(orExprs, isNot) {
            if (_.isEmpty(orExprs))
                return;
            var resultExpr;
            for (var _i = 0; _i < orExprs.length; _i++) {
                var orExpr = orExprs[_i];
                var inExpr = data.ScopeIdentityExtractor.getInExpr(orExpr);
                if (resultExpr)
                    resultExpr = data.SQExprBuilder.or(resultExpr, inExpr);
                else
                    resultExpr = inExpr || orExpr;
            }
            if (resultExpr) {
                if (isNot)
                    resultExpr = powerbi.data.SQExprBuilder.not(resultExpr);
            }
            return powerbi.data.SemanticFilter.fromSQExpr(resultExpr);
        }
        DataViewScopeIdentity.filterFromExprs = filterFromExprs;
    })(DataViewScopeIdentity = powerbi.DataViewScopeIdentity || (powerbi.DataViewScopeIdentity = {}));
    var data;
    (function (data) {
        var Lazy = jsCommon.Lazy;
        function createDataViewScopeIdentity(expr) {
            return new DataViewScopeIdentityImpl(expr);
        }
        data.createDataViewScopeIdentity = createDataViewScopeIdentity;
        var DataViewScopeIdentityImpl = (function () {
            function DataViewScopeIdentityImpl(expr) {
                debug.assertValue(expr, 'expr');
                this._expr = expr;
                this._key = new Lazy(function () { return data.SQExprShortSerializer.serialize(expr); });
            }
            Object.defineProperty(DataViewScopeIdentityImpl.prototype, "expr", {
                get: function () {
                    return this._expr;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DataViewScopeIdentityImpl.prototype, "key", {
                get: function () {
                    return this._key.getValue();
                },
                enumerable: true,
                configurable: true
            });
            return DataViewScopeIdentityImpl;
        })();
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        var Lazy = jsCommon.Lazy;
        var DataViewScopeWildcard;
        (function (DataViewScopeWildcard) {
            function matches(wildcard, instance) {
                var instanceExprs = data.ScopeIdentityExtractor.getKeys(instance.expr);
                if (!instanceExprs)
                    return false;
                return data.SQExprUtils.sequenceEqual(wildcard.exprs, instanceExprs);
            }
            DataViewScopeWildcard.matches = matches;
            function fromExprs(exprs) {
                return new DataViewScopeWildcardImpl(exprs);
            }
            DataViewScopeWildcard.fromExprs = fromExprs;
            var DataViewScopeWildcardImpl = (function () {
                function DataViewScopeWildcardImpl(exprs) {
                    debug.assertValue(exprs, 'exprs');
                    this._exprs = exprs;
                    this._key = new Lazy(function () { return data.SQExprShortSerializer.serializeArray(exprs); });
                }
                Object.defineProperty(DataViewScopeWildcardImpl.prototype, "exprs", {
                    get: function () {
                        return this._exprs;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DataViewScopeWildcardImpl.prototype, "key", {
                    get: function () {
                        return this._key.getValue();
                    },
                    enumerable: true,
                    configurable: true
                });
                return DataViewScopeWildcardImpl;
            })();
        })(DataViewScopeWildcard = data.DataViewScopeWildcard || (data.DataViewScopeWildcard = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        var DataViewRegression;
        (function (DataViewRegression) {
            // TODO VSTS 6842046: Currently we are using a constant queryName since we don't have a way to generate
            // unique ones. There is a bug filed to do this by lawong, so this part will be fixed with that bug.
            var regressionXQueryName = 'RegressionX';
            DataViewRegression.regressionYQueryName = 'RegressionY';
            function run(options) {
                debug.assertValue(options, 'options');
                var dataViewMappings = options.dataViewMappings;
                var transformedDataViews = options.transformedDataViews;
                var dataRoles = options.dataRoles;
                var objectDescriptors = options.objectDescriptors;
                var objectDefinitions = options.objectDefinitions;
                var colorAllocatorFactory = options.colorAllocatorFactory;
                var transformSelects = options.transformSelects;
                var projectionActiveItems = options.projectionActiveItems;
                var dataView = options.dataView;
                if (transformedDataViews.length === 1 && transformSelects && dataView.metadata) {
                    // compute linear regression line if applicable
                    var roleKindByQueryRef = data.DataViewSelectTransform.createRoleKindFromMetadata(transformSelects, dataView.metadata);
                    var projections = data.DataViewSelectTransform.projectionsFromSelects(transformSelects, projectionActiveItems);
                    if (!roleKindByQueryRef || !projections || !dataViewMappings || !objectDescriptors || !objectDefinitions)
                        return transformedDataViews;
                    var applicableDataViewMappings = powerbi.DataViewAnalysis.chooseDataViewMappings(projections, dataViewMappings, roleKindByQueryRef, objectDescriptors, objectDefinitions).supportedMappings;
                    if (applicableDataViewMappings) {
                        var regressionDataViewMapping = _.find(applicableDataViewMappings, function (dataViewMapping) {
                            return dataViewMapping.usage && dataViewMapping.usage.regression;
                        });
                        if (regressionDataViewMapping) {
                            var regressionSource = transformedDataViews[0];
                            var regressionDataView = this.linearRegressionTransform(regressionSource, dataRoles, regressionDataViewMapping, objectDescriptors, objectDefinitions, colorAllocatorFactory);
                            if (regressionDataView)
                                transformedDataViews.push(regressionDataView);
                        }
                    }
                }
                return transformedDataViews;
            }
            DataViewRegression.run = run;
            /**
             * This function will compute the linear regression algorithm on the sourceDataView and create a new dataView.
             * It works on scalar axis only.
             * The algorithm is as follows
             *
             * 1. Find the cartesian X and Y roles and the columns that correspond to those roles
             * 2. Order the X-Y value pairs by the X values
             * 3. Linearly map dates to their respective times and normalize since regression cannot be directly computed on dates
             * 4. Compute the actual regression:
             *    i.   xBar: average of X values, yBar: average of Y values
             *    ii.  ssXX: sum of squares of X values = Sum(xi - xBar)^2
             *    iii. ssXY: sum of squares of X and Y values  = Sum((xi - xBar)(yi - yBar)
             *    iv.  Slope: ssXY / ssXX
             *    v.   Intercept: yBar - xBar * slope
             * 5. Compute the X and Y points for regression line using Y = Slope * X + Intercept
             * 6. Create the new dataView using the points computed above
             */
            function linearRegressionTransform(sourceDataView, dataRoles, regressionDataViewMapping, objectDescriptors, objectDefinitions, colorAllocatorFactory) {
                debug.assertValue(sourceDataView, 'sourceDataView');
                debug.assertValue(sourceDataView.categorical, 'sourceDataView.categorical');
                debug.assertValue(dataRoles, 'dataRoles');
                debug.assertValue(objectDescriptors, 'objectDescriptors');
                debug.assertValue(objectDefinitions, 'objectDefinitions');
                debug.assertValue(colorAllocatorFactory, 'colorAllocatorFactory');
                // Step 1
                var xRole = findRoleWithCartesianAxis(0 /* X */, dataRoles);
                var yRole = findRoleWithCartesianAxis(1 /* Y */, dataRoles);
                if (!xRole || !yRole)
                    return;
                var xColumn = getColumnForCategoricalRole(xRole, sourceDataView.categorical);
                var yColumn = getColumnForCategoricalRole(yRole, sourceDataView.categorical);
                if (!xColumn || !yColumn)
                    return;
                var unsortedXValues = xColumn.values;
                var unsortedYValues = yColumn.values;
                if (_.isEmpty(unsortedXValues) || _.isEmpty(unsortedYValues))
                    return;
                // get the data type for each column; we will have null type when dataPoints have different type or if a value is null
                var xDataType = getDataType(unsortedXValues);
                if (!xDataType)
                    return;
                var yDataType = getDataType(unsortedYValues);
                if (!yDataType)
                    return;
                // Step 2
                var _a = sortValues(unsortedXValues, unsortedYValues), xValues = _a.xValues, yValues = _a.yValues;
                var minCategoryValue = xValues[0];
                var maxCategoryValue = xValues[xValues.length - 1];
                // Step 3
                if (xDataType === 'Date')
                    xValues = normalizeDateValues(xValues);
                // Step 4
                var _b = computeRegressionLine(xValues, yValues), slope = _b.slope, intercept = _b.intercept;
                // Step 5
                var minXValue = xValues[0];
                var maxXValue = xValues[xValues.length - 1];
                var newCategories = [minCategoryValue, maxCategoryValue];
                var newValues = [minXValue * slope + intercept, maxXValue * slope + intercept];
                // Step 6
                var regressionDataView = createRegressionDataView(xColumn, yColumn, newCategories, newValues, sourceDataView, regressionDataViewMapping, objectDescriptors, objectDefinitions, colorAllocatorFactory);
                return regressionDataView;
            }
            DataViewRegression.linearRegressionTransform = linearRegressionTransform;
            function findRoleWithCartesianAxis(cartesianRole, dataRoles) {
                debug.assertValue(cartesianRole, 'cartesianRole');
                debug.assertValue(dataRoles, 'dataRoles');
                for (var _i = 0; _i < dataRoles.length; _i++) {
                    var dataRole = dataRoles[_i];
                    if (dataRole.cartesianKind === cartesianRole)
                        return dataRole.name;
                }
            }
            function getColumnForCategoricalRole(roleName, categorical) {
                debug.assertValue(roleName, 'roleName');
                debug.assertValue(categorical, 'categorical');
                debug.assertValue(categorical.categories, 'categorical.categories');
                debug.assertValue(categorical.values, 'categorical.values');
                var categoryColumn = getRoleFromColumn(roleName, categorical.categories);
                if (categoryColumn)
                    return categoryColumn;
                // Regression is not supported for multiple series yet, so return null column back
                if (categorical.values.source)
                    return null;
                var valueColumn = getRoleFromColumn(roleName, categorical.values);
                if (valueColumn)
                    return valueColumn;
                return null;
            }
            function getRoleFromColumn(roleName, columns) {
                debug.assertValue(roleName, 'roleName');
                debug.assertValue(columns, 'columns');
                return _.find(columns, function (column) {
                    return column.source.roles[roleName];
                });
            }
            function getDataType(values) {
                if (_.isEmpty(values) || values[0] == null)
                    return;
                var dataType = typeof values[0];
                if (_.some(values, function (value) { return value === null || typeof value !== dataType; }))
                    return;
                return dataType;
            }
            function sortValues(unsortedXValues, unsortedYValues) {
                debug.assertValue(unsortedXValues, 'unsortedXValues');
                debug.assertValue(unsortedYValues, 'unsortedYValues');
                var zippedValues = _.zip(unsortedXValues, unsortedYValues);
                var sortedValues = _.sortBy(zippedValues, function (valuePair) {
                    return valuePair[0];
                });
                var _a = _.unzip(sortedValues), xValues = _a[0], yValues = _a[1];
                return {
                    xValues: xValues,
                    yValues: yValues
                };
            }
            function normalizeDateValues(xValues) {
                debug.assertValue(xValues, 'xValues');
                var initialTime = xValues[0].getTime();
                for (var i = 0; i < xValues.length; i++) {
                    xValues[i] = xValues[i].getTime() - initialTime;
                }
                return xValues;
            }
            function computeRegressionLine(xValues, yValues) {
                debug.assertValue(xValues, 'xValues');
                debug.assertValue(yValues, 'yValues');
                var xBar = _.sum(xValues) / xValues.length;
                var yBar = _.sum(yValues) / yValues.length;
                var ssXX = _.chain(xValues)
                    .map(function (x) {
                    return Math.pow((x - xBar), 2);
                })
                    .sum();
                var ssXY = _.chain(xValues)
                    .map(function (x, i) {
                    return (x - xBar) * (yValues[i] - yBar);
                })
                    .sum();
                var slope = ssXY / ssXX;
                var intercept = yBar - (xBar * slope);
                return {
                    slope: slope,
                    intercept: intercept
                };
            }
            function createRegressionDataView(xColumn, yColumn, newCategories, newValues, sourceDataView, regressionDataViewMapping, objectDescriptors, objectDefinitions, colorAllocatorFactory) {
                debug.assertValue(xColumn, 'xColumn');
                debug.assertValue(yColumn, 'yColumn');
                debug.assertValue(newCategories, 'newCategories');
                debug.assertValue(newValues, 'newValues');
                debug.assertValue(sourceDataView, 'sourceDataView');
                debug.assertValue(objectDescriptors, 'objectDescriptors');
                debug.assertValue(objectDefinitions, 'objectDefinitions');
                debug.assertValue(colorAllocatorFactory, 'colorAllocatorFactory');
                var xRole = regressionDataViewMapping.categorical.categories.for.in;
                var yRole = regressionDataViewMapping.categorical.values.for.in;
                var categoricalRoles = {};
                categoricalRoles[xRole] = true;
                var valueRoles = {};
                valueRoles[yRole] = true;
                var regressionDataView = data.createCategoricalDataViewBuilder()
                    .withCategories([{
                        source: {
                            displayName: xColumn.source.displayName,
                            queryName: regressionXQueryName,
                            type: xColumn.source.type,
                            isMeasure: xColumn.source.isMeasure,
                            roles: categoricalRoles
                        },
                        values: newCategories
                    }])
                    .withValues({
                    columns: [{
                            source: {
                                displayName: yColumn.source.displayName,
                                queryName: DataViewRegression.regressionYQueryName,
                                type: yColumn.source.type,
                                isMeasure: yColumn.source.isMeasure,
                                roles: valueRoles
                            },
                            values: newValues
                        }]
                })
                    .build();
                data.DataViewTransform.transformObjects(regressionDataView, 1 /* Categorical */, objectDescriptors, objectDefinitions, [], colorAllocatorFactory);
                return regressionDataView;
            }
        })(DataViewRegression = data.DataViewRegression || (data.DataViewRegression = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        var DataViewSelectTransform;
        (function (DataViewSelectTransform) {
            /** Convert selection info to projections */
            function projectionsFromSelects(selects, projectionActiveItems) {
                debug.assertAnyValue(selects, "selects");
                debug.assertAnyValue(projectionActiveItems, "projectionActiveItems");
                var projections = {};
                for (var _i = 0; _i < selects.length; _i++) {
                    var select = selects[_i];
                    var roles = select.roles;
                    if (!roles)
                        continue;
                    for (var roleName in roles) {
                        if (roles[roleName]) {
                            var qp = projections[roleName];
                            if (!qp)
                                qp = projections[roleName] = new data.QueryProjectionCollection([]);
                            qp.all().push({ queryRef: select.queryName });
                            if (projectionActiveItems && projectionActiveItems[roleName])
                                qp.activeProjectionRefs = projectionActiveItems[roleName];
                        }
                    }
                }
                return projections;
            }
            DataViewSelectTransform.projectionsFromSelects = projectionsFromSelects;
            /** Use selections and metadata to fashion query role kinds */
            function createRoleKindFromMetadata(selects, metadata) {
                var roleKindByQueryRef = {};
                for (var _i = 0, _a = metadata.columns; _i < _a.length; _i++) {
                    var column = _a[_i];
                    if ((!column.index && column.index !== 0) || column.index < 0 || column.index >= selects.length)
                        continue;
                    var select = selects[column.index];
                    if (select) {
                        var queryRef = select.queryName;
                        if (queryRef && roleKindByQueryRef[queryRef] === undefined) {
                            roleKindByQueryRef[queryRef] = column.isMeasure ? powerbi.VisualDataRoleKind.Measure : powerbi.VisualDataRoleKind.Grouping;
                        }
                    }
                }
                return roleKindByQueryRef;
            }
            DataViewSelectTransform.createRoleKindFromMetadata = createRoleKindFromMetadata;
        })(DataViewSelectTransform = data.DataViewSelectTransform || (data.DataViewSelectTransform = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        function createCategoricalEvalContext(dataViewCategorical) {
            return new CategoricalEvalContext(dataViewCategorical);
        }
        data.createCategoricalEvalContext = createCategoricalEvalContext;
        var CategoricalEvalContext = (function () {
            function CategoricalEvalContext(dataView) {
                debug.assertValue(dataView, 'dataView');
                this.dataView = dataView;
                this.columnsByRole = {};
            }
            CategoricalEvalContext.prototype.getExprValue = function (expr) {
                return;
            };
            CategoricalEvalContext.prototype.getRoleValue = function (roleName) {
                var columnsByRole = this.columnsByRole;
                var column = columnsByRole[roleName];
                if (!column)
                    column = columnsByRole[roleName] = findRuleInputColumn(this.dataView, roleName);
                if (!column)
                    return;
                var index = this.index;
                if (index != null)
                    return column.values[this.index];
            };
            CategoricalEvalContext.prototype.setCurrentRowIndex = function (index) {
                debug.assertValue(index, 'index');
                this.index = index;
            };
            return CategoricalEvalContext;
        })();
        function findRuleInputColumn(dataViewCategorical, inputRole) {
            debug.assertValue(dataViewCategorical, 'dataViewCategorical');
            return findRuleInputInColumns(dataViewCategorical.values, inputRole) ||
                findRuleInputInColumns(dataViewCategorical.categories, inputRole);
        }
        function findRuleInputInColumns(columns, inputRole) {
            debug.assertAnyValue(columns, 'columns');
            if (!columns)
                return;
            for (var _i = 0; _i < columns.length; _i++) {
                var column = columns[_i];
                var roles = column.source.roles;
                if (!roles || !roles[inputRole])
                    continue;
                return column;
            }
        }
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        function createTableEvalContext(dataViewTable, selectTransforms) {
            return new TableEvalContext(dataViewTable, selectTransforms);
        }
        data.createTableEvalContext = createTableEvalContext;
        var TableEvalContext = (function () {
            function TableEvalContext(dataView, selectTransforms) {
                debug.assertValue(dataView, 'dataView');
                debug.assertValue(selectTransforms, 'selectTransforms');
                this.dataView = dataView;
                this.selectTransforms = selectTransforms;
            }
            TableEvalContext.prototype.getExprValue = function (expr) {
                debug.assertValue(expr, 'expr');
                var rowIdx = this.rowIdx;
                if (rowIdx == null)
                    return;
                return data.getExprValueFromTable(expr, this.selectTransforms, this.dataView, rowIdx);
            };
            TableEvalContext.prototype.getRoleValue = function (roleName) {
                return;
            };
            TableEvalContext.prototype.setCurrentRowIndex = function (index) {
                debug.assertValue(index, 'index');
                this.rowIdx = index;
            };
            return TableEvalContext;
        })();
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        var RuleEvaluation = (function () {
            function RuleEvaluation() {
            }
            // NOTE: even though this class has no behaviour, we still use a class to facilitate instanceof checks.
            RuleEvaluation.prototype.evaluate = function (evalContext) {
                debug.assertFail('Abstract method RuleEvaluation.evaluate not implemented.');
            };
            return RuleEvaluation;
        })();
        data.RuleEvaluation = RuleEvaluation;
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        var ColorRuleEvaluation = (function (_super) {
            __extends(ColorRuleEvaluation, _super);
            function ColorRuleEvaluation(inputRole, allocator) {
                debug.assertValue(inputRole, 'inputRole');
                debug.assertValue(allocator, 'allocator');
                _super.call(this);
                this.inputRole = inputRole;
                this.allocator = allocator;
            }
            ColorRuleEvaluation.prototype.evaluate = function (evalContext) {
                debug.assertValue(evalContext, 'evalContext');
                var value = evalContext.getRoleValue(this.inputRole);
                if (value !== undefined)
                    return this.allocator.color(value);
            };
            return ColorRuleEvaluation;
        })(data.RuleEvaluation);
        data.ColorRuleEvaluation = ColorRuleEvaluation;
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        var utils;
        (function (utils) {
            var inherit = powerbi.Prototype.inherit;
            var inheritSingle = powerbi.Prototype.inheritSingle;
            var DataViewMatrixUtils;
            (function (DataViewMatrixUtils) {
                /**
                 * Invokes the specified callback once per descendent leaf node of the specified matrixNode, with an optional
                 * index parameter in the callback that is the 0-based index of the particular leaf node in the context of this
                 * forEachLeafNode(...) invocation.
                 */
                function forEachLeafNode(matrixNode, callback) {
                    debug.assertValue(matrixNode, 'matrixNode');
                    debug.assertValue(callback, 'callback');
                    forEachLeafNodeRecursive(matrixNode, 0, callback);
                }
                DataViewMatrixUtils.forEachLeafNode = forEachLeafNode;
                function forEachLeafNodeRecursive(matrixNode, nextIndex, callback) {
                    debug.assertValue(matrixNode, 'matrixNode');
                    debug.assertValue(callback, 'callback');
                    if (_.isEmpty(matrixNode.children)) {
                        callback(matrixNode, nextIndex);
                        nextIndex++;
                    }
                    else {
                        var children = matrixNode.children;
                        for (var i = 0, len = children.length; i < len; i++) {
                            var nextChild = children[i];
                            if (nextChild) {
                                nextIndex = forEachLeafNodeRecursive(nextChild, nextIndex, callback);
                            }
                        }
                    }
                    return nextIndex;
                }
                /**
                 * Returned an object tree where each node and its children property are inherited from the specified node
                 * hierarchy, from the root down to the nodes at the specified deepestLevelToInherit, inclusively.
                 *
                 * The inherited nodes at level === deepestLevelToInherit will NOT get an inherited version of children array
                 * property, i.e. its children property is the same array object referenced in the input node's object tree.
                 *
                 * @param node The input node with the hierarchy object tree.
                 * @param deepestLevelToInherit The highest level for a node to get inherited. See DataViewMatrixNode.level property.
                 * @param useInheritSingle If true, then a node will get inherited in the returned object tree only if it is
                 * not already an inherited object. Same goes for the node's children property.  This is useful for creating
                 * "visual DataView" objects from "query DataView" objects, as object inheritance is the mechanism for
                 * "visual DataView" to override properties in "query DataView", and that "query DataView" never contains
                 * inherited objects.
                 */
                function inheritMatrixNodeHierarchy(node, deepestLevelToInherit, useInheritSingle) {
                    debug.assertValue(node, 'node');
                    debug.assert(deepestLevelToInherit >= 0, 'deepestLevelToInherit >= 0');
                    debug.assertValue(useInheritSingle, 'useInheritSingle');
                    var returnNode = node;
                    // Note: The level property of DataViewMatrix.rows.root and DataViewMatrix.columns.root are always undefined.
                    // Also, in a matrix with multiple column grouping fields and multiple value fields, the DataViewMatrixNode
                    // for the Grand Total column in the column hierarchy will have children nodes where level > (parent.level + 1):
                    //  {
                    //    "level": 0,
                    //    "isSubtotal": true,
                    //    "children": [
                    //      { "level": 2, "isSubtotal": true },
                    //      { "level": 2, "levelSourceIndex": 1, "isSubtotal": true }
                    //    ]
                    //  }
                    var isRootNode = _.isUndefined(node.level);
                    var shouldInheritCurrentNode = isRootNode || (node.level <= deepestLevelToInherit);
                    if (shouldInheritCurrentNode) {
                        var inheritFunc = useInheritSingle ? inheritSingle : inherit;
                        var inheritedNode = inheritFunc(node);
                        var shouldInheritChildNodes = isRootNode || (node.level < deepestLevelToInherit);
                        if (shouldInheritChildNodes && !_.isEmpty(node.children)) {
                            inheritedNode.children = inheritFunc(node.children); // first, make an inherited array
                            for (var i = 0, ilen = inheritedNode.children.length; i < ilen; i++) {
                                inheritedNode.children[i] =
                                    inheritMatrixNodeHierarchy(inheritedNode.children[i], deepestLevelToInherit, useInheritSingle);
                            }
                        }
                        returnNode = inheritedNode;
                    }
                    return returnNode;
                }
                DataViewMatrixUtils.inheritMatrixNodeHierarchy = inheritMatrixNodeHierarchy;
            })(DataViewMatrixUtils = utils.DataViewMatrixUtils || (utils.DataViewMatrixUtils = {}));
        })(utils = data.utils || (data.utils = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        var utils;
        (function (utils) {
            var DataViewMetadataColumnUtils;
            (function (DataViewMetadataColumnUtils) {
                /**
                 * Returns true iff the specified metadataColumn is assigned to the specified targetRole.
                 */
                function isForRole(metadataColumn, targetRole) {
                    debug.assertValue(metadataColumn, 'metadataColumn');
                    debug.assertValue(targetRole, 'targetRole');
                    var roles = metadataColumn.roles;
                    return roles && roles[targetRole];
                }
                DataViewMetadataColumnUtils.isForRole = isForRole;
                /**
                 * Joins each column in the specified columnSources with projection ordering index into a wrapper object.
                 *
                 * Note: In order for this function to reliably calculate the "source index" of a particular column, the
                 * specified columnSources must be a non-filtered array of column sources from the DataView, such as
                 * the DataViewHierarchyLevel.sources and DataViewMatrix.valueSources array properties.
                 *
                 * @param columnSources E.g. DataViewHierarchyLevel.sources, DataViewMatrix.valueSources...
                 * @param projection The projection ordering.  It must contain an ordering for the specified role.
                 * @param role The role for getting the relevant projection ordering, as well as for filtering out the irrevalent columns in columnSources.
                 */
                function joinMetadataColumnsAndProjectionOrder(columnSources, projection, role) {
                    debug.assertAnyValue(columnSources, 'columnSources');
                    debug.assert(_.all(columnSources, function (column) { return _.isNumber(column.index); }), 'pre-condition: Every value in columnSources must already have its Select Index property initialized.');
                    debug.assertNonEmpty(projection[role], 'projection[role]');
                    debug.assert(_.all(columnSources, function (column) { return !isForRole(column, role) || _.contains(projection[role], column.index); }), 'pre-condition: The projection order for the specified role must contain the Select Index of every column with matching role in the specified columnSources.');
                    var jointResult = [];
                    if (!_.isEmpty(columnSources)) {
                        var projectionOrderSelectIndices = projection[role];
                        var selectIndexToProjectionIndexMap = {};
                        for (var i = 0, ilen = projectionOrderSelectIndices.length; i < ilen; i++) {
                            var selectIndex = projectionOrderSelectIndices[i];
                            selectIndexToProjectionIndexMap[selectIndex] = i;
                        }
                        for (var j = 0, jlen = columnSources.length; j < jlen; j++) {
                            var column = columnSources[j];
                            if (isForRole(column, role)) {
                                var jointColumnInfo = {
                                    metadataColumn: column,
                                    sourceIndex: j,
                                    projectionOrderIndex: selectIndexToProjectionIndexMap[column.index]
                                };
                                jointResult.push(jointColumnInfo);
                            }
                        }
                    }
                    return jointResult;
                }
                DataViewMetadataColumnUtils.joinMetadataColumnsAndProjectionOrder = joinMetadataColumnsAndProjectionOrder;
            })(DataViewMetadataColumnUtils = utils.DataViewMetadataColumnUtils || (utils.DataViewMetadataColumnUtils = {}));
        })(utils = data.utils || (data.utils = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        var ConceptualSchema = (function () {
            function ConceptualSchema() {
            }
            ConceptualSchema.prototype.findProperty = function (entityName, propertyName) {
                var entity = this.entities.withName(entityName);
                if (!entity || _.isEmpty(entity.properties))
                    return;
                return entity.properties.withName(propertyName);
            };
            ConceptualSchema.prototype.findHierarchy = function (entityName, name) {
                var entity = this.entities.withName(entityName);
                if (!entity || _.isEmpty(entity.hierarchies))
                    return;
                return entity.hierarchies.withName(name);
            };
            ConceptualSchema.prototype.findHierarchyByVariation = function (variationEntityName, variationColumnName, variationName, hierarchyName) {
                var variationEntity = this.entities.withName(variationEntityName);
                if (!variationEntity || _.isEmpty(variationEntity.properties))
                    return;
                var variationProperty = variationEntity.properties.withName(variationColumnName);
                if (!variationProperty)
                    return;
                var variationColumn = variationProperty.column;
                if (!variationColumn || _.isEmpty(variationColumn.variations))
                    return;
                var variation = variationColumn.variations.withName(variationName);
                if (variation) {
                    var targetEntity = variation.navigationProperty ? variation.navigationProperty.targetEntity : variationEntity;
                    if (!targetEntity || _.isEmpty(targetEntity.hierarchies))
                        return;
                    return targetEntity.hierarchies.withName(hierarchyName);
                }
            };
            /**
            * Returns the first property of the entity whose kpi is tied to kpiProperty
            */
            ConceptualSchema.prototype.findPropertyWithKpi = function (entityName, kpiProperty) {
                debug.assertValue(kpiProperty, 'kpiProperty');
                var entity = this.entities.withName(entityName);
                if (!entity || _.isEmpty(entity.properties))
                    return;
                for (var _i = 0, _a = entity.properties; _i < _a.length; _i++) {
                    var prop = _a[_i];
                    if (prop &&
                        prop.measure &&
                        prop.measure.kpi &&
                        (prop.measure.kpi.status === kpiProperty || prop.measure.kpi.goal === kpiProperty))
                        return prop;
                }
                return;
            };
            return ConceptualSchema;
        })();
        data.ConceptualSchema = ConceptualSchema;
        // TODO: Remove this (replaced by ValueType)
        (function (ConceptualDataCategory) {
            ConceptualDataCategory[ConceptualDataCategory["None"] = 0] = "None";
            ConceptualDataCategory[ConceptualDataCategory["Address"] = 1] = "Address";
            ConceptualDataCategory[ConceptualDataCategory["City"] = 2] = "City";
            ConceptualDataCategory[ConceptualDataCategory["Company"] = 3] = "Company";
            ConceptualDataCategory[ConceptualDataCategory["Continent"] = 4] = "Continent";
            ConceptualDataCategory[ConceptualDataCategory["Country"] = 5] = "Country";
            ConceptualDataCategory[ConceptualDataCategory["County"] = 6] = "County";
            ConceptualDataCategory[ConceptualDataCategory["Date"] = 7] = "Date";
            ConceptualDataCategory[ConceptualDataCategory["Image"] = 8] = "Image";
            ConceptualDataCategory[ConceptualDataCategory["ImageUrl"] = 9] = "ImageUrl";
            ConceptualDataCategory[ConceptualDataCategory["Latitude"] = 10] = "Latitude";
            ConceptualDataCategory[ConceptualDataCategory["Longitude"] = 11] = "Longitude";
            ConceptualDataCategory[ConceptualDataCategory["Organization"] = 12] = "Organization";
            ConceptualDataCategory[ConceptualDataCategory["Place"] = 13] = "Place";
            ConceptualDataCategory[ConceptualDataCategory["PostalCode"] = 14] = "PostalCode";
            ConceptualDataCategory[ConceptualDataCategory["Product"] = 15] = "Product";
            ConceptualDataCategory[ConceptualDataCategory["StateOrProvince"] = 16] = "StateOrProvince";
            ConceptualDataCategory[ConceptualDataCategory["WebUrl"] = 17] = "WebUrl";
        })(data.ConceptualDataCategory || (data.ConceptualDataCategory = {}));
        var ConceptualDataCategory = data.ConceptualDataCategory;
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var StringExtensions = jsCommon.StringExtensions;
    var DefaultSQExprVisitor = powerbi.data.DefaultSQExprVisitor;
    var SQExprConverter = powerbi.data.SQExprConverter;
    var FieldExprPattern = powerbi.data.FieldExprPattern;
    var ScriptResultUtil;
    (function (ScriptResultUtil) {
        function findScriptResult(dataViewMappings) {
            if (dataViewMappings && dataViewMappings.length === 1) {
                return dataViewMappings[0].scriptResult;
            }
            return undefined;
        }
        ScriptResultUtil.findScriptResult = findScriptResult;
        function extractScriptResult(dataViewMappings) {
            var scriptResult = findScriptResult(dataViewMappings);
            if (scriptResult) {
                var objects = dataViewMappings[0].metadata.objects;
                var source = powerbi.DataViewObjects.getValue(objects, scriptResult.script.source);
                var provider = powerbi.DataViewObjects.getValue(objects, scriptResult.script.provider);
                return {
                    source: source,
                    provider: provider
                };
            }
            return undefined;
        }
        ScriptResultUtil.extractScriptResult = extractScriptResult;
        function extractScriptResultFromVisualConfig(dataViewMappings, objects) {
            var scriptResult = findScriptResult(dataViewMappings);
            if (scriptResult && objects) {
                var scriptSource = powerbi.data.DataViewObjectDefinitions.getValue(objects, scriptResult.script.source, null);
                var provider = powerbi.data.DataViewObjectDefinitions.getValue(objects, scriptResult.script.provider, null);
                return {
                    source: scriptSource ? scriptSource.value : null,
                    provider: provider ? provider.value : null
                };
            }
            return undefined;
        }
        ScriptResultUtil.extractScriptResultFromVisualConfig = extractScriptResultFromVisualConfig;
        function getScriptInput(projections, selects, schema) {
            var scriptInput = {
                VariableName: "dataset",
                Columns: []
            };
            // Go over all the projections, and create an input column according to the order
            // of the projections (including duplicate expressions)
            if (projections && selects && !_.isEmpty(selects)) {
                var scriptInputColumnNames = [];
                var scriptInputColumns = [];
                for (var role in projections) {
                    for (var _i = 0, _a = projections[role].all(); _i < _a.length; _i++) {
                        var projection = _a[_i];
                        var select = selects.withName(projection.queryRef);
                        if (select) {
                            var scriptInputColumn = {
                                QueryName: select.name,
                                Name: select.expr.accept(new ScriptInputColumnNameVisitor(schema))
                            };
                            scriptInputColumns.push(scriptInputColumn);
                            scriptInputColumnNames.push(scriptInputColumn.Name);
                        }
                    }
                }
                // Make sure the names of the columns are unique
                scriptInputColumnNames = StringExtensions.ensureUniqueNames(scriptInputColumnNames);
                // Update the names of the columns
                for (var i = 0; i < scriptInputColumnNames.length; i++) {
                    var scriptInputColumn = scriptInputColumns[i];
                    scriptInputColumn.Name = scriptInputColumnNames[i];
                }
                scriptInput.Columns = scriptInputColumns;
            }
            return scriptInput;
        }
        ScriptResultUtil.getScriptInput = getScriptInput;
        var ScriptInputColumnNameVisitor = (function (_super) {
            __extends(ScriptInputColumnNameVisitor, _super);
            function ScriptInputColumnNameVisitor(federatedSchema) {
                _super.call(this);
                this.federatedSchema = federatedSchema;
            }
            ScriptInputColumnNameVisitor.prototype.visitEntity = function (expr) {
                return expr.entity;
            };
            ScriptInputColumnNameVisitor.prototype.visitColumnRef = function (expr) {
                return ScriptInputColumnNameVisitor.getNameForProperty(expr, this.federatedSchema);
            };
            ScriptInputColumnNameVisitor.prototype.visitMeasureRef = function (expr) {
                return ScriptInputColumnNameVisitor.getNameForProperty(expr, this.federatedSchema);
            };
            ScriptInputColumnNameVisitor.prototype.visitAggr = function (expr) {
                return ScriptInputColumnNameVisitor.getNameForAggregate(expr, this.federatedSchema);
            };
            ScriptInputColumnNameVisitor.prototype.visitHierarchy = function (expr) {
                return ScriptInputColumnNameVisitor.getNameForHierarchy(expr, this.federatedSchema);
            };
            ScriptInputColumnNameVisitor.prototype.visitHierarchyLevel = function (expr) {
                return ScriptInputColumnNameVisitor.getNameForHierarchyLevel(expr, this.federatedSchema);
            };
            ScriptInputColumnNameVisitor.prototype.visitArithmetic = function (expr) {
                return powerbi.data.getArithmeticOperatorName(expr.operator) + '__' + expr.left.accept(this) + '_' + expr.right.accept(this) + '__';
            };
            ScriptInputColumnNameVisitor.getNameForProperty = function (expr, federatedSchema) {
                debug.assertValue(expr, 'expr');
                var fieldExpr = SQExprConverter.asFieldPattern(expr);
                var fieldExprItem = fieldExpr.column || fieldExpr.measure;
                var schema = federatedSchema.schema(fieldExprItem.schema), property = schema.findProperty(fieldExprItem.entity, fieldExprItem.name);
                if (property)
                    return property.name;
            };
            ScriptInputColumnNameVisitor.getNameForAggregate = function (expr, federatedSchema) {
                debug.assertValue(expr, 'expr');
                var field = SQExprConverter.asFieldPattern(expr);
                var fieldAggregate = field.columnAggr || field.entityAggr;
                var entity = federatedSchema
                    .schema(fieldAggregate.schema)
                    .entities
                    .withName(fieldAggregate.entity);
                if (!entity)
                    return;
                var backingProperty = entity.properties.withName(FieldExprPattern.getFieldExprName(field));
                return backingProperty.name;
            };
            ScriptInputColumnNameVisitor.getNameForHierarchy = function (expr, federatedScheam) {
                var fieldExpr = SQExprConverter.asFieldPattern(expr);
                var fieldExprItem = fieldExpr.hierarchy;
                if (fieldExprItem) {
                    var schema = federatedScheam.schema(fieldExprItem.schema), hierarchy = schema.findHierarchy(fieldExprItem.entity, fieldExprItem.name);
                    if (hierarchy)
                        return hierarchy.name;
                }
            };
            ScriptInputColumnNameVisitor.getNameForHierarchyLevel = function (expr, federatedScheam) {
                debug.assertValue(expr, 'expr');
                var field = SQExprConverter.asFieldPattern(expr);
                if (field.columnHierarchyLevelVariation) {
                    return ScriptInputColumnNameVisitor.getVariationLevelName(expr, federatedScheam);
                }
                /*Hierarchies are not supported yet*/
            };
            ScriptInputColumnNameVisitor.getVariationLevelName = function (expr, federatedSchema) {
                debug.assertValue(expr, 'expr');
                var field = SQExprConverter.asFieldPattern(expr);
                var fieldEntity = FieldExprPattern.toFieldExprEntityItemPattern(field);
                if (field.columnHierarchyLevelVariation) {
                    var prop = federatedSchema.schema(fieldEntity.schema).findProperty(fieldEntity.entity, field.columnHierarchyLevelVariation.source.name);
                    if (!prop)
                        return;
                    var variations = prop.column.variations;
                    for (var _i = 0; _i < variations.length; _i++) {
                        var variation = variations[_i];
                        if (variation.name === field.columnHierarchyLevelVariation.variationName)
                            for (var _a = 0, _b = variation.defaultHierarchy.levels; _a < _b.length; _a++) {
                                var level = _b[_a];
                                if (level.name === field.columnHierarchyLevelVariation.level.level)
                                    return level.column.name;
                            }
                    }
                }
            };
            return ScriptInputColumnNameVisitor;
        })(DefaultSQExprVisitor);
    })(ScriptResultUtil = powerbi.ScriptResultUtil || (powerbi.ScriptResultUtil = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        var segmentation;
        (function (segmentation) {
            var DataViewMerger;
            (function (DataViewMerger) {
                function mergeDataViews(source, segment) {
                    if (!powerbi.DataViewAnalysis.isMetadataEquivalent(source.metadata, segment.metadata)) {
                        debug.assertFail("Cannot merge data views with different metadata columns");
                    }
                    // The last segment is complete. We mark the source as complete.
                    if (!segment.metadata.segment)
                        delete source.metadata.segment;
                    if (source.table && segment.table)
                        mergeTables(source.table, segment.table);
                    if (source.categorical && segment.categorical)
                        mergeCategorical(source.categorical, segment.categorical);
                    // Tree cannot support subtotals hence we can get into situations
                    // where a node has no children in one segment and more than 1 child
                    // in another segment.
                    if (source.tree && segment.tree)
                        mergeTreeNodes(source.tree.root, segment.tree.root, true /*allowDifferentStructure*/);
                    if (source.matrix && segment.matrix)
                        mergeTreeNodes(source.matrix.rows.root, segment.matrix.rows.root, false /*allowDifferentStructure*/);
                }
                DataViewMerger.mergeDataViews = mergeDataViews;
                /** Note: Public for testability */
                function mergeTables(source, segment) {
                    debug.assertValue(source, 'source');
                    debug.assertValue(segment, 'segment');
                    if (segment.rows.length === 0)
                        return;
                    merge(source.rows, segment.rows, segment.lastMergeIndex + 1);
                }
                DataViewMerger.mergeTables = mergeTables;
                /**
                 * Merge categories values and identities
                 *
                 * Note: Public for testability
                 */
                function mergeCategorical(source, segment) {
                    debug.assertValue(source, 'source');
                    debug.assertValue(segment, 'segment');
                    // Merge categories values and identities
                    if (source.categories && segment.categories) {
                        var segmentCategoriesLength = segment.categories.length;
                        debug.assert(source.categories.length === segmentCategoriesLength, "Source and segment categories have different lengths.");
                        for (var categoryIndex = 0; categoryIndex < segmentCategoriesLength; categoryIndex++) {
                            var segmentCategory = segment.categories[categoryIndex];
                            var sourceCategory = source.categories[categoryIndex];
                            debug.assert(powerbi.DataViewAnalysis.areMetadataColumnsEquivalent(sourceCategory.source, segmentCategory.source), "Source and segment category have different sources.");
                            if (!sourceCategory.values && segmentCategory.values) {
                                sourceCategory.values = [];
                                debug.assert(!sourceCategory.identity, "Source category is missing values but has identities.");
                            }
                            if (segmentCategory.values) {
                                merge(sourceCategory.values, segmentCategory.values, segment.lastMergeIndex + 1);
                            }
                            if (!sourceCategory.identity && segmentCategory.identity) {
                                sourceCategory.identity = [];
                            }
                            if (segmentCategory.identity) {
                                merge(sourceCategory.identity, segmentCategory.identity, segment.lastMergeIndex + 1);
                            }
                        }
                    }
                    // Merge values for each value column
                    if (source.values && segment.values) {
                        var segmentValuesLength = segment.values.length;
                        debug.assert(source.values.length === segmentValuesLength, "Source and segment values have different lengths.");
                        for (var valueIndex = 0; valueIndex < segmentValuesLength; valueIndex++) {
                            var segmentValue = segment.values[valueIndex];
                            var sourceValue = source.values[valueIndex];
                            debug.assert(jsCommon.JsonComparer.equals(sourceValue.source, segmentValue.source), "Source and segment value have different sources.");
                            if (!sourceValue.values && segmentValue.values) {
                                sourceValue.values = [];
                            }
                            if (segmentValue.values) {
                                merge(sourceValue.values, segmentValue.values, segment.lastMergeIndex + 1);
                            }
                            if (segmentValue.highlights) {
                                merge(sourceValue.highlights, segmentValue.highlights, segment.lastMergeIndex + 1);
                            }
                        }
                    }
                }
                DataViewMerger.mergeCategorical = mergeCategorical;
                /**
                 * Merges the segment array starting at the specified index into the source array
                 * and returns the segment slice that wasn't merged.
                 * The segment array is spliced up to specified index in the process.
                 */
                function merge(source, segment, index) {
                    if (index >= segment.length)
                        return segment;
                    var result = [];
                    if (index !== undefined)
                        result = segment.splice(0, index);
                    Array.prototype.push.apply(source, segment);
                    return result;
                }
                /** Note: Public for testability */
                function mergeTreeNodes(sourceRoot, segmentRoot, allowDifferentStructure) {
                    debug.assertValue(sourceRoot, 'sourceRoot');
                    debug.assertValue(segmentRoot, 'segmentRoot');
                    if (!segmentRoot.children || segmentRoot.children.length === 0)
                        return;
                    if (allowDifferentStructure && (!sourceRoot.children || sourceRoot.children.length === 0)) {
                        sourceRoot.children = segmentRoot.children;
                        return;
                    }
                    debug.assert(sourceRoot.children && sourceRoot.children.length >= 0, "Source tree has different structure than segment.");
                    var firstAppendIndex = findFirstAppendIndex(segmentRoot.children);
                    var lastSourceChild = sourceRoot.children[sourceRoot.children.length - 1];
                    var mergedChildren = merge(sourceRoot.children, segmentRoot.children, firstAppendIndex);
                    if (mergedChildren.length > 0)
                        mergeTreeNodes(lastSourceChild, mergedChildren[mergedChildren.length - 1], allowDifferentStructure);
                }
                DataViewMerger.mergeTreeNodes = mergeTreeNodes;
                function findFirstAppendIndex(children) {
                    if (children.length === 0)
                        return 0;
                    var i = 0;
                    for (; i < children.length; i++) {
                        var childSegment = children[i];
                        if (!childSegment.isMerge)
                            break;
                    }
                    return i;
                }
            })(DataViewMerger = segmentation.DataViewMerger || (segmentation.DataViewMerger = {}));
        })(segmentation = data.segmentation || (data.segmentation = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        var ArrayExtensions = jsCommon.ArrayExtensions;
        /** Rewrites an expression tree, including all descendant nodes. */
        var SQExprRewriter = (function () {
            function SQExprRewriter() {
            }
            SQExprRewriter.prototype.visitColumnRef = function (expr) {
                var origArg = expr.source, rewrittenArg = origArg.accept(this);
                if (origArg === rewrittenArg)
                    return expr;
                return new data.SQColumnRefExpr(rewrittenArg, expr.ref);
            };
            SQExprRewriter.prototype.visitMeasureRef = function (expr) {
                var origArg = expr.source, rewrittenArg = origArg.accept(this);
                if (origArg === rewrittenArg)
                    return expr;
                return new data.SQMeasureRefExpr(rewrittenArg, expr.ref);
            };
            SQExprRewriter.prototype.visitAggr = function (expr) {
                var origArg = expr.arg, rewrittenArg = origArg.accept(this);
                if (origArg === rewrittenArg)
                    return expr;
                return new data.SQAggregationExpr(rewrittenArg, expr.func);
            };
            SQExprRewriter.prototype.visitHierarchy = function (expr) {
                var origArg = expr.arg, rewrittenArg = origArg.accept(this);
                if (origArg === rewrittenArg)
                    return expr;
                return new data.SQHierarchyExpr(rewrittenArg, expr.hierarchy);
            };
            SQExprRewriter.prototype.visitHierarchyLevel = function (expr) {
                var origArg = expr.arg, rewrittenArg = origArg.accept(this);
                if (origArg === rewrittenArg)
                    return expr;
                return new data.SQHierarchyLevelExpr(rewrittenArg, expr.level);
            };
            SQExprRewriter.prototype.visitPropertyVariationSource = function (expr) {
                var origArg = expr.arg, rewrittenArg = origArg.accept(this);
                if (origArg === rewrittenArg)
                    return expr;
                return new data.SQPropertyVariationSourceExpr(rewrittenArg, expr.name, expr.property);
            };
            SQExprRewriter.prototype.visitEntity = function (expr) {
                return expr;
            };
            SQExprRewriter.prototype.visitAnd = function (orig) {
                var origLeft = orig.left, rewrittenLeft = origLeft.accept(this), origRight = orig.right, rewrittenRight = origRight.accept(this);
                if (origLeft === rewrittenLeft && origRight === rewrittenRight)
                    return orig;
                return new data.SQAndExpr(rewrittenLeft, rewrittenRight);
            };
            SQExprRewriter.prototype.visitBetween = function (orig) {
                var origArg = orig.arg, rewrittenArg = origArg.accept(this), origLower = orig.lower, rewrittenLower = origLower.accept(this), origUpper = orig.upper, rewrittenUpper = origUpper.accept(this);
                if (origArg === rewrittenArg && origLower === rewrittenLower && origUpper === rewrittenUpper)
                    return orig;
                return new data.SQBetweenExpr(rewrittenArg, rewrittenLower, rewrittenUpper);
            };
            SQExprRewriter.prototype.visitIn = function (orig) {
                var origArgs = orig.args, rewrittenArgs = this.rewriteAll(origArgs), origValues = orig.values, rewrittenValues;
                for (var i = 0, len = origValues.length; i < len; i++) {
                    var origValueTuple = origValues[i], rewrittenValueTuple = this.rewriteAll(origValueTuple);
                    if (origValueTuple !== rewrittenValueTuple && !rewrittenValues)
                        rewrittenValues = ArrayExtensions.take(origValues, i);
                    if (rewrittenValues)
                        rewrittenValues.push(rewrittenValueTuple);
                }
                if (origArgs === rewrittenArgs && !rewrittenValues)
                    return orig;
                return new data.SQInExpr(rewrittenArgs, rewrittenValues || origValues);
            };
            SQExprRewriter.prototype.rewriteAll = function (origExprs) {
                debug.assertValue(origExprs, 'origExprs');
                var rewrittenResult;
                for (var i = 0, len = origExprs.length; i < len; i++) {
                    var origExpr = origExprs[i], rewrittenExpr = origExpr.accept(this);
                    if (origExpr !== rewrittenExpr && !rewrittenResult)
                        rewrittenResult = ArrayExtensions.take(origExprs, i);
                    if (rewrittenResult)
                        rewrittenResult.push(rewrittenExpr);
                }
                return rewrittenResult || origExprs;
            };
            SQExprRewriter.prototype.visitOr = function (orig) {
                var origLeft = orig.left, rewrittenLeft = origLeft.accept(this), origRight = orig.right, rewrittenRight = origRight.accept(this);
                if (origLeft === rewrittenLeft && origRight === rewrittenRight)
                    return orig;
                return new data.SQOrExpr(rewrittenLeft, rewrittenRight);
            };
            SQExprRewriter.prototype.visitCompare = function (orig) {
                var origLeft = orig.left, rewrittenLeft = origLeft.accept(this), origRight = orig.right, rewrittenRight = origRight.accept(this);
                if (origLeft === rewrittenLeft && origRight === rewrittenRight)
                    return orig;
                return new data.SQCompareExpr(orig.comparison, rewrittenLeft, rewrittenRight);
            };
            SQExprRewriter.prototype.visitContains = function (orig) {
                var origLeft = orig.left, rewrittenLeft = origLeft.accept(this), origRight = orig.right, rewrittenRight = origRight.accept(this);
                if (origLeft === rewrittenLeft && origRight === rewrittenRight)
                    return orig;
                return new data.SQContainsExpr(rewrittenLeft, rewrittenRight);
            };
            SQExprRewriter.prototype.visitExists = function (orig) {
                var origArg = orig.arg, rewrittenArg = origArg.accept(this);
                if (origArg === rewrittenArg)
                    return orig;
                return new data.SQExistsExpr(rewrittenArg);
            };
            SQExprRewriter.prototype.visitNot = function (orig) {
                var origArg = orig.arg, rewrittenArg = origArg.accept(this);
                if (origArg === rewrittenArg)
                    return orig;
                return new data.SQNotExpr(rewrittenArg);
            };
            SQExprRewriter.prototype.visitStartsWith = function (orig) {
                var origLeft = orig.left, rewrittenLeft = origLeft.accept(this), origRight = orig.right, rewrittenRight = origRight.accept(this);
                if (origLeft === rewrittenLeft && origRight === rewrittenRight)
                    return orig;
                return new data.SQStartsWithExpr(rewrittenLeft, rewrittenRight);
            };
            SQExprRewriter.prototype.visitConstant = function (expr) {
                return expr;
            };
            SQExprRewriter.prototype.visitDateSpan = function (orig) {
                var origArg = orig.arg, rewrittenArg = origArg.accept(this);
                if (origArg === rewrittenArg)
                    return orig;
                return new data.SQDateSpanExpr(orig.unit, rewrittenArg);
            };
            SQExprRewriter.prototype.visitDateAdd = function (orig) {
                var origArg = orig.arg, rewrittenArg = origArg.accept(this);
                if (origArg === rewrittenArg)
                    return orig;
                return new data.SQDateAddExpr(orig.unit, orig.amount, rewrittenArg);
            };
            SQExprRewriter.prototype.visitNow = function (orig) {
                return orig;
            };
            SQExprRewriter.prototype.visitDefaultValue = function (orig) {
                return orig;
            };
            SQExprRewriter.prototype.visitAnyValue = function (orig) {
                return orig;
            };
            SQExprRewriter.prototype.visitArithmetic = function (orig) {
                var origLeft = orig.left, rewrittenLeft = origLeft.accept(this), origRight = orig.right, rewrittenRight = origRight.accept(this);
                if (origLeft === rewrittenLeft && origRight === rewrittenRight)
                    return orig;
                return new data.SQArithmeticExpr(rewrittenLeft, rewrittenRight, orig.operator);
            };
            SQExprRewriter.prototype.visitFillRule = function (orig) {
                var origInput = orig.input, rewrittenInput = origInput.accept(this);
                var origRule = orig.rule;
                var origGradient2 = origRule.linearGradient2, rewrittenGradient2 = origGradient2;
                if (origGradient2) {
                    rewrittenGradient2 = this.visitLinearGradient2(origGradient2);
                }
                var origGradient3 = origRule.linearGradient3, rewrittenGradient3 = origGradient3;
                if (origGradient3) {
                    rewrittenGradient3 = this.visitLinearGradient3(origGradient3);
                }
                if (origInput !== rewrittenInput ||
                    origGradient2 !== rewrittenGradient2 ||
                    origGradient3 !== rewrittenGradient3) {
                    var rewrittenRule = {};
                    if (rewrittenGradient2)
                        rewrittenRule.linearGradient2 = rewrittenGradient2;
                    if (rewrittenGradient3)
                        rewrittenRule.linearGradient3 = rewrittenGradient3;
                    return new data.SQFillRuleExpr(rewrittenInput, rewrittenRule);
                }
                return orig;
            };
            SQExprRewriter.prototype.visitLinearGradient2 = function (origGradient2) {
                debug.assertValue(origGradient2, 'origGradient2');
                var origMin = origGradient2.min, rewrittenMin = this.visitFillRuleStop(origMin), origMax = origGradient2.max, rewrittenMax = this.visitFillRuleStop(origMax);
                if (origMin !== rewrittenMin || origMax !== rewrittenMax) {
                    return {
                        min: rewrittenMin,
                        max: rewrittenMax,
                    };
                }
                return origGradient2;
            };
            SQExprRewriter.prototype.visitLinearGradient3 = function (origGradient3) {
                debug.assertValue(origGradient3, 'origGradient3');
                var origMin = origGradient3.min, rewrittenMin = this.visitFillRuleStop(origMin), origMid = origGradient3.mid, rewrittenMid = this.visitFillRuleStop(origMid), origMax = origGradient3.max, rewrittenMax = this.visitFillRuleStop(origMax);
                if (origMin !== rewrittenMin || origMid !== rewrittenMid || origMax !== rewrittenMax) {
                    return {
                        min: rewrittenMin,
                        mid: rewrittenMid,
                        max: rewrittenMax,
                    };
                }
                return origGradient3;
            };
            SQExprRewriter.prototype.visitFillRuleStop = function (stop) {
                debug.assertValue(stop, 'stop');
                var origColor = stop.color, rewrittenColor = stop.color.accept(this);
                var origValue = stop.value, rewrittenValue = origValue;
                if (origValue)
                    rewrittenValue = origValue.accept(this);
                if (origColor !== rewrittenColor || origValue !== rewrittenValue) {
                    var rewrittenStop = {
                        color: rewrittenColor
                    };
                    if (rewrittenValue)
                        rewrittenStop.value = rewrittenValue;
                    return rewrittenStop;
                }
                return stop;
            };
            return SQExprRewriter;
        })();
        data.SQExprRewriter = SQExprRewriter;
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        /** Responsible for writing equality comparisons against a field to an SQInExpr. */
        var EqualsToInRewriter;
        (function (EqualsToInRewriter) {
            function run(expr) {
                debug.assertValue(expr, 'expr');
                return expr.accept(new Rewriter());
            }
            EqualsToInRewriter.run = run;
            var Rewriter = (function (_super) {
                __extends(Rewriter, _super);
                function Rewriter() {
                    _super.call(this);
                }
                Rewriter.prototype.visitCompare = function (expr) {
                    if (expr.comparison !== data.QueryComparisonKind.Equal)
                        return this.visitUnsupported(expr);
                    if (!this.isSupported(expr.left) || !this.isSupported(expr.right))
                        return this.visitUnsupported(expr);
                    var leftIsComparand = this.isComparand(expr.left);
                    var rightIsComparand = this.isComparand(expr.right);
                    if (leftIsComparand === rightIsComparand)
                        return this.visitUnsupported(expr);
                    var operand = leftIsComparand
                        ? expr.left
                        : expr.right;
                    var value = leftIsComparand
                        ? expr.right
                        : expr.left;
                    var current = this.current;
                    if (!current) {
                        return data.SQExprBuilder.inExpr([operand], [[value]]);
                    }
                    current.add(operand, value);
                    return expr;
                };
                Rewriter.prototype.visitOr = function (expr) {
                    if (!this.isSupported(expr.left) || !this.isSupported(expr.right))
                        return this.visitUnsupported(expr);
                    var current;
                    if (!this.current) {
                        current = this.current = new InBuilder();
                    }
                    expr.left.accept(this);
                    expr.right.accept(this);
                    if (current) {
                        this.current = null;
                        return current.complete() || expr;
                    }
                    return expr;
                };
                Rewriter.prototype.visitAnd = function (expr) {
                    if (!this.isSupported(expr.left) || !this.isSupported(expr.right))
                        return this.visitUnsupported(expr);
                    var current = this.current;
                    if (current) {
                        // NOTE: Composite keys are not supported by this algorithm.
                        current.cancel();
                        return expr;
                    }
                    return _super.prototype.visitAnd.call(this, expr);
                };
                Rewriter.prototype.visitUnsupported = function (expr) {
                    var current = this.current;
                    if (current)
                        current.cancel();
                    return expr;
                };
                Rewriter.prototype.isSupported = function (expr) {
                    debug.assertValue(expr, 'expr');
                    return expr instanceof data.SQCompareExpr
                        || expr instanceof data.SQColumnRefExpr
                        || expr instanceof data.SQConstantExpr
                        || expr instanceof data.SQHierarchyLevelExpr
                        || expr instanceof data.SQOrExpr
                        || expr instanceof data.SQAndExpr;
                };
                Rewriter.prototype.isComparand = function (expr) {
                    return expr instanceof data.SQColumnRefExpr
                        || expr instanceof data.SQHierarchyLevelExpr;
                };
                return Rewriter;
            })(data.SQExprRewriter);
            var InBuilder = (function () {
                function InBuilder() {
                }
                InBuilder.prototype.add = function (operand, value) {
                    debug.assertValue(operand, 'operand');
                    debug.assertValue(value, 'value');
                    if (this.cancelled)
                        return;
                    if (this.operand && !data.SQExpr.equals(operand, this.operand)) {
                        this.cancel();
                        return;
                    }
                    this.operand = operand;
                    var values = this.values;
                    if (!values)
                        values = this.values = [];
                    values.push(value);
                };
                InBuilder.prototype.cancel = function () {
                    this.cancelled = true;
                };
                InBuilder.prototype.complete = function () {
                    if (this.cancelled || !this.operand)
                        return;
                    return data.SQExprBuilder.inExpr([this.operand], _.map(this.values, function (v) { return [v]; }));
                };
                return InBuilder;
            })();
        })(EqualsToInRewriter = data.EqualsToInRewriter || (data.EqualsToInRewriter = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        var SQExprConverter;
        (function (SQExprConverter) {
            function asScopeIdsContainer(filter, fieldSQExprs) {
                debug.assertValue(filter, 'filter');
                debug.assertValue(fieldSQExprs, 'fieldSQExprs');
                debug.assert(fieldSQExprs.length > 0, 'There should be at least 1 field expression.');
                var filterItems = filter.conditions();
                debug.assert(filterItems.length === 1, 'There should be exactly 1 filter expression.');
                var filterItem = filterItems[0];
                if (filterItem) {
                    var visitor = new FilterScopeIdsCollectorVisitor(fieldSQExprs);
                    if (filterItem.accept(visitor))
                        return visitor.getResult();
                }
            }
            SQExprConverter.asScopeIdsContainer = asScopeIdsContainer;
            /** Gets a comparand value from the given DataViewScopeIdentity. */
            function getFirstComparandValue(identity) {
                debug.assertValue(identity, 'identity');
                var comparandExpr = identity.expr.accept(new FindComparandVisitor());
                if (comparandExpr)
                    return comparandExpr.value;
            }
            SQExprConverter.getFirstComparandValue = getFirstComparandValue;
        })(SQExprConverter = data.SQExprConverter || (data.SQExprConverter = {}));
        /** Collect filter values from simple semantic filter that is similar to 'is any of' or 'is not any of', getResult() returns a collection of scopeIds.**/
        var FilterScopeIdsCollectorVisitor = (function (_super) {
            __extends(FilterScopeIdsCollectorVisitor, _super);
            function FilterScopeIdsCollectorVisitor(fieldSQExprs) {
                _super.call(this);
                this.isRoot = true;
                this.isNot = false;
                this.keyExprsCount = null;
                this.valueExprs = [];
                // Need to drop the entitylet before create the scopeIdentity. The ScopeIdentity created on the client is used to
                // compare the ScopeIdentity came from the server. But server doesn't have the entity variable concept, so we will
                // need to drop it in order to use JsonComparer.
                this.fieldExprs = [];
                for (var _i = 0; _i < fieldSQExprs.length; _i++) {
                    var field = fieldSQExprs[_i];
                    this.fieldExprs.push(data.SQExprBuilder.removeEntityVariables(field));
                }
            }
            FilterScopeIdsCollectorVisitor.prototype.getResult = function () {
                debug.assert(this.fieldExprs.length > 0, 'fieldExprs has at least one fieldExpr');
                var valueExprs = this.valueExprs, scopeIds = [];
                var valueCount = this.keyExprsCount || 1;
                for (var startIndex = 0, endIndex = valueCount, len = valueExprs.length; startIndex < len && endIndex <= len;) {
                    var values = valueExprs.slice(startIndex, endIndex);
                    var scopeId = FilterScopeIdsCollectorVisitor.getScopeIdentity(this.fieldExprs, values);
                    if (!jsCommon.ArrayExtensions.isInArray(scopeIds, scopeId, powerbi.DataViewScopeIdentity.equals))
                        scopeIds.push(scopeId);
                    startIndex += valueCount;
                    endIndex += valueCount;
                }
                return {
                    isNot: this.isNot,
                    scopeIds: scopeIds,
                };
            };
            FilterScopeIdsCollectorVisitor.getScopeIdentity = function (fieldExprs, valueExprs) {
                debug.assert(valueExprs.length > 0, 'valueExprs has at least one valueExpr');
                debug.assert(valueExprs.length === fieldExprs.length, 'fieldExpr and valueExpr count should match');
                var compoundSQExpr;
                for (var i = 0, len = fieldExprs.length; i < len; i++) {
                    var equalsExpr = data.SQExprBuilder.equal(fieldExprs[i], valueExprs[i]);
                    if (!compoundSQExpr)
                        compoundSQExpr = equalsExpr;
                    else
                        compoundSQExpr = data.SQExprBuilder.and(compoundSQExpr, equalsExpr);
                }
                return data.createDataViewScopeIdentity(compoundSQExpr);
            };
            FilterScopeIdsCollectorVisitor.prototype.visitOr = function (expr) {
                if (this.keyExprsCount !== null)
                    return this.unsupportedSQExpr();
                this.isRoot = false;
                return expr.left.accept(this) && expr.right.accept(this);
            };
            FilterScopeIdsCollectorVisitor.prototype.visitNot = function (expr) {
                if (!this.isRoot)
                    return this.unsupportedSQExpr();
                this.isNot = true;
                return expr.arg.accept(this);
            };
            FilterScopeIdsCollectorVisitor.prototype.visitConstant = function (expr) {
                if (this.isRoot && expr.type.primitiveType === powerbi.PrimitiveType.Null)
                    return this.unsupportedSQExpr();
                this.valueExprs.push(expr);
                return true;
            };
            FilterScopeIdsCollectorVisitor.prototype.visitCompare = function (expr) {
                if (this.keyExprsCount !== null)
                    return this.unsupportedSQExpr();
                this.isRoot = false;
                if (expr.comparison !== data.QueryComparisonKind.Equal)
                    return this.unsupportedSQExpr();
                return expr.left.accept(this) && expr.right.accept(this);
            };
            FilterScopeIdsCollectorVisitor.prototype.visitIn = function (expr) {
                this.keyExprsCount = 0;
                var result;
                this.isRoot = false;
                for (var _i = 0, _a = expr.args; _i < _a.length; _i++) {
                    var arg = _a[_i];
                    result = arg.accept(this);
                    if (!result)
                        return this.unsupportedSQExpr();
                    this.keyExprsCount++;
                }
                if (this.keyExprsCount !== this.fieldExprs.length)
                    return this.unsupportedSQExpr();
                var values = expr.values;
                for (var _b = 0; _b < values.length; _b++) {
                    var valueTuple = values[_b];
                    var jlen = valueTuple.length;
                    debug.assert(jlen === this.keyExprsCount, "keys count and values count should match");
                    for (var _c = 0; _c < valueTuple.length; _c++) {
                        var value = valueTuple[_c];
                        result = value.accept(this);
                        if (!result)
                            return this.unsupportedSQExpr();
                    }
                }
                return result;
            };
            FilterScopeIdsCollectorVisitor.prototype.visitColumnRef = function (expr) {
                if (this.isRoot)
                    return this.unsupportedSQExpr();
                var fixedExpr = data.SQExprBuilder.removeEntityVariables(expr);
                if (this.keyExprsCount !== null)
                    return data.SQExpr.equals(this.fieldExprs[this.keyExprsCount], fixedExpr);
                return data.SQExpr.equals(this.fieldExprs[0], fixedExpr);
            };
            FilterScopeIdsCollectorVisitor.prototype.visitDefaultValue = function (expr) {
                if (this.isRoot || this.keyExprsCount !== null)
                    return this.unsupportedSQExpr();
                this.valueExprs.push(expr);
                return true;
            };
            FilterScopeIdsCollectorVisitor.prototype.visitAnyValue = function (expr) {
                if (this.isRoot || this.keyExprsCount !== null)
                    return this.unsupportedSQExpr();
                this.valueExprs.push(expr);
                return true;
            };
            FilterScopeIdsCollectorVisitor.prototype.visitDefault = function (expr) {
                return this.unsupportedSQExpr();
            };
            FilterScopeIdsCollectorVisitor.prototype.unsupportedSQExpr = function () {
                return false;
            };
            return FilterScopeIdsCollectorVisitor;
        })(data.DefaultSQExprVisitor);
        var FindComparandVisitor = (function (_super) {
            __extends(FindComparandVisitor, _super);
            function FindComparandVisitor() {
                _super.apply(this, arguments);
            }
            FindComparandVisitor.prototype.visitAnd = function (expr) {
                return expr.left.accept(this) || expr.right.accept(this);
            };
            FindComparandVisitor.prototype.visitCompare = function (expr) {
                if (expr.comparison === data.QueryComparisonKind.Equal) {
                    if (expr.right instanceof data.SQConstantExpr)
                        return expr.right;
                    if (expr.left instanceof data.SQConstantExpr)
                        return expr.left;
                }
            };
            return FindComparandVisitor;
        })(data.DefaultSQExprVisitor);
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        var ArrayExtensions = jsCommon.ArrayExtensions;
        /** Recognizes DataViewScopeIdentity expression trees to extract comparison keys. */
        var ScopeIdentityExtractor;
        (function (ScopeIdentityExtractor) {
            function getKeys(expr) {
                var extractor = new ScopeIdExtractorImpl();
                expr.accept(extractor);
                if (extractor.malformed)
                    return null;
                return ArrayExtensions.emptyToNull(extractor.keys);
            }
            ScopeIdentityExtractor.getKeys = getKeys;
            function getInExpr(expr) {
                var extractor = new ScopeIdExtractorImpl();
                expr.accept(extractor);
                if (extractor.malformed)
                    return;
                var keys = ArrayExtensions.emptyToNull(extractor.keys);
                var keyValues = ArrayExtensions.emptyToNull(extractor.values);
                if (keys && keyValues)
                    return data.SQExprBuilder.inExpr(keys, [keyValues]);
            }
            ScopeIdentityExtractor.getInExpr = getInExpr;
            /**
             * Recognizes expressions of the form:
             * 1) Equals(ColRef, Constant)
             * 2) And(Equals(ColRef1, Constant1), Equals(ColRef2, Constant2))
             * or And(And(Equals(ColRef1, Constant1), Equals(ColRef2, Constant2)), Equals(ColRef3, Constant3)) etc..
             */
            var ScopeIdExtractorImpl = (function (_super) {
                __extends(ScopeIdExtractorImpl, _super);
                function ScopeIdExtractorImpl() {
                    _super.apply(this, arguments);
                    this.keys = [];
                    this.values = [];
                }
                ScopeIdExtractorImpl.prototype.visitAnd = function (expr) {
                    expr.left.accept(this);
                    expr.right.accept(this);
                };
                ScopeIdExtractorImpl.prototype.visitCompare = function (expr) {
                    if (expr.comparison !== data.QueryComparisonKind.Equal) {
                        this.visitDefault(expr);
                        return;
                    }
                    debug.assert(expr.left instanceof data.SQExpr && expr.right instanceof data.SQConstantExpr, 'invalid compare expr operands');
                    expr.left.accept(this);
                    expr.right.accept(this);
                };
                ScopeIdExtractorImpl.prototype.visitColumnRef = function (expr) {
                    this.keys.push(expr);
                };
                ScopeIdExtractorImpl.prototype.visitHierarchyLevel = function (expr) {
                    this.keys.push(expr);
                };
                ScopeIdExtractorImpl.prototype.visitConstant = function (expr) {
                    this.values.push(expr);
                };
                ScopeIdExtractorImpl.prototype.visitArithmetic = function (expr) {
                    this.keys.push(expr);
                };
                ScopeIdExtractorImpl.prototype.visitDefault = function (expr) {
                    this.malformed = true;
                };
                return ScopeIdExtractorImpl;
            })(data.DefaultSQExprVisitor);
        })(ScopeIdentityExtractor = data.ScopeIdentityExtractor || (data.ScopeIdentityExtractor = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        var PrimitiveValueEncoding;
        (function (PrimitiveValueEncoding) {
            var SingleQuoteRegex = /'/g;
            function decimal(value) {
                debug.assertValue(value, 'value');
                return value + 'M';
            }
            PrimitiveValueEncoding.decimal = decimal;
            function double(value) {
                debug.assertValue(value, 'value');
                return value + 'D';
            }
            PrimitiveValueEncoding.double = double;
            function integer(value) {
                debug.assertValue(value, 'value');
                return value + 'L';
            }
            PrimitiveValueEncoding.integer = integer;
            function dateTime(value) {
                debug.assertValue(value, 'value');
                // Currently, server doesn't support timezone. All date time data on the server don't have time zone information.
                // So, when we construct a dateTime object on the client, we will need to ignor user's time zone and force it to be UTC time.
                // When we subtract the timeZone offset, the date time object will remain the same value as you entered but dropped the local timeZone.
                var date = new Date(value.getTime() - (value.getTimezoneOffset() * 60000));
                var dateTimeString = date.toISOString();
                // If it ends with Z, we want to get rid of it, because with trailing Z, it will assume the dateTime is UTC, but we don't want any timeZone information, so
                // we will drop it.
                // Also, we need to add Prefix and Suffix to match the dsr value format for dateTime object.
                if (jsCommon.StringExtensions.endsWith(dateTimeString, 'Z'))
                    dateTimeString = dateTimeString.substr(0, dateTimeString.length - 1);
                return "datetime'" + dateTimeString + "'";
            }
            PrimitiveValueEncoding.dateTime = dateTime;
            function text(value) {
                debug.assertValue(value, 'value');
                return "'" + value.replace(SingleQuoteRegex, "''") + "'";
            }
            PrimitiveValueEncoding.text = text;
            function nullEncoding() {
                return 'null';
            }
            PrimitiveValueEncoding.nullEncoding = nullEncoding;
            function boolean(value) {
                return value ? 'true' : 'false';
            }
            PrimitiveValueEncoding.boolean = boolean;
        })(PrimitiveValueEncoding = data.PrimitiveValueEncoding || (data.PrimitiveValueEncoding = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        var SQHierarchyExprUtils;
        (function (SQHierarchyExprUtils) {
            function getConceptualHierarchyLevelFromExpr(conceptualSchema, fieldExpr) {
                var fieldExprItem = data.FieldExprPattern.toFieldExprEntityItemPattern(fieldExpr);
                var hierarchyLevel = fieldExpr.hierarchyLevel || fieldExpr.hierarchyLevelAggr;
                if (hierarchyLevel)
                    return SQHierarchyExprUtils.getConceptualHierarchyLevel(conceptualSchema, fieldExprItem.schema, fieldExprItem.entity, hierarchyLevel.name, hierarchyLevel.level);
            }
            SQHierarchyExprUtils.getConceptualHierarchyLevelFromExpr = getConceptualHierarchyLevelFromExpr;
            function getConceptualHierarchyLevel(conceptualSchema, schemaName, entity, hierarchy, hierarchyLevel) {
                var schema = conceptualSchema.schema(schemaName);
                var conceptualHierarchy = schema.findHierarchy(entity, hierarchy);
                if (conceptualHierarchy) {
                    return conceptualHierarchy.levels.withName(hierarchyLevel);
                }
            }
            SQHierarchyExprUtils.getConceptualHierarchyLevel = getConceptualHierarchyLevel;
            function getConceptualHierarchy(sqExpr, federatedSchema) {
                if (sqExpr instanceof data.SQHierarchyExpr) {
                    var hierarchy = sqExpr;
                    if (sqExpr.arg instanceof data.SQEntityExpr) {
                        var entityExpr = sqExpr.arg;
                        return federatedSchema
                            .schema(entityExpr.schema)
                            .findHierarchy(entityExpr.entity, hierarchy.hierarchy);
                    }
                    else if (sqExpr.arg instanceof data.SQPropertyVariationSourceExpr) {
                        var variationExpr = sqExpr.arg;
                        var sourceEntityExpr = variationExpr.arg;
                        return federatedSchema
                            .schema(sourceEntityExpr.schema)
                            .findHierarchyByVariation(sourceEntityExpr.entity, variationExpr.property, variationExpr.name, hierarchy.hierarchy);
                    }
                }
            }
            SQHierarchyExprUtils.getConceptualHierarchy = getConceptualHierarchy;
            function expandExpr(schema, expr, suppressHierarchyLevelExpansion) {
                return SQExprHierarchyToHierarchyLevelConverter.convert(expr, schema) ||
                    SQExprVariationConverter.expand(expr, schema) ||
                    // If we are calling expandExpr from suppressHierarchyLevelExpansion, we should not expand the hierarchylevels
                    (!suppressHierarchyLevelExpansion && SQExprHierarchyLevelConverter.expand(expr, schema)) ||
                    expr;
            }
            SQHierarchyExprUtils.expandExpr = expandExpr;
            function isHierarchyOrVariation(schema, expr) {
                if (expr instanceof data.SQHierarchyExpr || expr instanceof data.SQHierarchyLevelExpr)
                    return true;
                var conceptualProperty = expr.getConceptualProperty(schema);
                if (conceptualProperty) {
                    var column = conceptualProperty.column;
                    if (column && column.variations && column.variations.length > 0)
                        return true;
                }
                return false;
            }
            SQHierarchyExprUtils.isHierarchyOrVariation = isHierarchyOrVariation;
            // Return column reference expression for hierarchy level expression.
            function getSourceVariationExpr(hierarchyLevelExpr) {
                var fieldExprPattern = data.SQExprConverter.asFieldPattern(hierarchyLevelExpr);
                if (fieldExprPattern.columnHierarchyLevelVariation) {
                    var entity = data.SQExprBuilder.entity(fieldExprPattern.columnHierarchyLevelVariation.source.schema, fieldExprPattern.columnHierarchyLevelVariation.source.entity);
                    return data.SQExprBuilder.columnRef(entity, fieldExprPattern.columnHierarchyLevelVariation.source.name);
                }
            }
            SQHierarchyExprUtils.getSourceVariationExpr = getSourceVariationExpr;
            // Return hierarchy expression for hierarchy level expression.
            function getSourceHierarchy(hierarchyLevelExpr) {
                var fieldExprPattern = data.SQExprConverter.asFieldPattern(hierarchyLevelExpr);
                var hierarchyLevel = fieldExprPattern.hierarchyLevel;
                if (hierarchyLevel) {
                    var entity = data.SQExprBuilder.entity(hierarchyLevel.schema, hierarchyLevel.entity, hierarchyLevel.entityVar);
                    return data.SQExprBuilder.hierarchy(entity, hierarchyLevel.name);
                }
            }
            SQHierarchyExprUtils.getSourceHierarchy = getSourceHierarchy;
            function getHierarchySourceAsVariationSource(hierarchyLevelExpr) {
                // Make sure the hierarchy level source is a hierarchy
                if (!(hierarchyLevelExpr.arg instanceof data.SQHierarchyExpr))
                    return;
                // Check if the hierarchy source if a variation
                var hierarchyRef = hierarchyLevelExpr.arg;
                if (hierarchyRef.arg instanceof data.SQPropertyVariationSourceExpr)
                    return hierarchyRef.arg;
            }
            SQHierarchyExprUtils.getHierarchySourceAsVariationSource = getHierarchySourceAsVariationSource;
            /**
            * Returns true if firstExpr and secondExpr are levels in the same hierarchy and firstExpr is before secondExpr in allLevels.
            */
            function areHierarchyLevelsOrdered(allLevels, firstExpr, secondExpr) {
                // Validate that both items hierarchy levels
                if (!(firstExpr instanceof data.SQHierarchyLevelExpr) || !(secondExpr instanceof data.SQHierarchyLevelExpr))
                    return false;
                var firstLevel = firstExpr;
                var secondLevel = secondExpr;
                // Validate that both items belong to the same hierarchy
                if (!data.SQExpr.equals(firstLevel.arg, secondLevel.arg))
                    return false;
                // Determine the order
                var firstIndex = data.SQExprUtils.indexOfExpr(allLevels, firstLevel);
                var secondIndex = data.SQExprUtils.indexOfExpr(allLevels, secondLevel);
                return firstIndex !== -1 && secondIndex !== -1 && firstIndex < secondIndex;
            }
            SQHierarchyExprUtils.areHierarchyLevelsOrdered = areHierarchyLevelsOrdered;
            /**
             * Given an ordered set of levels and an ordered subset of those levels, returns the index where
             * expr should be inserted into the subset to maintain the correct order.
             */
            function getInsertionIndex(allLevels, orderedSubsetOfLevels, expr) {
                var insertIndex = 0;
                // Loop through the supplied levels until the insertion would no longer be in the correct order
                while (insertIndex < orderedSubsetOfLevels.length &&
                    areHierarchyLevelsOrdered(allLevels, orderedSubsetOfLevels[insertIndex], expr)) {
                    insertIndex++;
                }
                return insertIndex;
            }
            SQHierarchyExprUtils.getInsertionIndex = getInsertionIndex;
        })(SQHierarchyExprUtils = data.SQHierarchyExprUtils || (data.SQHierarchyExprUtils = {}));
        var SQExprHierarchyToHierarchyLevelConverter;
        (function (SQExprHierarchyToHierarchyLevelConverter) {
            function convert(sqExpr, federatedSchema) {
                debug.assertValue(sqExpr, 'sqExpr');
                debug.assertValue(federatedSchema, 'federatedSchema');
                if (sqExpr instanceof data.SQHierarchyExpr) {
                    var hierarchyExpr = sqExpr;
                    var conceptualHierarchy = SQHierarchyExprUtils.getConceptualHierarchy(hierarchyExpr, federatedSchema);
                    if (conceptualHierarchy)
                        return _.map(conceptualHierarchy.levels, function (hierarchyLevel) { return data.SQExprBuilder.hierarchyLevel(sqExpr, hierarchyLevel.name); });
                }
            }
            SQExprHierarchyToHierarchyLevelConverter.convert = convert;
        })(SQExprHierarchyToHierarchyLevelConverter = data.SQExprHierarchyToHierarchyLevelConverter || (data.SQExprHierarchyToHierarchyLevelConverter = {}));
        var SQExprHierarchyLevelConverter;
        (function (SQExprHierarchyLevelConverter) {
            function expand(expr, schema) {
                debug.assertValue(expr, 'sqExpr');
                debug.assertValue(schema, 'federatedSchema');
                var exprs = [];
                if (expr instanceof data.SQHierarchyLevelExpr) {
                    var fieldExpr = data.SQExprConverter.asFieldPattern(expr);
                    if (fieldExpr.hierarchyLevel) {
                        var fieldExprItem = data.FieldExprPattern.toFieldExprEntityItemPattern(fieldExpr);
                        var hierarchy = schema
                            .schema(fieldExprItem.schema)
                            .findHierarchy(fieldExprItem.entity, fieldExpr.hierarchyLevel.name);
                        if (hierarchy) {
                            var hierarchyLevels = hierarchy.levels;
                            for (var _i = 0; _i < hierarchyLevels.length; _i++) {
                                var hierarchyLevel = hierarchyLevels[_i];
                                if (hierarchyLevel.name === fieldExpr.hierarchyLevel.level) {
                                    exprs.push(expr);
                                    break;
                                }
                                else
                                    exprs.push(data.SQExprBuilder.hierarchyLevel(data.SQExprBuilder.hierarchy(data.SQExprBuilder.entity(fieldExprItem.schema, fieldExprItem.entity, fieldExprItem.entityVar), hierarchy.name), hierarchyLevel.name));
                            }
                        }
                    }
                }
                if (!_.isEmpty(exprs))
                    return exprs;
            }
            SQExprHierarchyLevelConverter.expand = expand;
        })(SQExprHierarchyLevelConverter || (SQExprHierarchyLevelConverter = {}));
        var SQExprVariationConverter;
        (function (SQExprVariationConverter) {
            function expand(expr, schema) {
                debug.assertValue(expr, 'sqExpr');
                debug.assertValue(schema, 'federatedSchema');
                var exprs;
                var conceptualProperty = expr.getConceptualProperty(schema);
                if (conceptualProperty) {
                    var column = conceptualProperty.column;
                    if (column && column.variations && column.variations.length > 0) {
                        var variations = column.variations;
                        // for SU11, we support only one variation
                        debug.assert(variations.length === 1, "variations.length");
                        var variation = variations[0];
                        var fieldExpr = data.SQExprConverter.asFieldPattern(expr);
                        var fieldExprItem = data.FieldExprPattern.toFieldExprEntityItemPattern(fieldExpr);
                        exprs = [];
                        if (variation.defaultHierarchy) {
                            var hierarchyExpr = data.SQExprBuilder.hierarchy(data.SQExprBuilder.propertyVariationSource(data.SQExprBuilder.entity(fieldExprItem.schema, fieldExprItem.entity, fieldExprItem.entityVar), variation.name, conceptualProperty.name), variation.defaultHierarchy.name);
                            for (var _i = 0, _a = variation.defaultHierarchy.levels; _i < _a.length; _i++) {
                                var level = _a[_i];
                                exprs.push(data.SQExprBuilder.hierarchyLevel(hierarchyExpr, level.name));
                            }
                        }
                    }
                }
                return exprs;
            }
            SQExprVariationConverter.expand = expand;
        })(SQExprVariationConverter || (SQExprVariationConverter = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        ;
        var SQExprGroupUtils;
        (function (SQExprGroupUtils) {
            /** Group all projections. Eacch group can consist of either a single property, or a collection of hierarchy items. */
            function groupExprs(schema, exprs) {
                var groups = [];
                for (var i = 0, len = exprs.length; i < len; i++) {
                    var expr = exprs[i];
                    debug.assertValue(expr, "Expression not found");
                    if (!(expr instanceof data.SQHierarchyLevelExpr)) {
                        groups.push({ expr: expr, children: null, selectQueryIndex: i });
                    }
                    else {
                        addChildToGroup(schema, groups, expr, i);
                    }
                }
                return groups;
            }
            SQExprGroupUtils.groupExprs = groupExprs;
            function addChildToGroup(schema, groups, expr, selectQueryIndex) {
                // shouldAddExpressionToNewGroup is used to control whether we should add the passed expr to 
                // a new Group or to the last Group
                var shouldAddExpressionToNewGroup = true;
                var exprSource = data.SQHierarchyExprUtils.getSourceVariationExpr(expr) || data.SQHierarchyExprUtils.getSourceHierarchy(expr);
                var lastGroup = _.last(groups);
                // The relevant group is always the last added. If it has the same source hierarchy,
                // and is properly ordered within that hierarchy, we will need to add to this group.
                if (lastGroup && lastGroup.children && data.SQExpr.equals(lastGroup.expr, exprSource)) {
                    var expandedExpr = data.SQHierarchyExprUtils.expandExpr(schema, expr.arg);
                    if (expandedExpr instanceof Array) {
                        var allHierarchyLevels = expandedExpr;
                        shouldAddExpressionToNewGroup = !data.SQHierarchyExprUtils.areHierarchyLevelsOrdered(allHierarchyLevels, _.last(lastGroup.children), expr);
                    }
                }
                if (shouldAddExpressionToNewGroup)
                    // Use the Sourcevariation as the expression for the group.
                    groups.push({ expr: exprSource, children: [expr], selectQueryIndex: selectQueryIndex });
                else {
                    debug.assertValue(lastGroup, 'There should be a group to add the variation to');
                    debug.assertValue(lastGroup.children, 'The group should have children to add the variation to');
                    lastGroup.children.push(expr);
                }
            }
        })(SQExprGroupUtils = data.SQExprGroupUtils || (data.SQExprGroupUtils = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        var StringExtensions = jsCommon.StringExtensions;
        /** Represents an immutable expression within a SemanticQuery. */
        var SQExpr = (function () {
            function SQExpr(kind) {
                debug.assertValue(kind, 'kind');
                this._kind = kind;
            }
            SQExpr.equals = function (x, y, ignoreCase) {
                return SQExprEqualityVisitor.run(x, y, ignoreCase);
            };
            SQExpr.prototype.validate = function (schema, errors) {
                var validator = new SQExprValidationVisitor(schema, errors);
                this.accept(validator);
                return validator.errors;
            };
            SQExpr.prototype.accept = function (visitor, arg) {
                debug.assertFail('abstract method');
                return;
            };
            Object.defineProperty(SQExpr.prototype, "kind", {
                get: function () {
                    return this._kind;
                },
                enumerable: true,
                configurable: true
            });
            SQExpr.isColumn = function (expr) {
                debug.assertValue(expr, 'expr');
                return expr.kind === 1 /* ColumnRef */;
            };
            SQExpr.isConstant = function (expr) {
                debug.assertValue(expr, 'expr');
                return expr.kind === 16 /* Constant */;
            };
            SQExpr.isEntity = function (expr) {
                debug.assertValue(expr, 'expr');
                return expr.kind === 0 /* Entity */;
            };
            SQExpr.isHierarchy = function (expr) {
                debug.assertValue(expr, 'expr');
                return expr.kind === 5 /* Hierarchy */;
            };
            SQExpr.isHierarchyLevel = function (expr) {
                debug.assertValue(expr, 'expr');
                return expr.kind === 6 /* HierarchyLevel */;
            };
            SQExpr.prototype.getMetadata = function (federatedSchema) {
                debug.assertValue(federatedSchema, 'federatedSchema');
                var field = data.SQExprConverter.asFieldPattern(this);
                if (!field)
                    return;
                if (field.column || field.columnAggr || field.measure)
                    return this.getMetadataForProperty(field, federatedSchema);
                if (field.hierarchyLevel || field.hierarchyLevelAggr)
                    return this.getMetadataForHierarchyLevel(field, federatedSchema);
                if (field.columnHierarchyLevelVariation)
                    return this.getMetadataForVariation(field, federatedSchema);
                return SQExpr.getMetadataForEntity(field, federatedSchema);
            };
            SQExpr.prototype.getDefaultAggregate = function (federatedSchema, forceAggregation) {
                if (forceAggregation === void 0) { forceAggregation = false; }
                debug.assertValue(federatedSchema, 'federatedSchema');
                var property = this.getConceptualProperty(federatedSchema) || this.getHierarchyLevelConceptualProperty(federatedSchema);
                if (!property)
                    return;
                var aggregate;
                if (property && property.kind === 0 /* Column */) {
                    var propertyDefaultAggregate = property.column ? property.column.defaultAggregate : null;
                    if ((property.type.integer || property.type.numeric) &&
                        propertyDefaultAggregate !== 1 /* None */) {
                        aggregate = defaultAggregateToQueryAggregateFunction(propertyDefaultAggregate);
                        if (aggregate === undefined)
                            aggregate = defaultAggregateForDataType(property.type);
                    }
                    // If we haven't found an appropriate aggregate, and want to force aggregation anyway, 
                    // aggregate on CountNonNull.
                    if (aggregate === undefined && forceAggregation) {
                        aggregate = data.QueryAggregateFunction.CountNonNull;
                    }
                }
                return aggregate;
            };
            /** Return the SQExpr[] of group on columns if it has group on keys otherwise return the SQExpr of the column.*/
            SQExpr.prototype.getKeyColumns = function (schema) {
                var columnRefExpr = SQExprColumnRefInfoVisitor.getColumnRefSQExpr(schema, this);
                if (!columnRefExpr)
                    return;
                var keySQExprs = [];
                var keys = this.getPropertyKeys(schema);
                if (keys && keys.length > 0) {
                    for (var i = 0, len = keys.length; i < len; i++) {
                        keySQExprs.push(SQExprBuilder.columnRef(columnRefExpr.source, keys[i].name));
                    }
                }
                else
                    keySQExprs.push(columnRefExpr);
                return keySQExprs;
            };
            /** Returns a value indicating whether the expression would group on keys other than itself.*/
            SQExpr.prototype.hasGroupOnKeys = function (schema) {
                var columnRefExpr = SQExprColumnRefInfoVisitor.getColumnRefSQExpr(schema, this);
                if (!columnRefExpr)
                    return;
                var keys = this.getPropertyKeys(schema);
                if (!keys || keys.length < 1)
                    return false;
                if (keys.length > 1)
                    return true;
                var keySqExpr = SQExprBuilder.columnRef(columnRefExpr.source, keys[0].name);
                return !SQExpr.equals(keySqExpr, this);
            };
            SQExpr.prototype.getPropertyKeys = function (schema) {
                var property = this.getConceptualProperty(schema) || this.getHierarchyLevelConceptualProperty(schema);
                if (!property)
                    return;
                return property.column ? property.column.keys : undefined;
            };
            SQExpr.prototype.getConceptualProperty = function (federatedSchema) {
                var field = data.SQExprConverter.asFieldPattern(this);
                if (!field)
                    return;
                var fieldExprItem = data.FieldExprPattern.toFieldExprEntityItemPattern(field);
                var propertyName = data.FieldExprPattern.getPropertyName(field);
                if (propertyName)
                    return federatedSchema
                        .schema(fieldExprItem.schema)
                        .findProperty(fieldExprItem.entity, propertyName);
            };
            SQExpr.prototype.getTargetEntityForVariation = function (federatedSchema, variationName) {
                var property = this.getConceptualProperty(federatedSchema);
                if (property && property.column && !_.isEmpty(property.column.variations)) {
                    var variations = property.column.variations;
                    for (var _i = 0; _i < variations.length; _i++) {
                        var variation = variations[_i];
                        if (variation.name === variationName)
                            return variation.navigationProperty.targetEntity.name;
                    }
                }
            };
            SQExpr.prototype.getHierarchyLevelConceptualProperty = function (federatedSchema) {
                var field = data.SQExprConverter.asFieldPattern(this);
                if (!field)
                    return;
                var fieldExprHierachyLevel = field.hierarchyLevel || field.hierarchyLevelAggr;
                if (fieldExprHierachyLevel) {
                    var fieldExprEntity = data.FieldExprPattern.toFieldExprEntityItemPattern(field);
                    var hierarchy = federatedSchema
                        .schema(fieldExprEntity.schema)
                        .findHierarchy(fieldExprEntity.entity, fieldExprHierachyLevel.name);
                    if (hierarchy) {
                        var hierarchyLevel = hierarchy.levels.withName(fieldExprHierachyLevel.level);
                        if (hierarchyLevel)
                            return hierarchyLevel.column;
                    }
                }
            };
            SQExpr.prototype.getMetadataForVariation = function (field, federatedSchema) {
                debug.assertValue(field, 'field');
                debug.assertValue(federatedSchema, 'federatedSchema');
                var columnHierarchyLevelVariation = field.columnHierarchyLevelVariation;
                var fieldExprItem = data.FieldExprPattern.toFieldExprEntityItemPattern(field);
                var sourceProperty = federatedSchema
                    .schema(fieldExprItem.schema)
                    .findProperty(fieldExprItem.entity, columnHierarchyLevelVariation.source.name);
                if (sourceProperty && sourceProperty.column && sourceProperty.column.variations) {
                    for (var _i = 0, _a = sourceProperty.column.variations; _i < _a.length; _i++) {
                        var variation = _a[_i];
                        if (variation.defaultHierarchy && variation.defaultHierarchy.levels) {
                            for (var _b = 0, _c = variation.defaultHierarchy.levels; _b < _c.length; _b++) {
                                var level = _c[_b];
                                if (level.name === columnHierarchyLevelVariation.level.level) {
                                    var property = level.column;
                                    return {
                                        kind: (property.kind === 1 /* Measure */) ? 1 /* Measure */ : 0 /* Column */,
                                        type: property.type,
                                        format: property.format,
                                        idOnEntityKey: property.column ? property.column.idOnEntityKey : false,
                                        defaultAggregate: property.column ? property.column.defaultAggregate : null
                                    };
                                }
                            }
                        }
                    }
                }
            };
            SQExpr.prototype.getMetadataForHierarchyLevel = function (field, federatedSchema) {
                debug.assertValue(field, 'field');
                debug.assertValue(federatedSchema, 'federatedSchema');
                var property = this.getHierarchyLevelConceptualProperty(federatedSchema);
                if (!property)
                    return;
                return this.getPropertyMetadata(field, property);
            };
            SQExpr.prototype.getPropertyMetadata = function (field, property) {
                var format = property.format;
                var type = property.type;
                var columnAggregate = field.columnAggr || field.hierarchyLevelAggr;
                if (columnAggregate) {
                    switch (columnAggregate.aggregate) {
                        case data.QueryAggregateFunction.Count:
                        case data.QueryAggregateFunction.CountNonNull:
                            type = powerbi.ValueType.fromExtendedType(powerbi.ExtendedType.Integer);
                            format = undefined;
                            break;
                        case data.QueryAggregateFunction.Avg:
                            if (type.integer)
                                type = powerbi.ValueType.fromExtendedType(powerbi.ExtendedType.Double);
                            break;
                    }
                }
                return {
                    kind: (property.kind === 1 /* Measure */ || (columnAggregate && columnAggregate.aggregate !== undefined)) ? 1 /* Measure */ : 0 /* Column */,
                    type: type,
                    format: format,
                    idOnEntityKey: property.column ? property.column.idOnEntityKey : false,
                    aggregate: columnAggregate ? columnAggregate.aggregate : undefined,
                    defaultAggregate: property.column ? property.column.defaultAggregate : null
                };
            };
            SQExpr.prototype.getMetadataForProperty = function (field, federatedSchema) {
                debug.assertValue(field, 'field');
                debug.assertValue(federatedSchema, 'federatedSchema');
                var property = this.getConceptualProperty(federatedSchema);
                if (!property)
                    return;
                return this.getPropertyMetadata(field, property);
            };
            SQExpr.getMetadataForEntity = function (field, federatedSchema) {
                debug.assertValue(field, 'field');
                debug.assertValue(federatedSchema, 'federatedSchema');
                var fieldExprItem = data.FieldExprPattern.toFieldExprEntityItemPattern(field);
                var entity = federatedSchema
                    .schema(fieldExprItem.schema)
                    .entities
                    .withName(fieldExprItem.entity);
                if (!entity)
                    return;
                // We only support count and countnonnull for entity.
                if (field.entityAggr) {
                    switch (field.entityAggr.aggregate) {
                        case data.QueryAggregateFunction.Count:
                        case data.QueryAggregateFunction.CountNonNull:
                            return {
                                kind: 1 /* Measure */,
                                type: powerbi.ValueType.fromExtendedType(powerbi.ExtendedType.Integer),
                                format: undefined,
                                idOnEntityKey: false,
                                aggregate: field.entityAggr.aggregate
                            };
                    }
                }
            };
            return SQExpr;
        })();
        data.SQExpr = SQExpr;
        /** Note: Exported for testability */
        function defaultAggregateForDataType(type) {
            if (type.integer || type.numeric)
                return data.QueryAggregateFunction.Sum;
            return data.QueryAggregateFunction.Count;
        }
        data.defaultAggregateForDataType = defaultAggregateForDataType;
        /** Note: Exported for testability */
        function defaultAggregateToQueryAggregateFunction(aggregate) {
            switch (aggregate) {
                case 6 /* Average */:
                    return data.QueryAggregateFunction.Avg;
                case 3 /* Count */:
                    return data.QueryAggregateFunction.CountNonNull;
                case 7 /* DistinctCount */:
                    return data.QueryAggregateFunction.Count;
                case 5 /* Max */:
                    return data.QueryAggregateFunction.Max;
                case 4 /* Min */:
                    return data.QueryAggregateFunction.Min;
                case 2 /* Sum */:
                    return data.QueryAggregateFunction.Sum;
                default:
                    return;
            }
        }
        data.defaultAggregateToQueryAggregateFunction = defaultAggregateToQueryAggregateFunction;
        var SQEntityExpr = (function (_super) {
            __extends(SQEntityExpr, _super);
            function SQEntityExpr(schema, entity, variable) {
                debug.assertValue(entity, 'entity');
                _super.call(this, 0 /* Entity */);
                this.schema = schema;
                this.entity = entity;
                if (variable)
                    this.variable = variable;
            }
            SQEntityExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitEntity(this, arg);
            };
            return SQEntityExpr;
        })(SQExpr);
        data.SQEntityExpr = SQEntityExpr;
        var SQArithmeticExpr = (function (_super) {
            __extends(SQArithmeticExpr, _super);
            function SQArithmeticExpr(left, right, operator) {
                debug.assertValue(left, 'left');
                debug.assertValue(right, 'right');
                debug.assertValue(operator, 'operator');
                _super.call(this, 22 /* Arithmetic */);
                this.left = left;
                this.right = right;
                this.operator = operator;
            }
            SQArithmeticExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitArithmetic(this, arg);
            };
            return SQArithmeticExpr;
        })(SQExpr);
        data.SQArithmeticExpr = SQArithmeticExpr;
        var SQPropRefExpr = (function (_super) {
            __extends(SQPropRefExpr, _super);
            function SQPropRefExpr(kind, source, ref) {
                debug.assertValue(kind, 'kind');
                debug.assertValue(source, 'source');
                debug.assertValue(ref, 'ref');
                _super.call(this, kind);
                this.source = source;
                this.ref = ref;
            }
            return SQPropRefExpr;
        })(SQExpr);
        data.SQPropRefExpr = SQPropRefExpr;
        var SQColumnRefExpr = (function (_super) {
            __extends(SQColumnRefExpr, _super);
            function SQColumnRefExpr(source, ref) {
                _super.call(this, 1 /* ColumnRef */, source, ref);
            }
            SQColumnRefExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitColumnRef(this, arg);
            };
            return SQColumnRefExpr;
        })(SQPropRefExpr);
        data.SQColumnRefExpr = SQColumnRefExpr;
        var SQMeasureRefExpr = (function (_super) {
            __extends(SQMeasureRefExpr, _super);
            function SQMeasureRefExpr(source, ref) {
                _super.call(this, 2 /* MeasureRef */, source, ref);
            }
            SQMeasureRefExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitMeasureRef(this, arg);
            };
            return SQMeasureRefExpr;
        })(SQPropRefExpr);
        data.SQMeasureRefExpr = SQMeasureRefExpr;
        var SQAggregationExpr = (function (_super) {
            __extends(SQAggregationExpr, _super);
            function SQAggregationExpr(arg, func) {
                debug.assertValue(arg, 'arg');
                debug.assertValue(func, 'func');
                _super.call(this, 3 /* Aggregation */);
                this.arg = arg;
                this.func = func;
            }
            SQAggregationExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitAggr(this, arg);
            };
            return SQAggregationExpr;
        })(SQExpr);
        data.SQAggregationExpr = SQAggregationExpr;
        var SQPropertyVariationSourceExpr = (function (_super) {
            __extends(SQPropertyVariationSourceExpr, _super);
            function SQPropertyVariationSourceExpr(arg, name, property) {
                debug.assertValue(arg, 'arg');
                debug.assertValue(name, 'name');
                debug.assertValue(property, 'property');
                _super.call(this, 4 /* PropertyVariationSource */);
                this.arg = arg;
                this.name = name;
                this.property = property;
            }
            SQPropertyVariationSourceExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitPropertyVariationSource(this, arg);
            };
            return SQPropertyVariationSourceExpr;
        })(SQExpr);
        data.SQPropertyVariationSourceExpr = SQPropertyVariationSourceExpr;
        var SQHierarchyExpr = (function (_super) {
            __extends(SQHierarchyExpr, _super);
            function SQHierarchyExpr(arg, hierarchy) {
                debug.assertValue(arg, 'arg');
                debug.assertValue(hierarchy, 'hierarchy');
                _super.call(this, 5 /* Hierarchy */);
                this.arg = arg;
                this.hierarchy = hierarchy;
            }
            SQHierarchyExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitHierarchy(this, arg);
            };
            return SQHierarchyExpr;
        })(SQExpr);
        data.SQHierarchyExpr = SQHierarchyExpr;
        var SQHierarchyLevelExpr = (function (_super) {
            __extends(SQHierarchyLevelExpr, _super);
            function SQHierarchyLevelExpr(arg, level) {
                debug.assertValue(arg, 'arg');
                debug.assertValue(level, 'level');
                _super.call(this, 6 /* HierarchyLevel */);
                this.arg = arg;
                this.level = level;
            }
            SQHierarchyLevelExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitHierarchyLevel(this, arg);
            };
            return SQHierarchyLevelExpr;
        })(SQExpr);
        data.SQHierarchyLevelExpr = SQHierarchyLevelExpr;
        var SQAndExpr = (function (_super) {
            __extends(SQAndExpr, _super);
            function SQAndExpr(left, right) {
                debug.assertValue(left, 'left');
                debug.assertValue(right, 'right');
                _super.call(this, 7 /* And */);
                this.left = left;
                this.right = right;
            }
            SQAndExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitAnd(this, arg);
            };
            return SQAndExpr;
        })(SQExpr);
        data.SQAndExpr = SQAndExpr;
        var SQBetweenExpr = (function (_super) {
            __extends(SQBetweenExpr, _super);
            function SQBetweenExpr(arg, lower, upper) {
                debug.assertValue(arg, 'arg');
                debug.assertValue(lower, 'lower');
                debug.assertValue(upper, 'upper');
                _super.call(this, 8 /* Between */);
                this.arg = arg;
                this.lower = lower;
                this.upper = upper;
            }
            SQBetweenExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitBetween(this, arg);
            };
            return SQBetweenExpr;
        })(SQExpr);
        data.SQBetweenExpr = SQBetweenExpr;
        var SQInExpr = (function (_super) {
            __extends(SQInExpr, _super);
            function SQInExpr(args, values) {
                debug.assertValue(args, 'args');
                debug.assertValue(values, 'values');
                _super.call(this, 9 /* In */);
                this.args = args;
                this.values = values;
            }
            SQInExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitIn(this, arg);
            };
            return SQInExpr;
        })(SQExpr);
        data.SQInExpr = SQInExpr;
        var SQOrExpr = (function (_super) {
            __extends(SQOrExpr, _super);
            function SQOrExpr(left, right) {
                debug.assertValue(left, 'left');
                debug.assertValue(right, 'right');
                _super.call(this, 10 /* Or */);
                this.left = left;
                this.right = right;
            }
            SQOrExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitOr(this, arg);
            };
            return SQOrExpr;
        })(SQExpr);
        data.SQOrExpr = SQOrExpr;
        var SQCompareExpr = (function (_super) {
            __extends(SQCompareExpr, _super);
            function SQCompareExpr(comparison, left, right) {
                debug.assertValue(comparison, 'kind');
                debug.assertValue(left, 'left');
                debug.assertValue(right, 'right');
                _super.call(this, 12 /* Compare */);
                this.comparison = comparison;
                this.left = left;
                this.right = right;
            }
            SQCompareExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitCompare(this, arg);
            };
            return SQCompareExpr;
        })(SQExpr);
        data.SQCompareExpr = SQCompareExpr;
        var SQContainsExpr = (function (_super) {
            __extends(SQContainsExpr, _super);
            function SQContainsExpr(left, right) {
                debug.assertValue(left, 'left');
                debug.assertValue(right, 'right');
                _super.call(this, 11 /* Contains */);
                this.left = left;
                this.right = right;
            }
            SQContainsExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitContains(this, arg);
            };
            return SQContainsExpr;
        })(SQExpr);
        data.SQContainsExpr = SQContainsExpr;
        var SQStartsWithExpr = (function (_super) {
            __extends(SQStartsWithExpr, _super);
            function SQStartsWithExpr(left, right) {
                debug.assertValue(left, 'left');
                debug.assertValue(right, 'right');
                _super.call(this, 13 /* StartsWith */);
                this.left = left;
                this.right = right;
            }
            SQStartsWithExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitStartsWith(this, arg);
            };
            return SQStartsWithExpr;
        })(SQExpr);
        data.SQStartsWithExpr = SQStartsWithExpr;
        var SQExistsExpr = (function (_super) {
            __extends(SQExistsExpr, _super);
            function SQExistsExpr(arg) {
                debug.assertValue(arg, 'arg');
                _super.call(this, 14 /* Exists */);
                this.arg = arg;
            }
            SQExistsExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitExists(this, arg);
            };
            return SQExistsExpr;
        })(SQExpr);
        data.SQExistsExpr = SQExistsExpr;
        var SQNotExpr = (function (_super) {
            __extends(SQNotExpr, _super);
            function SQNotExpr(arg) {
                debug.assertValue(arg, 'arg');
                _super.call(this, 15 /* Not */);
                this.arg = arg;
            }
            SQNotExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitNot(this, arg);
            };
            return SQNotExpr;
        })(SQExpr);
        data.SQNotExpr = SQNotExpr;
        var SQConstantExpr = (function (_super) {
            __extends(SQConstantExpr, _super);
            function SQConstantExpr(type, value, valueEncoded) {
                debug.assertValue(type, 'type');
                _super.call(this, 16 /* Constant */);
                this.type = type;
                this.value = value;
                this.valueEncoded = valueEncoded;
            }
            SQConstantExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitConstant(this, arg);
            };
            SQConstantExpr.prototype.getMetadata = function (federatedSchema) {
                debug.assertValue(federatedSchema, 'federatedSchema');
                return {
                    // Returning Measure as the kind for a SQConstantExpr is slightly ambiguous allowing the return object to conform to SQEXprMetadata.
                    // A getType or similiar function in the future would be more appropriate. 
                    kind: 1 /* Measure */,
                    type: this.type,
                };
            };
            return SQConstantExpr;
        })(SQExpr);
        data.SQConstantExpr = SQConstantExpr;
        var SQDateSpanExpr = (function (_super) {
            __extends(SQDateSpanExpr, _super);
            function SQDateSpanExpr(unit, arg) {
                debug.assertValue(unit, 'unit');
                debug.assertValue(arg, 'arg');
                _super.call(this, 17 /* DateSpan */);
                this.unit = unit;
                this.arg = arg;
            }
            SQDateSpanExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitDateSpan(this, arg);
            };
            return SQDateSpanExpr;
        })(SQExpr);
        data.SQDateSpanExpr = SQDateSpanExpr;
        var SQDateAddExpr = (function (_super) {
            __extends(SQDateAddExpr, _super);
            function SQDateAddExpr(unit, amount, arg) {
                debug.assertValue(unit, 'unit');
                debug.assertValue(amount, 'amount');
                debug.assertValue(arg, 'arg');
                _super.call(this, 18 /* DateAdd */);
                this.unit = unit;
                this.arg = arg;
                this.amount = amount;
            }
            SQDateAddExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitDateAdd(this, arg);
            };
            return SQDateAddExpr;
        })(SQExpr);
        data.SQDateAddExpr = SQDateAddExpr;
        var SQNowExpr = (function (_super) {
            __extends(SQNowExpr, _super);
            function SQNowExpr() {
                _super.call(this, 19 /* Now */);
            }
            SQNowExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitNow(this, arg);
            };
            return SQNowExpr;
        })(SQExpr);
        data.SQNowExpr = SQNowExpr;
        var SQDefaultValueExpr = (function (_super) {
            __extends(SQDefaultValueExpr, _super);
            function SQDefaultValueExpr() {
                _super.call(this, 21 /* DefaultValue */);
            }
            SQDefaultValueExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitDefaultValue(this, arg);
            };
            return SQDefaultValueExpr;
        })(SQExpr);
        data.SQDefaultValueExpr = SQDefaultValueExpr;
        var SQAnyValueExpr = (function (_super) {
            __extends(SQAnyValueExpr, _super);
            function SQAnyValueExpr() {
                _super.call(this, 20 /* AnyValue */);
            }
            SQAnyValueExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitAnyValue(this, arg);
            };
            return SQAnyValueExpr;
        })(SQExpr);
        data.SQAnyValueExpr = SQAnyValueExpr;
        var SQFillRuleExpr = (function (_super) {
            __extends(SQFillRuleExpr, _super);
            function SQFillRuleExpr(input, fillRule) {
                debug.assertValue(input, 'input');
                debug.assertValue(fillRule, 'fillRule');
                _super.call(this, 23 /* FillRule */);
                this.input = input;
                this.rule = fillRule;
            }
            SQFillRuleExpr.prototype.accept = function (visitor, arg) {
                return visitor.visitFillRule(this, arg);
            };
            return SQFillRuleExpr;
        })(SQExpr);
        data.SQFillRuleExpr = SQFillRuleExpr;
        /** Provides utilities for creating & manipulating expressions. */
        var SQExprBuilder;
        (function (SQExprBuilder) {
            function entity(schema, entity, variable) {
                return new SQEntityExpr(schema, entity, variable);
            }
            SQExprBuilder.entity = entity;
            function columnRef(source, prop) {
                return new SQColumnRefExpr(source, prop);
            }
            SQExprBuilder.columnRef = columnRef;
            function measureRef(source, prop) {
                return new SQMeasureRefExpr(source, prop);
            }
            SQExprBuilder.measureRef = measureRef;
            function aggregate(source, aggregate) {
                return new SQAggregationExpr(source, aggregate);
            }
            SQExprBuilder.aggregate = aggregate;
            function hierarchy(source, hierarchy) {
                return new SQHierarchyExpr(source, hierarchy);
            }
            SQExprBuilder.hierarchy = hierarchy;
            function propertyVariationSource(source, name, property) {
                return new SQPropertyVariationSourceExpr(source, name, property);
            }
            SQExprBuilder.propertyVariationSource = propertyVariationSource;
            function hierarchyLevel(source, level) {
                return new SQHierarchyLevelExpr(source, level);
            }
            SQExprBuilder.hierarchyLevel = hierarchyLevel;
            function and(left, right) {
                if (!left)
                    return right;
                if (!right)
                    return left;
                return new SQAndExpr(left, right);
            }
            SQExprBuilder.and = and;
            function between(arg, lower, upper) {
                return new SQBetweenExpr(arg, lower, upper);
            }
            SQExprBuilder.between = between;
            function inExpr(args, values) {
                return new SQInExpr(args, values);
            }
            SQExprBuilder.inExpr = inExpr;
            function or(left, right) {
                if (!left)
                    return right;
                if (!right)
                    return left;
                if (left instanceof SQInExpr && right instanceof SQInExpr) {
                    var inExpr_1 = tryUseInExprs(left, right);
                    if (inExpr_1)
                        return inExpr_1;
                }
                return new SQOrExpr(left, right);
            }
            SQExprBuilder.or = or;
            function tryUseInExprs(left, right) {
                if (!left.args || !right.args)
                    return;
                var leftArgLen = left.args.length;
                var rightArgLen = right.args.length;
                if (leftArgLen !== rightArgLen)
                    return;
                for (var i = 0; i < leftArgLen; ++i) {
                    if (!SQExpr.equals(left.args[i], right.args[i]))
                        return;
                }
                var combinedValues = left.values.concat(right.values);
                return SQExprBuilder.inExpr(left.args, combinedValues);
            }
            function compare(kind, left, right) {
                return new SQCompareExpr(kind, left, right);
            }
            SQExprBuilder.compare = compare;
            function contains(left, right) {
                return new SQContainsExpr(left, right);
            }
            SQExprBuilder.contains = contains;
            function exists(arg) {
                return new SQExistsExpr(arg);
            }
            SQExprBuilder.exists = exists;
            function equal(left, right) {
                return compare(data.QueryComparisonKind.Equal, left, right);
            }
            SQExprBuilder.equal = equal;
            function not(arg) {
                return new SQNotExpr(arg);
            }
            SQExprBuilder.not = not;
            function startsWith(left, right) {
                return new SQStartsWithExpr(left, right);
            }
            SQExprBuilder.startsWith = startsWith;
            function nullConstant() {
                return new SQConstantExpr(powerbi.ValueType.fromExtendedType(powerbi.ExtendedType.Null), null, data.PrimitiveValueEncoding.nullEncoding());
            }
            SQExprBuilder.nullConstant = nullConstant;
            function now() {
                return new SQNowExpr();
            }
            SQExprBuilder.now = now;
            function defaultValue() {
                return new SQDefaultValueExpr();
            }
            SQExprBuilder.defaultValue = defaultValue;
            function anyValue() {
                return new SQAnyValueExpr();
            }
            SQExprBuilder.anyValue = anyValue;
            function boolean(value) {
                return new SQConstantExpr(powerbi.ValueType.fromExtendedType(powerbi.ExtendedType.Boolean), value, data.PrimitiveValueEncoding.boolean(value));
            }
            SQExprBuilder.boolean = boolean;
            function dateAdd(unit, amount, arg) {
                return new SQDateAddExpr(unit, amount, arg);
            }
            SQExprBuilder.dateAdd = dateAdd;
            function dateTime(value, valueEncoded) {
                if (valueEncoded === undefined)
                    valueEncoded = data.PrimitiveValueEncoding.dateTime(value);
                return new SQConstantExpr(powerbi.ValueType.fromExtendedType(powerbi.ExtendedType.DateTime), value, valueEncoded);
            }
            SQExprBuilder.dateTime = dateTime;
            function dateSpan(unit, arg) {
                return new SQDateSpanExpr(unit, arg);
            }
            SQExprBuilder.dateSpan = dateSpan;
            function decimal(value, valueEncoded) {
                if (valueEncoded === undefined)
                    valueEncoded = data.PrimitiveValueEncoding.decimal(value);
                return new SQConstantExpr(powerbi.ValueType.fromExtendedType(powerbi.ExtendedType.Decimal), value, valueEncoded);
            }
            SQExprBuilder.decimal = decimal;
            function double(value, valueEncoded) {
                if (valueEncoded === undefined)
                    valueEncoded = data.PrimitiveValueEncoding.double(value);
                return new SQConstantExpr(powerbi.ValueType.fromExtendedType(powerbi.ExtendedType.Double), value, valueEncoded);
            }
            SQExprBuilder.double = double;
            function integer(value, valueEncoded) {
                if (valueEncoded === undefined)
                    valueEncoded = data.PrimitiveValueEncoding.integer(value);
                return new SQConstantExpr(powerbi.ValueType.fromExtendedType(powerbi.ExtendedType.Integer), value, valueEncoded);
            }
            SQExprBuilder.integer = integer;
            function text(value, valueEncoded) {
                debug.assert(!valueEncoded || valueEncoded === data.PrimitiveValueEncoding.text(value), 'Incorrect encoded value specified.');
                return new SQConstantExpr(powerbi.ValueType.fromExtendedType(powerbi.ExtendedType.Text), value, valueEncoded || data.PrimitiveValueEncoding.text(value));
            }
            SQExprBuilder.text = text;
            /** Returns an SQExpr that evaluates to the constant value. */
            function typedConstant(value, type) {
                if (value == null)
                    return nullConstant();
                if (_.isBoolean(value)) {
                    return boolean(value);
                }
                if (_.isString(value)) {
                    return text(value);
                }
                if (_.isNumber(value)) {
                    if (type.integer && powerbi.Double.isInteger(value))
                        return integer(value);
                    return double(value);
                }
                if (value instanceof Date) {
                    return dateTime(value);
                }
            }
            SQExprBuilder.typedConstant = typedConstant;
            function arithmetic(left, right, operator) {
                return new SQArithmeticExpr(left, right, operator);
            }
            SQExprBuilder.arithmetic = arithmetic;
            function setAggregate(expr, aggregate) {
                return SQExprChangeAggregateRewriter.rewrite(expr, aggregate);
            }
            SQExprBuilder.setAggregate = setAggregate;
            function removeAggregate(expr) {
                return SQExprRemoveAggregateRewriter.rewrite(expr);
            }
            SQExprBuilder.removeAggregate = removeAggregate;
            function removeEntityVariables(expr) {
                return SQExprRemoveEntityVariablesRewriter.rewrite(expr);
            }
            SQExprBuilder.removeEntityVariables = removeEntityVariables;
            function createExprWithAggregate(expr, schema, aggregateNonNumericFields, preferredAggregate) {
                debug.assertValue(expr, 'expr');
                debug.assertValue(expr, 'schema');
                var aggregate;
                if (preferredAggregate != null && data.SQExprUtils.isSupportedAggregate(expr, schema, preferredAggregate)) {
                    aggregate = preferredAggregate;
                }
                else {
                    aggregate = expr.getDefaultAggregate(schema, aggregateNonNumericFields);
                }
                if (aggregate !== undefined)
                    expr = SQExprBuilder.aggregate(expr, aggregate);
                return expr;
            }
            SQExprBuilder.createExprWithAggregate = createExprWithAggregate;
            function fillRule(expr, rule) {
                debug.assertValue(expr, 'expr');
                debug.assertValue(rule, 'rule');
                return new SQFillRuleExpr(expr, rule);
            }
            SQExprBuilder.fillRule = fillRule;
        })(SQExprBuilder = data.SQExprBuilder || (data.SQExprBuilder = {}));
        /** Provides utilities for obtaining information about expressions. */
        var SQExprInfo;
        (function (SQExprInfo) {
            function getAggregate(expr) {
                return SQExprAggregateInfoVisitor.getAggregate(expr);
            }
            SQExprInfo.getAggregate = getAggregate;
        })(SQExprInfo = data.SQExprInfo || (data.SQExprInfo = {}));
        var SQExprEqualityVisitor = (function () {
            function SQExprEqualityVisitor(ignoreCase) {
                this.ignoreCase = ignoreCase;
            }
            SQExprEqualityVisitor.run = function (x, y, ignoreCase) {
                // Normalize falsy to null
                x = x || null;
                y = y || null;
                if (x === y)
                    return true;
                if (!x !== !y)
                    return false;
                debug.assertValue(x, 'x');
                debug.assertValue(y, 'y');
                if (ignoreCase)
                    return x.accept(SQExprEqualityVisitor.ignoreCaseInstance, y);
                return x.accept(SQExprEqualityVisitor.instance, y);
            };
            SQExprEqualityVisitor.prototype.visitColumnRef = function (expr, comparand) {
                return comparand instanceof SQColumnRefExpr &&
                    expr.ref === comparand.ref &&
                    this.equals(expr.source, comparand.source);
            };
            SQExprEqualityVisitor.prototype.visitMeasureRef = function (expr, comparand) {
                return comparand instanceof SQMeasureRefExpr &&
                    expr.ref === comparand.ref &&
                    this.equals(expr.source, comparand.source);
            };
            SQExprEqualityVisitor.prototype.visitAggr = function (expr, comparand) {
                return comparand instanceof SQAggregationExpr &&
                    expr.func === comparand.func &&
                    this.equals(expr.arg, comparand.arg);
            };
            SQExprEqualityVisitor.prototype.visitHierarchy = function (expr, comparand) {
                return comparand instanceof SQHierarchyExpr &&
                    expr.hierarchy === comparand.hierarchy &&
                    this.equals(expr.arg, comparand.arg);
            };
            SQExprEqualityVisitor.prototype.visitHierarchyLevel = function (expr, comparand) {
                return comparand instanceof SQHierarchyLevelExpr &&
                    expr.level === comparand.level &&
                    this.equals(expr.arg, comparand.arg);
            };
            SQExprEqualityVisitor.prototype.visitPropertyVariationSource = function (expr, comparand) {
                return comparand instanceof SQPropertyVariationSourceExpr &&
                    expr.name === comparand.name &&
                    expr.property === comparand.property &&
                    this.equals(expr.arg, comparand.arg);
            };
            SQExprEqualityVisitor.prototype.visitBetween = function (expr, comparand) {
                return comparand instanceof SQBetweenExpr &&
                    this.equals(expr.arg, comparand.arg) &&
                    this.equals(expr.lower, comparand.lower) &&
                    this.equals(expr.upper, comparand.upper);
            };
            SQExprEqualityVisitor.prototype.visitIn = function (expr, comparand) {
                if (!(comparand instanceof SQInExpr) || !this.equalsAll(expr.args, comparand.args))
                    return false;
                var values = expr.values, compareValues = comparand.values;
                if (values.length !== compareValues.length)
                    return false;
                for (var i = 0, len = values.length; i < len; i++) {
                    if (!this.equalsAll(values[i], compareValues[i]))
                        return false;
                }
                return true;
            };
            SQExprEqualityVisitor.prototype.visitEntity = function (expr, comparand) {
                return comparand instanceof SQEntityExpr &&
                    expr.schema === comparand.schema &&
                    expr.entity === comparand.entity &&
                    this.optionalEqual(expr.variable, comparand.variable);
            };
            SQExprEqualityVisitor.prototype.visitAnd = function (expr, comparand) {
                return comparand instanceof SQAndExpr &&
                    this.equals(expr.left, comparand.left) &&
                    this.equals(expr.right, comparand.right);
            };
            SQExprEqualityVisitor.prototype.visitOr = function (expr, comparand) {
                return comparand instanceof SQOrExpr &&
                    this.equals(expr.left, comparand.left) &&
                    this.equals(expr.right, comparand.right);
            };
            SQExprEqualityVisitor.prototype.visitCompare = function (expr, comparand) {
                return comparand instanceof SQCompareExpr &&
                    expr.comparison === comparand.comparison &&
                    this.equals(expr.left, comparand.left) &&
                    this.equals(expr.right, comparand.right);
            };
            SQExprEqualityVisitor.prototype.visitContains = function (expr, comparand) {
                return comparand instanceof SQContainsExpr &&
                    this.equals(expr.left, comparand.left) &&
                    this.equals(expr.right, comparand.right);
            };
            SQExprEqualityVisitor.prototype.visitDateSpan = function (expr, comparand) {
                return comparand instanceof SQDateSpanExpr &&
                    expr.unit === comparand.unit &&
                    this.equals(expr.arg, comparand.arg);
            };
            SQExprEqualityVisitor.prototype.visitDateAdd = function (expr, comparand) {
                return comparand instanceof SQDateAddExpr &&
                    expr.unit === comparand.unit &&
                    expr.amount === comparand.amount &&
                    this.equals(expr.arg, comparand.arg);
            };
            SQExprEqualityVisitor.prototype.visitExists = function (expr, comparand) {
                return comparand instanceof SQExistsExpr &&
                    this.equals(expr.arg, comparand.arg);
            };
            SQExprEqualityVisitor.prototype.visitNot = function (expr, comparand) {
                return comparand instanceof SQNotExpr &&
                    this.equals(expr.arg, comparand.arg);
            };
            SQExprEqualityVisitor.prototype.visitNow = function (expr, comparand) {
                return comparand instanceof SQNowExpr;
            };
            SQExprEqualityVisitor.prototype.visitDefaultValue = function (expr, comparand) {
                return comparand instanceof SQDefaultValueExpr;
            };
            SQExprEqualityVisitor.prototype.visitAnyValue = function (expr, comparand) {
                return comparand instanceof SQAnyValueExpr;
            };
            SQExprEqualityVisitor.prototype.visitStartsWith = function (expr, comparand) {
                return comparand instanceof SQStartsWithExpr &&
                    this.equals(expr.left, comparand.left) &&
                    this.equals(expr.right, comparand.right);
            };
            SQExprEqualityVisitor.prototype.visitConstant = function (expr, comparand) {
                if (comparand instanceof SQConstantExpr && expr.type === comparand.type)
                    return expr.type.text && this.ignoreCase ?
                        StringExtensions.equalIgnoreCase(expr.valueEncoded, comparand.valueEncoded) :
                        expr.valueEncoded === comparand.valueEncoded;
                return false;
            };
            SQExprEqualityVisitor.prototype.visitFillRule = function (expr, comparand) {
                if (comparand instanceof SQFillRuleExpr && this.equals(expr.input, comparand.input)) {
                    var leftRule = expr.rule, rightRule = comparand.rule;
                    if (leftRule === rightRule)
                        return true;
                    var leftLinearGradient2 = leftRule.linearGradient2, rightLinearGradient2 = rightRule.linearGradient2;
                    if (leftLinearGradient2 && rightLinearGradient2) {
                        return this.visitLinearGradient2(leftLinearGradient2, rightLinearGradient2);
                    }
                    var leftLinearGradient3 = leftRule.linearGradient3, rightLinearGradient3 = rightRule.linearGradient3;
                    if (leftLinearGradient3 && rightLinearGradient3) {
                        return this.visitLinearGradient3(leftLinearGradient3, rightLinearGradient3);
                    }
                }
                return false;
            };
            SQExprEqualityVisitor.prototype.visitLinearGradient2 = function (left2, right2) {
                debug.assertValue(left2, 'left2');
                debug.assertValue(right2, 'right2');
                return this.equalsFillRuleStop(left2.min, right2.min) &&
                    this.equalsFillRuleStop(left2.max, right2.max);
            };
            SQExprEqualityVisitor.prototype.visitLinearGradient3 = function (left3, right3) {
                debug.assertValue(left3, 'left3');
                debug.assertValue(right3, 'right3');
                return this.equalsFillRuleStop(left3.min, right3.min) &&
                    this.equalsFillRuleStop(left3.mid, right3.mid) &&
                    this.equalsFillRuleStop(left3.max, right3.max);
            };
            SQExprEqualityVisitor.prototype.equalsFillRuleStop = function (stop1, stop2) {
                debug.assertValue(stop1, 'stop1');
                debug.assertValue(stop2, 'stop2');
                if (!this.equals(stop1.color, stop2.color))
                    return false;
                if (!stop1.value)
                    return stop1.value === stop2.value;
                return this.equals(stop1.value, stop2.value);
            };
            SQExprEqualityVisitor.prototype.visitArithmetic = function (expr, comparand) {
                return comparand instanceof SQArithmeticExpr &&
                    expr.operator === comparand.operator &&
                    this.equals(expr.left, comparand.left) &&
                    this.equals(expr.right, comparand.right);
            };
            SQExprEqualityVisitor.prototype.optionalEqual = function (x, y) {
                // Only check equality if both values are specified.
                if (x && y)
                    return x === y;
                return true;
            };
            SQExprEqualityVisitor.prototype.equals = function (x, y) {
                return x.accept(this, y);
            };
            SQExprEqualityVisitor.prototype.equalsAll = function (x, y) {
                var len = x.length;
                if (len !== y.length)
                    return false;
                for (var i = 0; i < len; i++) {
                    if (!this.equals(x[i], y[i]))
                        return false;
                }
                return true;
            };
            SQExprEqualityVisitor.instance = new SQExprEqualityVisitor(/* ignoreCase */ false);
            SQExprEqualityVisitor.ignoreCaseInstance = new SQExprEqualityVisitor(true);
            return SQExprEqualityVisitor;
        })();
        /** Rewrites a root-level expression. */
        var SQExprRootRewriter = (function (_super) {
            __extends(SQExprRootRewriter, _super);
            function SQExprRootRewriter() {
                _super.apply(this, arguments);
            }
            SQExprRootRewriter.prototype.visitDefault = function (expr) {
                return expr;
            };
            return SQExprRootRewriter;
        })(data.DefaultSQExprVisitor);
        var SQExprValidationVisitor = (function (_super) {
            __extends(SQExprValidationVisitor, _super);
            function SQExprValidationVisitor(schema, errors) {
                debug.assertValue(schema, 'schema');
                _super.call(this);
                this.schema = schema;
                if (errors)
                    this.errors = errors;
            }
            SQExprValidationVisitor.prototype.visitIn = function (expr) {
                var inExpr = _super.prototype.visitIn.call(this, expr);
                var args = inExpr.args;
                var values = inExpr.values;
                for (var _i = 0; _i < values.length; _i++) {
                    var valueTuple = values[_i];
                    debug.assert(valueTuple.length === args.length, 'args and value tuple are not the same length');
                    for (var i = 0, len = valueTuple.length; i < len; ++i)
                        this.validateCompatibleType(args[i], valueTuple[i]);
                }
                return inExpr;
            };
            SQExprValidationVisitor.prototype.visitCompare = function (expr) {
                var compareExpr = _super.prototype.visitCompare.call(this, expr);
                this.validateCompatibleType(compareExpr.left, compareExpr.right);
                return compareExpr;
            };
            SQExprValidationVisitor.prototype.visitColumnRef = function (expr) {
                var fieldExpr = data.SQExprConverter.asFieldPattern(expr);
                if (fieldExpr) {
                    var fieldExprItem = data.FieldExprPattern.toFieldExprEntityItemPattern(fieldExpr);
                    var entity = this.validateEntity(fieldExprItem.schema, fieldExprItem.entity);
                    if (entity) {
                        var prop = entity.properties.withName(fieldExpr.column.name);
                        if (!prop ||
                            prop.kind !== 0 /* Column */ ||
                            !this.isQueryable(fieldExpr))
                            this.register(3 /* invalidColumnReference */);
                    }
                }
                return expr;
            };
            SQExprValidationVisitor.prototype.visitMeasureRef = function (expr) {
                var fieldExpr = data.SQExprConverter.asFieldPattern(expr);
                if (fieldExpr) {
                    var fieldExprItem = data.FieldExprPattern.toFieldExprEntityItemPattern(fieldExpr);
                    var entity = this.validateEntity(fieldExprItem.schema, fieldExprItem.entity);
                    if (entity) {
                        var prop = entity.properties.withName(fieldExpr.measure.name);
                        if (!prop ||
                            prop.kind !== 1 /* Measure */ ||
                            !this.isQueryable(fieldExpr))
                            this.register(4 /* invalidMeasureReference */);
                    }
                }
                return expr;
            };
            SQExprValidationVisitor.prototype.visitAggr = function (expr) {
                var aggregateExpr = _super.prototype.visitAggr.call(this, expr);
                var columnRefExpr = SQExprColumnRefInfoVisitor.getColumnRefSQExpr(this.schema, aggregateExpr.arg);
                if (columnRefExpr) {
                    if (!data.SQExprUtils.isSupportedAggregate(expr, this.schema, expr.func))
                        this.register(0 /* invalidAggregateFunction */);
                }
                return aggregateExpr;
            };
            SQExprValidationVisitor.prototype.visitHierarchy = function (expr) {
                var fieldExpr = data.SQExprConverter.asFieldPattern(expr);
                if (fieldExpr) {
                    var fieldExprItem = fieldExpr.hierarchy;
                    if (fieldExprItem) {
                        this.validateHierarchy(fieldExprItem.schema, fieldExprItem.entity, fieldExprItem.name);
                    }
                    else {
                        this.register(5 /* invalidHierarchyReference */);
                    }
                }
                return expr;
            };
            SQExprValidationVisitor.prototype.visitHierarchyLevel = function (expr) {
                var fieldExpr = data.SQExprConverter.asFieldPattern(expr);
                if (fieldExpr) {
                    var hierarchyLevelFieldExprItem = fieldExpr.hierarchyLevel;
                    if (hierarchyLevelFieldExprItem) {
                        this.validateHierarchyLevel(hierarchyLevelFieldExprItem.schema, hierarchyLevelFieldExprItem.entity, hierarchyLevelFieldExprItem.name, hierarchyLevelFieldExprItem.level);
                    }
                    else if (!fieldExpr.columnHierarchyLevelVariation) {
                        this.register(6 /* invalidHierarchyLevelReference */);
                    }
                }
                return expr;
            };
            SQExprValidationVisitor.prototype.visitEntity = function (expr) {
                this.validateEntity(expr.schema, expr.entity);
                return expr;
            };
            SQExprValidationVisitor.prototype.visitContains = function (expr) {
                this.validateOperandsAndTypeForStartOrContains(expr.left, expr.right);
                return expr;
            };
            SQExprValidationVisitor.prototype.visitStartsWith = function (expr) {
                this.validateOperandsAndTypeForStartOrContains(expr.left, expr.right);
                return expr;
            };
            SQExprValidationVisitor.prototype.visitArithmetic = function (expr) {
                this.validateArithmeticTypes(expr.left, expr.right);
                return expr;
            };
            SQExprValidationVisitor.prototype.validateOperandsAndTypeForStartOrContains = function (left, right) {
                if (left instanceof SQColumnRefExpr) {
                    this.visitColumnRef(left);
                }
                else if (left instanceof SQHierarchyLevelExpr) {
                    this.visitHierarchyLevel(left);
                }
                else {
                    this.register(7 /* invalidLeftOperandType */);
                }
                if (!(right instanceof SQConstantExpr) || !right.type.text)
                    this.register(8 /* invalidRightOperandType */);
                else
                    this.validateCompatibleType(left, right);
            };
            SQExprValidationVisitor.prototype.validateArithmeticTypes = function (left, right) {
                if (!data.SQExprUtils.supportsArithmetic(left, this.schema))
                    this.register(7 /* invalidLeftOperandType */);
                if (!data.SQExprUtils.supportsArithmetic(right, this.schema))
                    this.register(8 /* invalidRightOperandType */);
            };
            SQExprValidationVisitor.prototype.validateCompatibleType = function (left, right) {
                var leftMetadata = left.getMetadata(this.schema), leftType = leftMetadata && leftMetadata.type, rightMetadata = right.getMetadata(this.schema), rightType = rightMetadata && rightMetadata.type;
                if (leftType && rightType && !leftType.isCompatibleFrom(rightType))
                    this.register(9 /* invalidValueType */);
            };
            SQExprValidationVisitor.prototype.validateEntity = function (schemaName, entityName) {
                var schema = this.schema.schema(schemaName);
                if (schema) {
                    var entity = schema.entities.withName(entityName);
                    if (entity)
                        return entity;
                    this.register(2 /* invalidEntityReference */);
                }
                else {
                    this.register(1 /* invalidSchemaReference */);
                }
            };
            SQExprValidationVisitor.prototype.validateHierarchy = function (schemaName, entityName, hierarchyName) {
                var entity = this.validateEntity(schemaName, entityName);
                if (entity) {
                    var hierarchy = entity.hierarchies.withName(hierarchyName);
                    if (hierarchy)
                        return hierarchy;
                    this.register(5 /* invalidHierarchyReference */);
                }
            };
            SQExprValidationVisitor.prototype.validateHierarchyLevel = function (schemaName, entityName, hierarchyName, levelName) {
                var hierarchy = this.validateHierarchy(schemaName, entityName, hierarchyName);
                if (hierarchy) {
                    var hierarchyLevel = hierarchy.levels.withName(levelName);
                    if (hierarchyLevel)
                        return hierarchyLevel;
                    this.register(6 /* invalidHierarchyLevelReference */);
                }
            };
            SQExprValidationVisitor.prototype.register = function (error) {
                if (!this.errors)
                    this.errors = [];
                this.errors.push(error);
            };
            SQExprValidationVisitor.prototype.isQueryable = function (fieldExpr) {
                var fieldExprItem = data.FieldExprPattern.toFieldExprEntityItemPattern(fieldExpr);
                if (fieldExpr.hierarchyLevel || fieldExpr.hierarchyLevelAggr) {
                    var hierarchyLevelConceptualProperty = data.SQHierarchyExprUtils.getConceptualHierarchyLevelFromExpr(this.schema, fieldExpr);
                    return hierarchyLevelConceptualProperty && hierarchyLevelConceptualProperty.column.queryable !== 1 /* Error */;
                }
                return this.schema.schema(fieldExprItem.schema).findProperty(fieldExprItem.entity, data.FieldExprPattern.getPropertyName(fieldExpr)).queryable !== 1 /* Error */;
            };
            return SQExprValidationVisitor;
        })(data.SQExprRewriter);
        data.SQExprValidationVisitor = SQExprValidationVisitor;
        /** Returns an expression's aggregate function, or undefined if it doesn't have one. */
        var SQExprAggregateInfoVisitor = (function (_super) {
            __extends(SQExprAggregateInfoVisitor, _super);
            function SQExprAggregateInfoVisitor() {
                _super.apply(this, arguments);
            }
            SQExprAggregateInfoVisitor.prototype.visitAggr = function (expr) {
                return expr.func;
            };
            SQExprAggregateInfoVisitor.prototype.visitDefault = function (expr) {
                return;
            };
            SQExprAggregateInfoVisitor.getAggregate = function (expr) {
                var visitor = new SQExprAggregateInfoVisitor();
                return expr.accept(visitor);
            };
            return SQExprAggregateInfoVisitor;
        })(data.DefaultSQExprVisitor);
        /** Returns a SQExprColumnRef expression or undefined.*/
        var SQExprColumnRefInfoVisitor = (function (_super) {
            __extends(SQExprColumnRefInfoVisitor, _super);
            function SQExprColumnRefInfoVisitor(schema) {
                _super.call(this);
                this.schema = schema;
            }
            SQExprColumnRefInfoVisitor.prototype.visitColumnRef = function (expr) {
                return expr;
            };
            SQExprColumnRefInfoVisitor.prototype.visitHierarchyLevel = function (expr) {
                var ref = expr.level;
                var hierarchy = (expr.arg);
                var sourceExpr = hierarchy.accept(this);
                if (hierarchy && hierarchy.arg instanceof SQPropertyVariationSourceExpr) {
                    var propertyVariationSource = hierarchy.arg;
                    var targetEntity = sourceExpr.getTargetEntityForVariation(this.schema, propertyVariationSource.name);
                    if (sourceExpr && targetEntity) {
                        var schemaName = (sourceExpr.source).schema;
                        var targetEntityExpr = SQExprBuilder.entity(schemaName, targetEntity);
                        var schemaHierarchy = this.schema.schema(schemaName).findHierarchy(targetEntity, hierarchy.hierarchy);
                        if (schemaHierarchy) {
                            for (var _i = 0, _a = schemaHierarchy.levels; _i < _a.length; _i++) {
                                var level = _a[_i];
                                if (level.name === ref)
                                    return new SQColumnRefExpr(targetEntityExpr, level.column.name);
                            }
                        }
                    }
                }
                else {
                    var entityExpr = (hierarchy.arg);
                    var hierarchyLevelRef = data.SQHierarchyExprUtils.getConceptualHierarchyLevel(this.schema, entityExpr.schema, entityExpr.entity, hierarchy.hierarchy, expr.level);
                    if (hierarchyLevelRef)
                        return new SQColumnRefExpr(hierarchy.arg, hierarchyLevelRef.column.name);
                }
            };
            SQExprColumnRefInfoVisitor.prototype.visitHierarchy = function (expr) {
                return expr.arg.accept(this);
            };
            SQExprColumnRefInfoVisitor.prototype.visitPropertyVariationSource = function (expr) {
                var propertyName = expr.property;
                return new SQColumnRefExpr(expr.arg, propertyName);
            };
            SQExprColumnRefInfoVisitor.prototype.visitDefault = function (expr) {
                return;
            };
            SQExprColumnRefInfoVisitor.getColumnRefSQExpr = function (schema, expr) {
                var visitor = new SQExprColumnRefInfoVisitor(schema);
                return expr.accept(visitor);
            };
            return SQExprColumnRefInfoVisitor;
        })(data.DefaultSQExprVisitor);
        var SQExprChangeAggregateRewriter = (function (_super) {
            __extends(SQExprChangeAggregateRewriter, _super);
            function SQExprChangeAggregateRewriter(func) {
                debug.assertValue(func, 'func');
                _super.call(this);
                this.func = func;
            }
            SQExprChangeAggregateRewriter.prototype.visitAggr = function (expr) {
                if (expr.func === this.func)
                    return expr;
                return new SQAggregationExpr(expr.arg, this.func);
            };
            SQExprChangeAggregateRewriter.prototype.visitColumnRef = function (expr) {
                return new SQAggregationExpr(expr, this.func);
            };
            SQExprChangeAggregateRewriter.rewrite = function (expr, func) {
                debug.assertValue(expr, 'expr');
                debug.assertValue(func, 'func');
                var rewriter = new SQExprChangeAggregateRewriter(func);
                return expr.accept(rewriter);
            };
            return SQExprChangeAggregateRewriter;
        })(SQExprRootRewriter);
        var SQExprRemoveAggregateRewriter = (function (_super) {
            __extends(SQExprRemoveAggregateRewriter, _super);
            function SQExprRemoveAggregateRewriter() {
                _super.apply(this, arguments);
            }
            SQExprRemoveAggregateRewriter.prototype.visitAggr = function (expr) {
                return expr.arg;
            };
            SQExprRemoveAggregateRewriter.rewrite = function (expr) {
                debug.assertValue(expr, 'expr');
                return expr.accept(SQExprRemoveAggregateRewriter.instance);
            };
            SQExprRemoveAggregateRewriter.instance = new SQExprRemoveAggregateRewriter();
            return SQExprRemoveAggregateRewriter;
        })(SQExprRootRewriter);
        var SQExprRemoveEntityVariablesRewriter = (function (_super) {
            __extends(SQExprRemoveEntityVariablesRewriter, _super);
            function SQExprRemoveEntityVariablesRewriter() {
                _super.apply(this, arguments);
            }
            SQExprRemoveEntityVariablesRewriter.prototype.visitEntity = function (expr) {
                if (expr.variable)
                    return SQExprBuilder.entity(expr.schema, expr.entity);
                return expr;
            };
            SQExprRemoveEntityVariablesRewriter.rewrite = function (expr) {
                debug.assertValue(expr, 'expr');
                return expr.accept(SQExprRemoveEntityVariablesRewriter.instance);
            };
            SQExprRemoveEntityVariablesRewriter.instance = new SQExprRemoveEntityVariablesRewriter();
            return SQExprRemoveEntityVariablesRewriter;
        })(data.SQExprRewriter);
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        var StringExtensions = jsCommon.StringExtensions;
        var SQExprUtils;
        (function (SQExprUtils) {
            /** Returns an array of supported aggregates for a given expr and role. */
            function getSupportedAggregates(expr, schema) {
                var emptyList = [];
                var metadata = getMetadataForUnderlyingType(expr, schema);
                // don't use expr.validate as validate will be using this function and we end up in a recursive loop
                if (!metadata)
                    return emptyList;
                var valueType = metadata.type, fieldKind = metadata.kind, isPropertyIdentity = metadata.idOnEntityKey, Agg = data.QueryAggregateFunction; // alias
                if (!valueType)
                    return emptyList;
                // Cannot aggregate on model measures
                if (fieldKind === 1 /* Measure */)
                    return emptyList;
                if (valueType.numeric || valueType.integer) {
                    var aggregates = [Agg.Sum, Agg.Avg, Agg.Min, Agg.Max, Agg.Count, Agg.CountNonNull, Agg.StandardDeviation, Agg.Variance];
                    var fieldExpr = data.SQExprConverter.asFieldPattern(expr);
                    var fieldExprItem = data.FieldExprPattern.toFieldExprEntityItemPattern(fieldExpr);
                    var currentSchema = schema.schema(fieldExprItem.schema);
                    if (currentSchema.capabilities.supportsMedian)
                        aggregates.push(Agg.Median);
                    return aggregates;
                }
                else if (valueType.text || valueType.bool || valueType.dateTime) {
                    // The supported aggregation types for an identity field are restricted to 'Count Non-Null' (e.g. for the field well aggregation options)
                    // but a valid semantic query can return a less-restricted aggregation option which we should honor. (e.g. this results from Q&A)
                    var distinctCountAggExists = data.SQExprInfo.getAggregate(expr) === Agg.Count;
                    if (isPropertyIdentity && !distinctCountAggExists)
                        return [Agg.CountNonNull];
                    return [Agg.Count, Agg.CountNonNull];
                }
                debug.assertFail("Unexpected expr or role.");
                return emptyList;
            }
            SQExprUtils.getSupportedAggregates = getSupportedAggregates;
            function supportsArithmetic(expr, schema) {
                var metadata = expr.getMetadata(schema), type = metadata && metadata.type;
                if (!metadata || !type) {
                    return false;
                }
                return type.numeric || type.dateTime || type.duration;
            }
            SQExprUtils.supportsArithmetic = supportsArithmetic;
            function isSupportedAggregate(expr, schema, aggregate) {
                var supportedAggregates = getSupportedAggregates(expr, schema);
                return _.contains(supportedAggregates, aggregate);
            }
            SQExprUtils.isSupportedAggregate = isSupportedAggregate;
            function indexOfExpr(items, searchElement) {
                debug.assertValue(items, 'items');
                debug.assertValue(searchElement, 'searchElement');
                for (var i = 0, len = items.length; i < len; i++) {
                    if (data.SQExpr.equals(items[i], searchElement))
                        return i;
                }
                return -1;
            }
            SQExprUtils.indexOfExpr = indexOfExpr;
            function sequenceEqual(x, y) {
                debug.assertValue(x, 'x');
                debug.assertValue(y, 'y');
                var len = x.length;
                if (len !== y.length)
                    return false;
                for (var i = 0; i < len; i++) {
                    if (!data.SQExpr.equals(x[i], y[i]))
                        return false;
                }
                return true;
            }
            SQExprUtils.sequenceEqual = sequenceEqual;
            function uniqueName(namedItems, expr, exprDefaultName) {
                debug.assertValue(namedItems, 'namedItems');
                // Determine all names
                var names = {};
                for (var i = 0, len = namedItems.length; i < len; i++)
                    names[namedItems[i].name] = true;
                return StringExtensions.findUniqueName(names, exprDefaultName || defaultName(expr));
            }
            SQExprUtils.uniqueName = uniqueName;
            /** Generates a default expression name  */
            function defaultName(expr, fallback) {
                if (fallback === void 0) { fallback = 'select'; }
                if (!expr)
                    return fallback;
                return expr.accept(SQExprDefaultNameGenerator.instance, fallback);
            }
            SQExprUtils.defaultName = defaultName;
            /** Gets a value indicating whether the expr is a model measure or an aggregate. */
            function isMeasure(expr) {
                debug.assertValue(expr, 'expr');
                return expr.accept(IsMeasureVisitor.instance);
            }
            SQExprUtils.isMeasure = isMeasure;
            /** Gets a value indicating whether the expr is an AnyValue or equals comparison to AnyValue*/
            function isAnyValue(expr) {
                debug.assertValue(expr, 'expr');
                return expr.accept(IsAnyValueVisitor.instance);
            }
            SQExprUtils.isAnyValue = isAnyValue;
            /** Gets a value indicating whether the expr is a DefaultValue or equals comparison to DefaultValue*/
            function isDefaultValue(expr) {
                debug.assertValue(expr, 'expr');
                return expr.accept(IsDefaultValueVisitor.instance);
            }
            SQExprUtils.isDefaultValue = isDefaultValue;
            function discourageAggregation(expr, schema) {
                var capabilities = getSchemaCapabilities(expr, schema);
                return capabilities && capabilities.discourageQueryAggregateUsage;
            }
            SQExprUtils.discourageAggregation = discourageAggregation;
            function getAggregateBehavior(expr, schema) {
                debug.assertValue(expr, 'expr');
                debug.assertValue(schema, 'schema');
                var column = getConceptualColumn(expr, schema);
                if (column)
                    return column.aggregateBehavior;
            }
            SQExprUtils.getAggregateBehavior = getAggregateBehavior;
            function getSchemaCapabilities(expr, schema) {
                debug.assertValue(expr, 'expr');
                debug.assertValue(schema, 'schema');
                var field = data.SQExprConverter.asFieldPattern(expr);
                if (!field)
                    return;
                var fieldExprItem = data.FieldExprPattern.toFieldExprEntityItemPattern(field);
                var conceptualSchema = schema.schema(fieldExprItem.schema);
                if (conceptualSchema)
                    return conceptualSchema.capabilities;
            }
            SQExprUtils.getSchemaCapabilities = getSchemaCapabilities;
            function getKpiMetadata(expr, schema) {
                var kpiStatusProperty = getKpiStatusProperty(expr, schema);
                if (kpiStatusProperty)
                    return kpiStatusProperty.kpiValue.measure.kpi.statusMetadata;
                var kpiTrendProperty = getKpiTrendProperty(expr, schema);
                if (kpiTrendProperty)
                    return kpiTrendProperty.kpiValue.measure.kpi.trendMetadata;
            }
            SQExprUtils.getKpiMetadata = getKpiMetadata;
            function getKpiStatusProperty(expr, schema) {
                var property = expr.getConceptualProperty(schema);
                if (!property)
                    return;
                var kpiValue = property.kpiValue;
                if (kpiValue && kpiValue.measure.kpi.status === property)
                    return property;
            }
            function getKpiTrendProperty(expr, schema) {
                var property = expr.getConceptualProperty(schema);
                if (!property)
                    return;
                var kpiValue = property.kpiValue;
                if (kpiValue && kpiValue.measure.kpi.trend === property)
                    return property;
            }
            function getMetadataForUnderlyingType(expr, schema) {
                // Unwrap the aggregate (if the expr has one), and look at the underlying type.
                var metadata = data.SQExprBuilder.removeAggregate(expr).getMetadata(schema);
                if (!metadata)
                    metadata = expr.getMetadata(schema);
                return metadata;
            }
            function getDefaultValue(fieldSQExpr, schema) {
                var column = getConceptualColumn(fieldSQExpr, schema);
                if (column)
                    return column.defaultValue;
            }
            SQExprUtils.getDefaultValue = getDefaultValue;
            function getConceptualColumn(fieldSQExpr, schema) {
                if (!fieldSQExpr || !schema)
                    return;
                var sqField = data.SQExprConverter.asFieldPattern(fieldSQExpr);
                if (!sqField)
                    return;
                var column = sqField.column;
                if (column) {
                    if (schema.schema(column.schema) && sqField.column.name) {
                        var property = schema.schema(column.schema).findProperty(column.entity, sqField.column.name);
                        if (property)
                            return property.column;
                    }
                }
                else {
                    var hierarchyLevelField = sqField.hierarchyLevel;
                    if (hierarchyLevelField) {
                        var fieldExprItem = data.FieldExprPattern.toFieldExprEntityItemPattern(sqField);
                        var schemaName = fieldExprItem.schema;
                        if (schema.schema(schemaName)) {
                            var hierarchy = schema.schema(schemaName)
                                .findHierarchy(fieldExprItem.entity, hierarchyLevelField.name);
                            if (hierarchy) {
                                var hierarchyLevel = hierarchy.levels.withName(hierarchyLevelField.level);
                                if (hierarchyLevel && hierarchyLevel.column)
                                    return hierarchyLevel.column.column;
                            }
                        }
                    }
                }
            }
            function getDefaultValues(fieldSQExprs, schema) {
                if (_.isEmpty(fieldSQExprs) || !schema)
                    return;
                var result = [];
                for (var _i = 0; _i < fieldSQExprs.length; _i++) {
                    var sqExpr = fieldSQExprs[_i];
                    var defaultValue = getDefaultValue(sqExpr, schema);
                    if (defaultValue)
                        result.push(defaultValue);
                }
                return result;
            }
            SQExprUtils.getDefaultValues = getDefaultValues;
            /** Return compare or and expression for key value pairs. */
            function getDataViewScopeIdentityComparisonExpr(fieldsExpr, values) {
                debug.assert(fieldsExpr.length === values.length, "fileds and values need to be the same size");
                var compareExprs = [];
                for (var i = 0; i < fieldsExpr.length; i++) {
                    compareExprs.push(data.SQExprBuilder.compare(data.QueryComparisonKind.Equal, fieldsExpr[i], values[i]));
                }
                if (_.isEmpty(compareExprs))
                    return;
                var resultExpr;
                for (var _i = 0; _i < compareExprs.length; _i++) {
                    var compareExpr = compareExprs[_i];
                    resultExpr = data.SQExprBuilder.and(resultExpr, compareExpr);
                }
                return resultExpr;
            }
            SQExprUtils.getDataViewScopeIdentityComparisonExpr = getDataViewScopeIdentityComparisonExpr;
            function getActiveTablesNames(queryDefn) {
                var tables = [];
                if (queryDefn) {
                    var selectedItems = queryDefn.from();
                    if (selectedItems !== undefined) {
                        for (var _i = 0, _a = selectedItems.keys(); _i < _a.length; _i++) {
                            var key = _a[_i];
                            var entityObj = selectedItems.entity(key);
                            if (tables.indexOf(entityObj.entity) < 0)
                                tables.push(entityObj.entity);
                        }
                    }
                }
                return tables;
            }
            SQExprUtils.getActiveTablesNames = getActiveTablesNames;
            var SQExprDefaultNameGenerator = (function (_super) {
                __extends(SQExprDefaultNameGenerator, _super);
                function SQExprDefaultNameGenerator() {
                    _super.apply(this, arguments);
                }
                SQExprDefaultNameGenerator.prototype.visitEntity = function (expr) {
                    return expr.entity;
                };
                SQExprDefaultNameGenerator.prototype.visitColumnRef = function (expr) {
                    return expr.source.accept(this) + '.' + expr.ref;
                };
                SQExprDefaultNameGenerator.prototype.visitMeasureRef = function (expr, fallback) {
                    return expr.source.accept(this) + '.' + expr.ref;
                };
                SQExprDefaultNameGenerator.prototype.visitAggr = function (expr, fallback) {
                    return data.QueryAggregateFunction[expr.func] + '(' + expr.arg.accept(this) + ')';
                };
                SQExprDefaultNameGenerator.prototype.visitArithmetic = function (expr, fallback) {
                    return powerbi.data.getArithmeticOperatorName(expr.operator) + '(' + expr.left.accept(this) + ', ' + expr.right.accept(this) + ')';
                };
                SQExprDefaultNameGenerator.prototype.visitConstant = function (expr) {
                    return 'const';
                };
                SQExprDefaultNameGenerator.prototype.visitDefault = function (expr, fallback) {
                    return fallback || 'expr';
                };
                SQExprDefaultNameGenerator.instance = new SQExprDefaultNameGenerator();
                return SQExprDefaultNameGenerator;
            })(data.DefaultSQExprVisitorWithArg);
            var IsMeasureVisitor = (function (_super) {
                __extends(IsMeasureVisitor, _super);
                function IsMeasureVisitor() {
                    _super.apply(this, arguments);
                }
                IsMeasureVisitor.prototype.visitMeasureRef = function (expr) {
                    return true;
                };
                IsMeasureVisitor.prototype.visitAggr = function (expr) {
                    return true;
                };
                IsMeasureVisitor.prototype.visitArithmetic = function (expr) {
                    return true;
                };
                IsMeasureVisitor.prototype.visitDefault = function (expr) {
                    return false;
                };
                IsMeasureVisitor.instance = new IsMeasureVisitor();
                return IsMeasureVisitor;
            })(data.DefaultSQExprVisitor);
            var IsDefaultValueVisitor = (function (_super) {
                __extends(IsDefaultValueVisitor, _super);
                function IsDefaultValueVisitor() {
                    _super.apply(this, arguments);
                }
                IsDefaultValueVisitor.prototype.visitCompare = function (expr) {
                    if (expr.comparison !== data.QueryComparisonKind.Equal)
                        return false;
                    return expr.right.accept(this);
                };
                IsDefaultValueVisitor.prototype.visitAnd = function (expr) {
                    return expr.left.accept(this) && expr.right.accept(this);
                };
                IsDefaultValueVisitor.prototype.visitDefaultValue = function (expr) {
                    return true;
                };
                IsDefaultValueVisitor.prototype.visitDefault = function (expr) {
                    return false;
                };
                IsDefaultValueVisitor.instance = new IsDefaultValueVisitor();
                return IsDefaultValueVisitor;
            })(data.DefaultSQExprVisitor);
            var IsAnyValueVisitor = (function (_super) {
                __extends(IsAnyValueVisitor, _super);
                function IsAnyValueVisitor() {
                    _super.apply(this, arguments);
                }
                IsAnyValueVisitor.prototype.visitCompare = function (expr) {
                    if (expr.comparison !== data.QueryComparisonKind.Equal)
                        return false;
                    return expr.right.accept(this);
                };
                IsAnyValueVisitor.prototype.visitAnd = function (expr) {
                    return expr.left.accept(this) && expr.right.accept(this);
                };
                IsAnyValueVisitor.prototype.visitAnyValue = function (expr) {
                    return true;
                };
                IsAnyValueVisitor.prototype.visitDefault = function (expr) {
                    return false;
                };
                IsAnyValueVisitor.instance = new IsAnyValueVisitor();
                return IsAnyValueVisitor;
            })(data.DefaultSQExprVisitor);
        })(SQExprUtils = data.SQExprUtils || (data.SQExprUtils = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        var SemanticQueryRewriter = (function () {
            function SemanticQueryRewriter(exprRewriter) {
                this.exprRewriter = exprRewriter;
            }
            SemanticQueryRewriter.prototype.rewriteFrom = function (fromValue) {
                var fromContents = {};
                var originalFrom = fromValue, originalFromKeys = originalFrom.keys();
                for (var i = 0, len = originalFromKeys.length; i < len; i++) {
                    var keyName = originalFromKeys[i], originalEntityRef = originalFrom.entity(keyName), originalEntityExpr = data.SQExprBuilder.entity(originalEntityRef.schema, originalEntityRef.entity, keyName), updatedEntityExpr = originalEntityExpr.accept(this.exprRewriter);
                    fromContents[keyName] = {
                        schema: updatedEntityExpr.schema,
                        entity: updatedEntityExpr.entity,
                    };
                }
                return new data.SQFrom(fromContents);
            };
            SemanticQueryRewriter.prototype.rewriteSelect = function (selectItems, from) {
                debug.assertValue(selectItems, 'selectItems');
                debug.assertValue(from, 'from');
                return this.rewriteNamedSQExpressions(selectItems, from);
            };
            SemanticQueryRewriter.prototype.rewriteGroupBy = function (groupByitems, from) {
                debug.assertAnyValue(groupByitems, 'groupByitems');
                debug.assertValue(from, 'from');
                if (_.isEmpty(groupByitems))
                    return;
                return this.rewriteNamedSQExpressions(groupByitems, from);
            };
            SemanticQueryRewriter.prototype.rewriteNamedSQExpressions = function (expressions, from) {
                var _this = this;
                debug.assertValue(expressions, 'expressions');
                return _.map(expressions, function (item) {
                    return {
                        name: item.name,
                        expr: data.SQExprRewriterWithSourceRenames.rewrite(item.expr.accept(_this.exprRewriter), from)
                    };
                });
            };
            SemanticQueryRewriter.prototype.rewriteOrderBy = function (orderByItems, from) {
                debug.assertAnyValue(orderByItems, 'orderByItems');
                debug.assertValue(from, 'from');
                if (_.isEmpty(orderByItems))
                    return;
                var orderBy = [];
                for (var i = 0, len = orderByItems.length; i < len; i++) {
                    var item = orderByItems[i], updatedExpr = data.SQExprRewriterWithSourceRenames.rewrite(item.expr.accept(this.exprRewriter), from);
                    orderBy.push({
                        direction: item.direction,
                        expr: updatedExpr,
                    });
                }
                return orderBy;
            };
            SemanticQueryRewriter.prototype.rewriteWhere = function (whereItems, from) {
                var _this = this;
                debug.assertAnyValue(whereItems, 'whereItems');
                debug.assertValue(from, 'from');
                if (_.isEmpty(whereItems))
                    return;
                var where = [];
                for (var i = 0, len = whereItems.length; i < len; i++) {
                    var originalWhere = whereItems[i];
                    var updatedWhere = {
                        condition: data.SQExprRewriterWithSourceRenames.rewrite(originalWhere.condition.accept(this.exprRewriter), from),
                    };
                    if (originalWhere.target)
                        updatedWhere.target = _.map(originalWhere.target, function (e) { return data.SQExprRewriterWithSourceRenames.rewrite(e.accept(_this.exprRewriter), from); });
                    where.push(updatedWhere);
                }
                return where;
            };
            return SemanticQueryRewriter;
        })();
        data.SemanticQueryRewriter = SemanticQueryRewriter;
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        var ArrayExtensions = jsCommon.ArrayExtensions;
        /**
         * Represents a semantic query that is:
         * 1) Round-trippable with a JSON QueryDefinition.
         * 2) Immutable
         * 3) Long-lived and does not have strong references to a conceptual model (only names).
         */
        var SemanticQuery = (function () {
            function SemanticQuery(from, where, orderBy, select, groupBy) {
                debug.assertValue(from, 'from');
                debug.assertValue(select, 'select');
                this.fromValue = from;
                this.whereItems = where;
                this.orderByItems = orderBy;
                this.selectItems = select;
                this.groupByItems = groupBy;
            }
            SemanticQuery.create = function () {
                if (!SemanticQuery.empty)
                    SemanticQuery.empty = new SemanticQuery(new SQFrom(), null, null, [], null);
                return SemanticQuery.empty;
            };
            SemanticQuery.createWithTrimmedFrom = function (from, where, orderBy, select, groupBy) {
                var unreferencedKeyFinder = new UnreferencedKeyFinder(from.keys());
                // Where
                if (where) {
                    for (var i = 0, len = where.length; i < len; i++) {
                        var filter = where[i];
                        filter.condition.accept(unreferencedKeyFinder);
                        var filterTarget = filter.target;
                        if (filterTarget) {
                            for (var j = 0, jlen = filterTarget.length; j < jlen; j++)
                                if (filterTarget[j])
                                    filterTarget[j].accept(unreferencedKeyFinder);
                        }
                    }
                }
                // OrderBy
                if (orderBy) {
                    for (var i = 0, len = orderBy.length; i < len; i++)
                        orderBy[i].expr.accept(unreferencedKeyFinder);
                }
                // Select
                for (var i = 0, len = select.length; i < len; i++)
                    select[i].expr.accept(unreferencedKeyFinder);
                // GroupBy
                if (groupBy) {
                    for (var i = 0, len = groupBy.length; i < len; i++)
                        groupBy[i].expr.accept(unreferencedKeyFinder);
                }
                var unreferencedKeys = unreferencedKeyFinder.result();
                for (var i = 0, len = unreferencedKeys.length; i < len; i++)
                    from.remove(unreferencedKeys[i]);
                return new SemanticQuery(from, where, orderBy, select, groupBy);
            };
            SemanticQuery.prototype.from = function () {
                return this.fromValue.clone();
            };
            SemanticQuery.prototype.select = function (values) {
                if (_.isEmpty(arguments))
                    return this.getSelect();
                return this.setSelect(values);
            };
            SemanticQuery.prototype.getSelect = function () {
                return SemanticQuery.createNamedExpressionArray(this.selectItems);
            };
            SemanticQuery.createNamedExpressionArray = function (items) {
                return ArrayExtensions.extendWithName(_.map(items, function (s) {
                    return {
                        name: s.name,
                        expr: s.expr,
                    };
                }));
            };
            SemanticQuery.prototype.setSelect = function (values) {
                var from = this.fromValue.clone();
                var selectItems = SemanticQuery.rewriteExpressionsWithSourceRenames(values, from);
                return SemanticQuery.createWithTrimmedFrom(from, this.whereItems, this.orderByItems, selectItems, this.groupByItems);
            };
            SemanticQuery.rewriteExpressionsWithSourceRenames = function (values, from) {
                var items = [];
                for (var i = 0, len = values.length; i < len; i++) {
                    var value = values[i];
                    items.push({
                        name: value.name,
                        expr: SQExprRewriterWithSourceRenames.rewrite(value.expr, from)
                    });
                }
                return items;
            };
            /** Removes the given expression from the select. */
            SemanticQuery.prototype.removeSelect = function (expr) {
                debug.assertValue(expr, 'expr');
                var originalItems = this.selectItems, selectItems = [];
                for (var i = 0, len = originalItems.length; i < len; i++) {
                    var originalExpr = originalItems[i];
                    if (data.SQExpr.equals(originalExpr.expr, expr))
                        continue;
                    selectItems.push(originalExpr);
                }
                return SemanticQuery.createWithTrimmedFrom(this.fromValue.clone(), this.whereItems, this.orderByItems, selectItems, this.groupByItems);
            };
            /** Removes the given expression from order by. */
            SemanticQuery.prototype.removeOrderBy = function (expr) {
                var sorts = this.orderBy();
                for (var i = sorts.length - 1; i >= 0; i--) {
                    if (data.SQExpr.equals(sorts[i].expr, expr))
                        sorts.splice(i, 1);
                }
                return SemanticQuery.createWithTrimmedFrom(this.fromValue.clone(), this.whereItems, sorts, this.selectItems, this.groupByItems);
            };
            SemanticQuery.prototype.selectNameOf = function (expr) {
                var index = data.SQExprUtils.indexOfExpr(_.map(this.selectItems, function (s) { return s.expr; }), expr);
                if (index >= 0)
                    return this.selectItems[index].name;
            };
            SemanticQuery.prototype.setSelectAt = function (index, expr) {
                debug.assertValue(expr, 'expr');
                if (index >= this.selectItems.length)
                    return;
                var select = this.select(), from = this.fromValue.clone(), originalName = select[index].name;
                select[index] = {
                    name: originalName,
                    expr: SQExprRewriterWithSourceRenames.rewrite(expr, from)
                };
                return SemanticQuery.createWithTrimmedFrom(from, this.whereItems, this.orderByItems, select, this.groupByItems);
            };
            /** Adds a the expression to the select clause. */
            SemanticQuery.prototype.addSelect = function (expr, exprName) {
                debug.assertValue(expr, 'expr');
                var selectItems = this.select(), from = this.fromValue.clone();
                selectItems.push({
                    name: data.SQExprUtils.uniqueName(selectItems, expr, exprName),
                    expr: SQExprRewriterWithSourceRenames.rewrite(expr, from)
                });
                return SemanticQuery.createWithTrimmedFrom(from, this.whereItems, this.orderByItems, selectItems, this.groupByItems);
            };
            SemanticQuery.prototype.groupBy = function (values) {
                if (_.isEmpty(arguments))
                    return this.getGroupBy();
                return this.setGroupBy(values);
            };
            SemanticQuery.prototype.getGroupBy = function () {
                return SemanticQuery.createNamedExpressionArray(this.groupByItems);
            };
            SemanticQuery.prototype.setGroupBy = function (values) {
                var from = this.fromValue.clone();
                var groupByItems = SemanticQuery.rewriteExpressionsWithSourceRenames(values, from);
                return SemanticQuery.createWithTrimmedFrom(from, this.whereItems, this.orderByItems, this.selectItems, groupByItems);
            };
            SemanticQuery.prototype.orderBy = function (values) {
                if (_.isEmpty(arguments))
                    return this.getOrderBy();
                return this.setOrderBy(values);
            };
            SemanticQuery.prototype.getOrderBy = function () {
                var result = [];
                var orderBy = this.orderByItems;
                if (orderBy) {
                    for (var i = 0, len = orderBy.length; i < len; i++) {
                        var clause = orderBy[i];
                        result.push({
                            expr: clause.expr,
                            direction: clause.direction,
                        });
                    }
                }
                return result;
            };
            SemanticQuery.prototype.setOrderBy = function (values) {
                debug.assertValue(values, 'values');
                var updatedOrderBy = [], from = this.fromValue.clone();
                for (var i = 0, len = values.length; i < len; i++) {
                    var clause = values[i];
                    updatedOrderBy.push({
                        expr: SQExprRewriterWithSourceRenames.rewrite(clause.expr, from),
                        direction: clause.direction,
                    });
                }
                return SemanticQuery.createWithTrimmedFrom(from, this.whereItems, updatedOrderBy, this.selectItems, this.groupByItems);
            };
            SemanticQuery.prototype.where = function (values) {
                if (_.isEmpty(arguments))
                    return this.getWhere();
                return this.setWhere(values);
            };
            SemanticQuery.prototype.getWhere = function () {
                var result = [];
                var whereItems = this.whereItems;
                if (whereItems) {
                    for (var i = 0, len = whereItems.length; i < len; i++)
                        result.push(whereItems[i]);
                }
                return result;
            };
            SemanticQuery.prototype.setWhere = function (values) {
                debug.assertValue(values, 'values');
                var updatedWhere = [], from = this.fromValue.clone();
                for (var i = 0, len = values.length; i < len; i++) {
                    var filter = values[i];
                    var updatedFilter = {
                        condition: SQExprRewriterWithSourceRenames.rewrite(filter.condition, from),
                    };
                    var filterTarget = filter.target;
                    if (filterTarget) {
                        updatedFilter.target = [];
                        for (var j = 0, jlen = filterTarget.length; j < jlen; j++)
                            if (filterTarget[j]) {
                                var updatedTarget = SQExprRewriterWithSourceRenames.rewrite(filterTarget[j], from);
                                updatedFilter.target.push(updatedTarget);
                            }
                    }
                    updatedWhere.push(updatedFilter);
                }
                return SemanticQuery.createWithTrimmedFrom(from, updatedWhere, this.orderByItems, this.selectItems, this.groupByItems);
            };
            SemanticQuery.prototype.addWhere = function (filter) {
                debug.assertValue(filter, 'filter');
                var updatedWhere = this.where(), incomingWhere = filter.where(), from = this.fromValue.clone();
                for (var i = 0, len = incomingWhere.length; i < len; i++) {
                    var clause = incomingWhere[i];
                    var updatedClause = {
                        condition: SQExprRewriterWithSourceRenames.rewrite(clause.condition, from),
                    };
                    if (clause.target)
                        updatedClause.target = _.map(clause.target, function (t) { return SQExprRewriterWithSourceRenames.rewrite(t, from); });
                    updatedWhere.push(updatedClause);
                }
                return SemanticQuery.createWithTrimmedFrom(from, updatedWhere, this.orderByItems, this.selectItems, this.groupByItems);
            };
            SemanticQuery.prototype.rewrite = function (exprRewriter) {
                var rewriter = new data.SemanticQueryRewriter(exprRewriter);
                var from = rewriter.rewriteFrom(this.fromValue);
                var where = rewriter.rewriteWhere(this.whereItems, from);
                var orderBy = rewriter.rewriteOrderBy(this.orderByItems, from);
                var select = rewriter.rewriteSelect(this.selectItems, from);
                var groupBy = rewriter.rewriteGroupBy(this.groupByItems, from);
                return SemanticQuery.createWithTrimmedFrom(from, where, orderBy, select, groupBy);
            };
            return SemanticQuery;
        })();
        data.SemanticQuery = SemanticQuery;
        /** Represents a semantic filter condition.  Round-trippable with a JSON FilterDefinition.  Instances of this class are immutable. */
        var SemanticFilter = (function () {
            function SemanticFilter(from, where) {
                debug.assertValue(from, 'from');
                debug.assertValue(where, 'where');
                this.fromValue = from;
                this.whereItems = where;
            }
            SemanticFilter.fromSQExpr = function (contract) {
                debug.assertValue(contract, 'contract');
                var from = new SQFrom();
                var rewrittenContract = SQExprRewriterWithSourceRenames.rewrite(contract, from);
                // DEVNOTE targets of some filters are visual specific and will get resolved only during query generation.
                //         Thus not setting a target here.
                var where = [{
                        condition: rewrittenContract
                    }];
                return new SemanticFilter(from, where);
            };
            SemanticFilter.getDefaultValueFilter = function (fieldSQExprs) {
                return SemanticFilter.getDataViewScopeIdentityComparisonFilters(fieldSQExprs, data.SQExprBuilder.defaultValue());
            };
            SemanticFilter.getAnyValueFilter = function (fieldSQExprs) {
                return SemanticFilter.getDataViewScopeIdentityComparisonFilters(fieldSQExprs, data.SQExprBuilder.anyValue());
            };
            SemanticFilter.getDataViewScopeIdentityComparisonFilters = function (fieldSQExprs, value) {
                debug.assertValue(fieldSQExprs, 'fieldSQExprs');
                debug.assertValue(value, 'value');
                if (fieldSQExprs instanceof Array) {
                    var values = Array.apply(null, Array(fieldSQExprs.length)).map(function () { return value; });
                    return SemanticFilter.fromSQExpr(data.SQExprUtils.getDataViewScopeIdentityComparisonExpr(fieldSQExprs, values));
                }
                return SemanticFilter.fromSQExpr(data.SQExprBuilder.equal(fieldSQExprs, value));
            };
            SemanticFilter.prototype.from = function () {
                return this.fromValue.clone();
            };
            SemanticFilter.prototype.conditions = function () {
                var expressions = [];
                var where = this.whereItems;
                for (var i = 0, len = where.length; i < len; i++) {
                    var filter = where[i];
                    expressions.push(filter.condition);
                }
                return expressions;
            };
            SemanticFilter.prototype.where = function () {
                var result = [];
                var whereItems = this.whereItems;
                for (var i = 0, len = whereItems.length; i < len; i++)
                    result.push(whereItems[i]);
                return result;
            };
            SemanticFilter.prototype.rewrite = function (exprRewriter) {
                var rewriter = new data.SemanticQueryRewriter(exprRewriter);
                var from = rewriter.rewriteFrom(this.fromValue);
                var where = rewriter.rewriteWhere(this.whereItems, from);
                return new SemanticFilter(from, where);
            };
            SemanticFilter.prototype.validate = function (schema, errors) {
                var validator = new data.SQExprValidationVisitor(schema, errors);
                this.rewrite(validator);
                return validator.errors;
            };
            /** Merges a list of SemanticFilters into one. */
            SemanticFilter.merge = function (filters) {
                if (_.isEmpty(filters))
                    return null;
                if (filters.length === 1)
                    return filters[0];
                var firstFilter = filters[0];
                var from = firstFilter.from(), where = ArrayExtensions.take(firstFilter.whereItems, firstFilter.whereItems.length);
                for (var i = 1, len = filters.length; i < len; i++)
                    SemanticFilter.applyFilter(filters[i], from, where);
                return new SemanticFilter(from, where);
            };
            SemanticFilter.isDefaultFilter = function (filter) {
                if (!filter || filter.where().length !== 1)
                    return false;
                return data.SQExprUtils.isDefaultValue(filter.where()[0].condition);
            };
            SemanticFilter.isAnyFilter = function (filter) {
                if (!filter || filter.where().length !== 1)
                    return false;
                return data.SQExprUtils.isAnyValue(filter.where()[0].condition);
            };
            SemanticFilter.isSameFilter = function (leftFilter, rightFilter) {
                if (jsCommon.JsonComparer.equals(leftFilter, rightFilter)) {
                    return !((SemanticFilter.isDefaultFilter(leftFilter) && SemanticFilter.isAnyFilter(rightFilter))
                        || (SemanticFilter.isAnyFilter(leftFilter) && SemanticFilter.isDefaultFilter(rightFilter)));
                }
                return false;
            };
            SemanticFilter.applyFilter = function (filter, from, where) {
                debug.assertValue(filter, 'filter');
                debug.assertValue(from, 'from');
                debug.assertValue(where, 'where');
                // Where
                var filterWhereItems = filter.whereItems;
                for (var i = 0; i < filterWhereItems.length; i++) {
                    var filterWhereItem = filterWhereItems[i];
                    var updatedWhereItem = {
                        condition: SQExprRewriterWithSourceRenames.rewrite(filterWhereItem.condition, from),
                    };
                    if (filterWhereItem.target)
                        updatedWhereItem.target = _.map(filterWhereItem.target, function (e) { return SQExprRewriterWithSourceRenames.rewrite(e, from); });
                    where.push(updatedWhereItem);
                }
            };
            return SemanticFilter;
        })();
        data.SemanticFilter = SemanticFilter;
        /** Represents a SemanticQuery/SemanticFilter from clause. */
        var SQFrom = (function () {
            function SQFrom(items) {
                this.items = items || {};
            }
            SQFrom.prototype.keys = function () {
                return Object.keys(this.items);
            };
            SQFrom.prototype.entity = function (key) {
                return this.items[key];
            };
            SQFrom.prototype.ensureEntity = function (entity, desiredVariableName) {
                debug.assertValue(entity, 'entity');
                // 1) Reuse a reference to the entity among the already referenced
                var keys = this.keys();
                for (var i_1 = 0, len = keys.length; i_1 < len; i_1++) {
                    var key = keys[i_1], item = this.items[key];
                    if (item && entity.entity === item.entity && entity.schema === item.schema)
                        return { name: key };
                }
                // 2) Add a reference to the entity
                var candidateName = desiredVariableName || this.candidateName(entity.entity), uniqueName = candidateName, i = 2;
                while (this.items[uniqueName]) {
                    uniqueName = candidateName + i++;
                }
                this.items[uniqueName] = entity;
                return { name: uniqueName, new: true };
            };
            SQFrom.prototype.remove = function (key) {
                delete this.items[key];
            };
            /** Converts the entity name into a short reference name.  Follows the Semantic Query convention of a short name. */
            SQFrom.prototype.candidateName = function (ref) {
                debug.assertValue(ref, 'ref');
                var idx = ref.lastIndexOf('.');
                if (idx >= 0 && (idx !== ref.length - 1))
                    ref = ref.substr(idx + 1);
                return ref.substring(0, 1).toLowerCase();
            };
            SQFrom.prototype.clone = function () {
                // NOTE: consider deprecating this method and instead making QueryFrom be CopyOnWrite (currently we proactively clone).
                var cloned = new SQFrom();
                // NOTE: we use extend rather than prototypical inheritance on items because we use Object.keys.
                $.extend(cloned.items, this.items);
                return cloned;
            };
            return SQFrom;
        })();
        data.SQFrom = SQFrom;
        var SQExprRewriterWithSourceRenames = (function (_super) {
            __extends(SQExprRewriterWithSourceRenames, _super);
            function SQExprRewriterWithSourceRenames(renames) {
                debug.assertValue(renames, 'renames');
                _super.call(this);
                this.renames = renames;
            }
            SQExprRewriterWithSourceRenames.prototype.visitEntity = function (expr) {
                var updatedName = this.renames[expr.entity];
                if (updatedName)
                    return new data.SQEntityExpr(expr.schema, expr.entity, updatedName);
                return _super.prototype.visitEntity.call(this, expr);
            };
            SQExprRewriterWithSourceRenames.prototype.rewriteFilter = function (filter) {
                debug.assertValue(filter, 'filter');
                var updatedTargets = undefined;
                if (filter.target)
                    updatedTargets = this.rewriteArray(filter.target);
                var updatedCondition = filter.condition.accept(this);
                if (filter.condition === updatedCondition && filter.target === updatedTargets)
                    return filter;
                var updatedFilter = {
                    condition: updatedCondition,
                };
                if (updatedTargets)
                    updatedFilter.target = updatedTargets;
                return updatedFilter;
            };
            SQExprRewriterWithSourceRenames.prototype.rewriteArray = function (exprs) {
                debug.assertValue(exprs, 'exprs');
                var updatedExprs;
                for (var i = 0, len = exprs.length; i < len; i++) {
                    var expr = exprs[i], rewrittenExpr = expr.accept(this);
                    if (expr !== rewrittenExpr && !updatedExprs)
                        updatedExprs = ArrayExtensions.take(exprs, i);
                    if (updatedExprs)
                        updatedExprs.push(rewrittenExpr);
                }
                return updatedExprs || exprs;
            };
            SQExprRewriterWithSourceRenames.rewrite = function (expr, from) {
                debug.assertValue(expr, 'expr');
                debug.assertValue(from, 'from');
                var renames = QuerySourceRenameDetector.run(expr, from);
                var rewriter = new SQExprRewriterWithSourceRenames(renames);
                return expr.accept(rewriter);
            };
            return SQExprRewriterWithSourceRenames;
        })(data.SQExprRewriter);
        data.SQExprRewriterWithSourceRenames = SQExprRewriterWithSourceRenames;
        /** Responsible for updating a QueryFrom based on SQExpr references. */
        var QuerySourceRenameDetector = (function (_super) {
            __extends(QuerySourceRenameDetector, _super);
            function QuerySourceRenameDetector(from) {
                debug.assertValue(from, 'from');
                _super.call(this);
                this.from = from;
                this.renames = {};
            }
            QuerySourceRenameDetector.run = function (expr, from) {
                var detector = new QuerySourceRenameDetector(from);
                expr.accept(detector);
                return detector.renames;
            };
            QuerySourceRenameDetector.prototype.visitEntity = function (expr) {
                // TODO: Renames must take the schema into account, not just entity set name.
                var existingEntity = this.from.entity(expr.variable);
                if (existingEntity && existingEntity.schema === expr.schema && existingEntity.entity === expr.entity)
                    return;
                var actualEntity = this.from.ensureEntity({
                    schema: expr.schema,
                    entity: expr.entity,
                }, expr.variable);
                this.renames[expr.entity] = actualEntity.name;
            };
            return QuerySourceRenameDetector;
        })(data.DefaultSQExprVisitorWithTraversal);
        /** Visitor for finding unreferenced sources. */
        var UnreferencedKeyFinder = (function (_super) {
            __extends(UnreferencedKeyFinder, _super);
            function UnreferencedKeyFinder(keys) {
                debug.assertValue(keys, 'keys');
                _super.call(this);
                this.keys = keys;
            }
            UnreferencedKeyFinder.prototype.visitEntity = function (expr) {
                var index = this.keys.indexOf(expr.variable);
                if (index >= 0)
                    this.keys.splice(index, 1);
            };
            UnreferencedKeyFinder.prototype.result = function () {
                return this.keys;
            };
            return UnreferencedKeyFinder;
        })(data.DefaultSQExprVisitorWithTraversal);
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data_4) {
        var DataViewTransform = powerbi.data.DataViewTransform;
        var SQExprBuilder = powerbi.data.SQExprBuilder;
        function createCategoricalDataViewBuilder() {
            return new CategoricalDataViewBuilder();
        }
        data_4.createCategoricalDataViewBuilder = createCategoricalDataViewBuilder;
        var CategoricalDataViewBuilder = (function () {
            function CategoricalDataViewBuilder() {
                this.categories = [];
                this.measureColumns = [];
                this.columnIndex = 0;
            }
            CategoricalDataViewBuilder.prototype.withCategory = function (options) {
                var categoryValues = options.values, identityFrom = options.identityFrom, type = options.source.type;
                var categoryColumn = {
                    source: options.source,
                    identityFields: options.identityFrom.fields,
                    identity: options.identityFrom.identities || [],
                    values: categoryValues,
                };
                if (!options.identityFrom.identities) {
                    for (var categoryIndex = 0, categoryLength = categoryValues.length; categoryIndex < categoryLength; categoryIndex++) {
                        categoryColumn.identity.push(getScopeIdentity(identityFrom, categoryIndex, categoryValues[categoryIndex], type));
                    }
                }
                if (!this.categories)
                    this.categories = [];
                this.categories.push(categoryColumn);
                return this;
            };
            CategoricalDataViewBuilder.prototype.withCategories = function (categories) {
                if (_.isEmpty(this.categories))
                    this.categories = categories;
                else
                    Array.prototype.push.apply(this.categories, categories);
                return this;
            };
            CategoricalDataViewBuilder.prototype.withValues = function (options) {
                debug.assertValue(options, 'options');
                var columns = options.columns;
                debug.assertValue(columns, 'columns');
                for (var _i = 0; _i < columns.length; _i++) {
                    var column = columns[_i];
                    this.measureColumns.push(column.source);
                }
                this.data = columns;
                return this;
            };
            CategoricalDataViewBuilder.prototype.withGroupedValues = function (options) {
                debug.assertValue(options, 'options');
                this.hasDynamicSeries = true;
                var groupColumn = options.groupColumn;
                debug.assertValue(groupColumn, 'groupColumn');
                this.dynamicSeriesMetadata = {
                    column: groupColumn.source,
                    identityFrom: groupColumn.identityFrom,
                    values: groupColumn.values,
                };
                var valueColumns = options.valueColumns;
                for (var _i = 0; _i < valueColumns.length; _i++) {
                    var valueColumn = valueColumns[_i];
                    this.measureColumns.push(valueColumn.source);
                }
                this.data = options.data;
                return this;
            };
            CategoricalDataViewBuilder.prototype.fillData = function (dataViewValues, groups) {
                var categoryColumn = _.first(this.categories);
                var categoryLength = (categoryColumn && categoryColumn.values) ? categoryColumn.values.length : 1;
                if (this.hasDynamicSeries) {
                    // Dynamic series
                    var data_5 = this.data;
                    for (var seriesIndex = 0; seriesIndex < this.dynamicSeriesMetadata.values.length; seriesIndex++) {
                        var seriesMeasures = data_5[seriesIndex];
                        debug.assert(seriesMeasures.length === this.measureColumns.length, 'seriesMeasures.length === this.measureColumns.length');
                        for (var measureIndex = 0, measuresLen = this.measureColumns.length; measureIndex < measuresLen; measureIndex++) {
                            var groupIndex = seriesIndex * measuresLen + measureIndex;
                            applySeriesData(dataViewValues[groupIndex], seriesMeasures[measureIndex], categoryLength);
                        }
                    }
                }
                else {
                    // Static series
                    var data_6 = this.data;
                    for (var measureIndex = 0, measuresLen = this.measureColumns.length; measureIndex < measuresLen; measureIndex++) {
                        applySeriesData(dataViewValues[measureIndex], data_6[measureIndex], categoryLength);
                    }
                }
            };
            CategoricalDataViewBuilder.prototype.build = function () {
                var metadataColumns = [];
                var categorical = {};
                var groups;
                var categoryMetadata = this.categories;
                var dynamicSeriesMetadata = this.dynamicSeriesMetadata;
                // --- Build metadata columns and value groups ---
                for (var _i = 0; _i < categoryMetadata.length; _i++) {
                    var columnMetadata = categoryMetadata[_i];
                    pushIfNotExists(metadataColumns, columnMetadata.source);
                }
                if (this.hasDynamicSeries) {
                    pushIfNotExists(metadataColumns, dynamicSeriesMetadata.column);
                }
                if (this.hasDynamicSeries) {
                    // Dynamic series
                    categorical.values = DataViewTransform.createValueColumns([], dynamicSeriesMetadata.identityFrom.fields, dynamicSeriesMetadata.column);
                    var measures = this.measureColumns;
                    groups = [];
                    // For each series value we will make one column per measure
                    var seriesValues = dynamicSeriesMetadata.values;
                    for (var seriesIndex = 0; seriesIndex < seriesValues.length; seriesIndex++) {
                        var seriesValue = seriesValues[seriesIndex];
                        var seriesIdentity = getScopeIdentity(dynamicSeriesMetadata.identityFrom, seriesIndex, seriesValue, dynamicSeriesMetadata.column.type);
                        for (var _a = 0; _a < measures.length; _a++) {
                            var measure = measures[_a];
                            var column = _.clone(measure);
                            column.groupName = seriesValue;
                            groups.push(column);
                            pushIfNotExists(metadataColumns, column);
                            categorical.values.push({
                                source: column,
                                values: [],
                                identity: seriesIdentity,
                            });
                        }
                    }
                }
                else {
                    // Static series / no series
                    categorical.values = DataViewTransform.createValueColumns();
                    groups = this.measureColumns;
                    for (var _b = 0; _b < groups.length; _b++) {
                        var measure = groups[_b];
                        var column = measure;
                        pushIfNotExists(metadataColumns, column);
                        categorical.values.push({
                            source: column,
                            values: [],
                        });
                    }
                }
                var categories = this.categories;
                if (!_.isEmpty(categories))
                    categorical.categories = categories;
                // --- Fill in data point values ---
                this.fillData(categorical.values, groups);
                return {
                    metadata: {
                        columns: metadataColumns,
                    },
                    categorical: categorical,
                };
            };
            return CategoricalDataViewBuilder;
        })();
        function getScopeIdentity(source, index, value, valueType) {
            var identities = source.identities;
            if (identities) {
                return identities[index];
            }
            debug.assert(source.fields && source.fields.length === 1, 'Inferring identity, expect exactly one field.');
            return data_4.createDataViewScopeIdentity(SQExprBuilder.equal(source.fields[0], SQExprBuilder.typedConstant(value, valueType)));
        }
        function pushIfNotExists(items, itemToAdd) {
            if (_.contains(items, itemToAdd))
                return;
            items.push(itemToAdd);
        }
        function applySeriesData(target, source, categoryLength) {
            debug.assertValue(target, 'target');
            debug.assertValue(source, 'source');
            debug.assertValue(categoryLength, 'categoryLength');
            var values = source.values;
            debug.assert(categoryLength === values.length, 'categoryLength === values.length');
            target.values = values;
            var highlights = source.highlights;
            if (highlights) {
                debug.assert(categoryLength === highlights.length, 'categoryLength === highlights.length');
                target.highlights = highlights;
            }
            if (source.minLocal !== undefined)
                target.minLocal = source.minLocal;
            if (source.maxLocal !== undefined)
                target.maxLocal = source.maxLocal;
        }
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        var SQExpr = powerbi.data.SQExpr;
        function createStaticEvalContext(dataView, selectTransforms) {
            return new StaticEvalContext(dataView || { metadata: { columns: [] } }, selectTransforms);
        }
        data.createStaticEvalContext = createStaticEvalContext;
        /**
         * Represents an eval context over a potentially empty DataView.  Only static repetition data view objects
         * are supported.
         */
        var StaticEvalContext = (function () {
            function StaticEvalContext(dataView, selectTransforms) {
                debug.assertValue(dataView, 'dataView');
                debug.assertAnyValue(selectTransforms, 'selectTransforms');
                this.dataView = dataView;
                this.selectTransforms = selectTransforms;
            }
            StaticEvalContext.prototype.getExprValue = function (expr) {
                var dataView = this.dataView, selectTransforms = this.selectTransforms;
                if (dataView && dataView.table && selectTransforms)
                    return getExprValueFromTable(expr, selectTransforms, dataView.table, /*rowIdx*/ 0);
            };
            StaticEvalContext.prototype.getRoleValue = function (roleName) {
                return;
            };
            return StaticEvalContext;
        })();
        function getExprValueFromTable(expr, selectTransforms, table, rowIdx) {
            debug.assertValue(expr, 'expr');
            debug.assertValue(selectTransforms, 'selectTransforms');
            debug.assertValue(table, 'table');
            debug.assertValue(rowIdx, 'rowIdx');
            var rows = table.rows;
            if (_.isEmpty(rows) || rows.length <= rowIdx)
                return;
            var cols = table.columns;
            for (var selectIdx = 0, selectLen = selectTransforms.length; selectIdx < selectLen; selectIdx++) {
                var selectTransform = selectTransforms[selectIdx];
                if (!SQExpr.equals(selectTransform.expr, expr) || !selectTransform.queryName)
                    continue;
                for (var colIdx = 0, colLen = cols.length; colIdx < colLen; colIdx++) {
                    if (selectIdx !== cols[colIdx].index)
                        continue;
                    return rows[rowIdx][colIdx];
                }
            }
        }
        data.getExprValueFromTable = getExprValueFromTable;
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        function createMatrixEvalContext(dataViewMatrix) {
            // NOTE: Matrix context-sensitive evaluation is not yet implemented.
            return data.createStaticEvalContext();
        }
        data.createMatrixEvalContext = createMatrixEvalContext;
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi_1) {
    var StringExtensions = jsCommon.StringExtensions;
    var Formatting = jsCommon.Formatting;
    var RegExpExtensions = jsCommon.RegExpExtensions;
    /** Formatting Encoder */
    var FormattingEncoder;
    (function (FormattingEncoder) {
        function preserveEscaped(format, specialChars) {
            // Unicode U+E000 - U+F8FF is a private area and so we can use the chars from the range to encode the escaped sequences
            var length = specialChars.length;
            for (var i = 0; i < length; i++) {
                var oldText = "\\" + specialChars[i];
                var newText = String.fromCharCode(0xE000 + i);
                format = StringExtensions.replaceAll(format, oldText, newText);
            }
            return format;
        }
        FormattingEncoder.preserveEscaped = preserveEscaped;
        function restoreEscaped(format, specialChars) {
            // After formatting is complete we should restore the encoded escaped chars into the unescaped chars
            var length = specialChars.length;
            for (var i = 0; i < length; i++) {
                var oldText = String.fromCharCode(0xE000 + i);
                var newText = specialChars[i];
                format = StringExtensions.replaceAll(format, oldText, newText);
            }
            return StringExtensions.replaceAll(format, "\\", "");
        }
        FormattingEncoder.restoreEscaped = restoreEscaped;
        function preserveLiterals(format, literals) {
            // Unicode U+E000 - U+F8FF is a private area and so we can use the chars from the range to encode the escaped sequences
            format = StringExtensions.replaceAll(format, "\"", "'");
            for (var i = 0;; i++) {
                var fromIndex = format.indexOf("'");
                if (fromIndex < 0) {
                    break;
                }
                var toIndex = format.indexOf("'", fromIndex + 1);
                if (toIndex < 0) {
                    break;
                }
                var literal = format.substring(fromIndex, toIndex + 1);
                literals.push(literal.substring(1, toIndex - fromIndex));
                var token = String.fromCharCode(0xE100 + i);
                format = format.replace(literal, token);
            }
            return format;
        }
        FormattingEncoder.preserveLiterals = preserveLiterals;
        function restoreLiterals(format, literals) {
            var count = literals.length;
            for (var i = 0; i < count; i++) {
                var token = String.fromCharCode(0xE100 + i);
                var literal = literals[i];
                format = format.replace(token, literal);
            }
            return format;
        }
        FormattingEncoder.restoreLiterals = restoreLiterals;
    })(FormattingEncoder || (FormattingEncoder = {}));
    var IndexedTokensRegex = /({{)|(}})|{(\d+[^}]*)}/g;
    var ZeroPlaceholder = '0';
    var DigitPlaceholder = '#';
    var ExponentialFormatChar = 'E';
    var NumericPlaceholders = [ZeroPlaceholder, DigitPlaceholder];
    var NumericPlaceholderRegex = new RegExp(NumericPlaceholders.join('|'), 'g');
    /** Formatting Service */
    var FormattingService = (function () {
        function FormattingService() {
        }
        FormattingService.prototype.formatValue = function (value, format, culture) {
            // Handle special cases
            if (value === undefined || value === null) {
                return '';
            }
            var gculture = this.getCulture(culture);
            if (DateTimeFormat.canFormat(value)) {
                // Dates
                return DateTimeFormat.format(value, format, gculture);
            }
            else if (NumberFormat.canFormat(value)) {
                // Numbers
                return NumberFormat.format(value, format, gculture);
            }
            else {
                // Other data types - return as string
                return value.toString();
            }
        };
        FormattingService.prototype.format = function (formatWithIndexedTokens, args, culture) {
            var _this = this;
            if (!formatWithIndexedTokens) {
                return "";
            }
            var result = formatWithIndexedTokens.replace(IndexedTokensRegex, function (match, left, right, argToken) {
                if (left) {
                    return "{";
                }
                else if (right) {
                    return "}";
                }
                else {
                    var parts = argToken.split(":");
                    var argIndex = parseInt(parts[0], 10);
                    var argFormat = parts[1];
                    return _this.formatValue(args[argIndex], argFormat, culture);
                }
                return "";
            });
            return result;
        };
        FormattingService.prototype.isStandardNumberFormat = function (format) {
            return NumberFormat.isStandardFormat(format);
        };
        FormattingService.prototype.formatNumberWithCustomOverride = function (value, format, nonScientificOverrideFormat, culture) {
            var gculture = this.getCulture(culture);
            return NumberFormat.formatWithCustomOverride(value, format, nonScientificOverrideFormat, gculture);
        };
        FormattingService.prototype.dateFormatString = function (unit) {
            if (!this._dateTimeScaleFormatInfo)
                this.initialize();
            return this._dateTimeScaleFormatInfo.getFormatString(unit);
        };
        /**
         * Sets the current localization culture
         * @param cultureSelector - name of a culture: "en", "en-UK", "fr-FR" etc. (See National Language Support (NLS) for full lists. Use "default" for invariant culture).
         */
        FormattingService.prototype.setCurrentCulture = function (cultureSelector) {
            if (this._currentCultureSelector !== cultureSelector) {
                this._currentCulture = this.getCulture(cultureSelector);
                this._currentCultureSelector = cultureSelector;
                this._dateTimeScaleFormatInfo = new DateTimeScaleFormatInfo(this._currentCulture);
            }
        };
        /**
         * Gets the culture assotiated with the specified cultureSelector ("en", "en-US", "fr-FR" etc).
         * @param cultureSelector - name of a culture: "en", "en-UK", "fr-FR" etc. (See National Language Support (NLS) for full lists. Use "default" for invariant culture).
         * Exposing this function for testability of unsupported cultures
         */
        FormattingService.prototype.getCulture = function (cultureSelector) {
            if (cultureSelector == null) {
                if (this._currentCulture == null) {
                    this.initialize();
                }
                return this._currentCulture;
            }
            else {
                var culture = Globalize.findClosestCulture(cultureSelector);
                if (!culture)
                    culture = Globalize.culture("en-US");
                return culture;
            }
        };
        /** By default the Globalization module initializes to the culture/calendar provided in the language/culture URL params */
        FormattingService.prototype.initialize = function () {
            var cultureName = this.getCurrentCulture();
            this.setCurrentCulture(cultureName);
            var calendarName = this.getUrlParam("calendar");
            if (calendarName) {
                var culture = this._currentCulture;
                var c = culture.calendars[calendarName];
                if (c) {
                    culture.calendar = c;
                }
            }
        };
        /**
         *  Exposing this function for testability
         */
        FormattingService.prototype.getCurrentCulture = function () {
            var urlParam = this.getUrlParam("language");
            if (urlParam) {
                return urlParam;
            }
            if (powerbi && powerbi.common && powerbi.common.cultureInfo) {
                // Get cultureInfo set in powerbi
                return powerbi.common.cultureInfo;
            }
            return window.navigator.userLanguage || window.navigator["language"] || Globalize.culture().name;
        };
        /**
         *  Exposing this function for testability
         *  @param name: queryString name
         */
        FormattingService.prototype.getUrlParam = function (name) {
            var param = window.location.search.match(RegExp("[?&]" + name + "=([^&]*)"));
            return param ? param[1] : undefined;
        };
        return FormattingService;
    })();
    /**
     * DateTimeFormat module contains the static methods for formatting the DateTimes.
     * It extends the JQuery.Globalize functionality to support complete set of .NET
     * formatting expressions for dates.
     */
    var DateTimeFormat;
    (function (DateTimeFormat) {
        var _currentCachedFormat;
        var _currentCachedProcessedFormat;
        /** Evaluates if the value can be formatted using the NumberFormat */
        function canFormat(value) {
            var result = value instanceof Date;
            return result;
        }
        DateTimeFormat.canFormat = canFormat;
        /** Formats the date using provided format and culture */
        function format(value, format, culture) {
            format = format || "G";
            var isStandard = format.length === 1;
            try {
                if (isStandard) {
                    return formatDateStandard(value, format, culture);
                }
                else {
                    return formatDateCustom(value, format, culture);
                }
            }
            catch (e) {
                return formatDateStandard(value, "G", culture);
            }
        }
        DateTimeFormat.format = format;
        /** Formats the date using standard format expression */
        function formatDateStandard(value, format, culture) {
            // In order to provide parity with .NET we have to support additional set of DateTime patterns.
            var patterns = culture.calendar.patterns;
            // Extend supported set of patterns
            ensurePatterns(culture.calendar);
            // Handle extended set of formats
            var output = Formatting.findDateFormat(value, format, culture.name);
            if (output.format.length === 1)
                format = patterns[output.format];
            else
                format = output.format;
            //need to revisit when globalization is enabled
            culture = Globalize.culture("en-US");
            return Globalize.format(output.value, format, culture);
        }
        /** Formats the date using custom format expression */
        function formatDateCustom(value, format, culture) {
            var result;
            var literals = [];
            format = FormattingEncoder.preserveEscaped(format, "\\dfFghHKmstyz:/%'\"");
            format = FormattingEncoder.preserveLiterals(format, literals);
            format = StringExtensions.replaceAll(format, "\"", "'");
            if (format.indexOf("F") > -1) {
                // F is not supported so we need to replace the F with f based on the milliseconds
                // Replace all sequences of F longer than 3 with "FFF"
                format = StringExtensions.replaceAll(format, "FFFF", "FFF");
                // Based on milliseconds update the format to use fff
                var milliseconds = value.getMilliseconds();
                if (milliseconds % 10 >= 1) {
                    format = StringExtensions.replaceAll(format, "FFF", "fff");
                }
                format = StringExtensions.replaceAll(format, "FFF", "FF");
                if ((milliseconds % 100) / 10 >= 1) {
                    format = StringExtensions.replaceAll(format, "FF", "ff");
                }
                format = StringExtensions.replaceAll(format, "FF", "F");
                if ((milliseconds % 1000) / 100 >= 1) {
                    format = StringExtensions.replaceAll(format, "F", "f");
                }
                format = StringExtensions.replaceAll(format, "F", "");
                if (format === "" || format === "%")
                    return "";
            }
            format = processCustomDateTimeFormat(format);
            result = Globalize.format(value, format, culture);
            result = localize(result, culture.calendar);
            result = FormattingEncoder.restoreLiterals(result, literals);
            result = FormattingEncoder.restoreEscaped(result, "\\dfFghHKmstyz:/%'\"");
            return result;
        }
        /** Translates unsupported .NET custom format expressions to the custom expressions supported by JQuery.Globalize */
        function processCustomDateTimeFormat(format) {
            if (format === _currentCachedFormat) {
                return _currentCachedProcessedFormat;
            }
            _currentCachedFormat = format;
            format = Formatting.fixDateTimeFormat(format);
            _currentCachedProcessedFormat = format;
            return format;
        }
        /** Localizes the time separator symbol */
        function localize(value, dictionary) {
            var timeSeparator = dictionary[":"];
            if (timeSeparator === ":") {
                return value;
            }
            var result = "";
            var count = value.length;
            for (var i = 0; i < count; i++) {
                var char = value.charAt(i);
                switch (char) {
                    case ":":
                        result += timeSeparator;
                        break;
                    default:
                        result += char;
                        break;
                }
            }
            return result;
        }
        function ensurePatterns(calendar) {
            var patterns = calendar.patterns;
            if (patterns["g"] === undefined) {
                patterns["g"] = patterns["f"].replace(patterns["D"], patterns["d"]); // Generic: Short date, short time
                patterns["G"] = patterns["F"].replace(patterns["D"], patterns["d"]); // Generic: Short date, long time
            }
        }
    })(DateTimeFormat || (DateTimeFormat = {}));
    /**
     * NumberFormat module contains the static methods for formatting the numbers.
     * It extends the JQuery.Globalize functionality to support complete set of .NET
     * formatting expressions for numeric types including custom formats.
     */
    var NumberFormat;
    (function (NumberFormat) {
        var NonScientificFormatRegex = /^\{.+\}.*/;
        var NumericalPlaceHolderRegex = /\{.+\}/;
        var ScientificFormatRegex = /e[+-]*[0#]+/i;
        var StandardFormatRegex = /^[a-z]\d{0,2}$/i; // a letter + up to 2 digits for precision specifier
        var TrailingZerosRegex = /0+$/;
        var DecimalFormatRegex = /\.([0#]*)/g;
        var NumericFormatRegex = /[0#,\.]+[0,#]*/g;
        var LastNumericPlaceholderRegex = /(0|#)([^(0|#)]*)$/;
        var DecimalFormatCharacter = '.';
        NumberFormat.NumberFormatComponentsDelimeter = ';';
        function getNonScientificFormatWithPrecision(baseFormat, numericFormat) {
            if (!numericFormat || baseFormat === undefined)
                return baseFormat;
            var newFormat = "{0:" + numericFormat + "}";
            return baseFormat.replace("{0}", newFormat);
        }
        function getNumericFormat(value, baseFormat) {
            if (baseFormat == null)
                return baseFormat;
            if (hasFormatComponents(baseFormat)) {
                var _a = NumberFormat.getComponents(baseFormat), positive = _a.positive, negative = _a.negative, zero = _a.zero;
                if (value > 0)
                    return getNumericFormatFromComponent(value, positive);
                else if (value === 0)
                    return getNumericFormatFromComponent(value, zero);
                return getNumericFormatFromComponent(value, negative);
            }
            return getNumericFormatFromComponent(value, baseFormat);
        }
        NumberFormat.getNumericFormat = getNumericFormat;
        function getNumericFormatFromComponent(value, format) {
            var match = RegExpExtensions.run(NumericFormatRegex, format);
            if (match)
                return match[0];
            return format;
        }
        function addDecimalsToFormat(baseFormat, decimals, trailingZeros) {
            if (decimals == null)
                return baseFormat;
            // Default format string
            if (baseFormat == null)
                baseFormat = ZeroPlaceholder;
            if (hasFormatComponents(baseFormat)) {
                var _a = NumberFormat.getComponents(baseFormat), positive = _a.positive, negative = _a.negative, zero = _a.zero;
                var formats = [positive, negative, zero];
                for (var i = 0; i < formats.length; i++) {
                    // Update format in formats array
                    formats[i] = addDecimalsToFormatComponent(formats[i], decimals, trailingZeros);
                }
                return formats.join(NumberFormat.NumberFormatComponentsDelimeter);
            }
            return addDecimalsToFormatComponent(baseFormat, decimals, trailingZeros);
        }
        NumberFormat.addDecimalsToFormat = addDecimalsToFormat;
        function addDecimalsToFormatComponent(format, decimals, trailingZeros) {
            decimals = Math.abs(decimals);
            if (decimals >= 0) {
                var placeholder = trailingZeros ? ZeroPlaceholder : DigitPlaceholder;
                var decimalPlaceholders = StringExtensions.repeat(placeholder, Math.abs(decimals));
                var match = RegExpExtensions.run(DecimalFormatRegex, format);
                if (match) {
                    var beforeDecimal = format.substr(0, match.index);
                    var formatDecimal = format.substr(match.index + 1, match[1].length);
                    var afterDecimal = format.substr(match.index + match[0].length);
                    if (trailingZeros)
                        // Use explicit decimals argument as placeholders
                        formatDecimal = decimalPlaceholders;
                    else {
                        var decimalChange = decimalPlaceholders.length - formatDecimal.length;
                        if (decimalChange > 0)
                            // Append decimalPlaceholders to existing decimal portion of format string
                            formatDecimal = formatDecimal + decimalPlaceholders.slice(-decimalChange);
                        else if (decimalChange < 0)
                            // Remove decimals from formatDecimal
                            formatDecimal = formatDecimal.slice(0, decimalChange);
                    }
                    if (formatDecimal.length > 0)
                        formatDecimal = DecimalFormatCharacter + formatDecimal;
                    return beforeDecimal + formatDecimal + afterDecimal;
                }
                else if (decimalPlaceholders.length > 0)
                    // Replace last numeric placeholder with decimal portion
                    return format.replace(LastNumericPlaceholderRegex, '$1' + DecimalFormatCharacter + decimalPlaceholders);
            }
            return format;
        }
        function hasFormatComponents(format) {
            return format.indexOf(NumberFormat.NumberFormatComponentsDelimeter) !== -1;
        }
        NumberFormat.hasFormatComponents = hasFormatComponents;
        function getComponents(format) {
            var signFormat = {
                hasNegative: false,
                positive: format,
                negative: format,
                zero: format,
            };
            var signSpecificFormats = format.split(NumberFormat.NumberFormatComponentsDelimeter);
            var formatCount = signSpecificFormats.length;
            debug.assert(!(formatCount > 3), 'format string should be of form positive[;negative;zero]');
            if (formatCount > 1) {
                signFormat.hasNegative = true;
                signFormat.positive = signFormat.zero = signSpecificFormats[0];
                signFormat.negative = signSpecificFormats[1];
                if (formatCount > 2)
                    signFormat.zero = signSpecificFormats[2];
            }
            return signFormat;
        }
        NumberFormat.getComponents = getComponents;
        var _lastCustomFormatMeta;
        /** Evaluates if the value can be formatted using the NumberFormat */
        function canFormat(value) {
            var result = typeof (value) === "number";
            return result;
        }
        NumberFormat.canFormat = canFormat;
        function isStandardFormat(format) {
            debug.assertValue(format, 'format');
            return StandardFormatRegex.test(format);
        }
        NumberFormat.isStandardFormat = isStandardFormat;
        /** Formats the number using specified format expression and culture */
        function format(value, format, culture) {
            format = format || "G";
            try {
                if (isStandardFormat(format))
                    return formatNumberStandard(value, format, culture);
                return formatNumberCustom(value, format, culture);
            }
            catch (e) {
                return Globalize.format(value, undefined, culture);
            }
        }
        NumberFormat.format = format;
        /** Performs a custom format with a value override.  Typically used for custom formats showing scaled values. */
        function formatWithCustomOverride(value, format, nonScientificOverrideFormat, culture) {
            debug.assertValue(value, 'value');
            debug.assertValue(format, 'format');
            debug.assertValue(nonScientificOverrideFormat, 'nonScientificOverrideFormat');
            debug.assertValue(culture, 'culture');
            debug.assert(!isStandardFormat(format), 'Standard format');
            return formatNumberCustom(value, format, culture, nonScientificOverrideFormat);
        }
        NumberFormat.formatWithCustomOverride = formatWithCustomOverride;
        /** Formats the number using standard format expression */
        function formatNumberStandard(value, format, culture) {
            var result;
            var precision = (format.length > 1 ? parseInt(format.substr(1, format.length - 1), 10) : undefined);
            var numberFormatInfo = culture.numberFormat;
            var formatChar = format.charAt(0);
            switch (formatChar) {
                case "e":
                case "E":
                    if (precision === undefined) {
                        precision = 6;
                    }
                    var mantissaDecimalDigits = StringExtensions.repeat("0", precision);
                    format = "0." + mantissaDecimalDigits + formatChar + "+000";
                    result = formatNumberCustom(value, format, culture);
                    break;
                case "f":
                case "F":
                    result = precision !== undefined ? value.toFixed(precision) : value.toFixed(numberFormatInfo.decimals);
                    result = localize(result, numberFormatInfo);
                    break;
                case "g":
                case "G":
                    var abs = Math.abs(value);
                    if (abs === 0 || (1E-4 <= abs && abs < 1E15)) {
                        // For the range of 0.0001 to 1,000,000,000,000,000 - use the normal form
                        result = precision !== undefined ? value.toPrecision(precision) : value.toString();
                    }
                    else {
                        // Otherwise use exponential
                        result = precision !== undefined ? value.toExponential(precision) : value.toExponential();
                        result = result.replace("e", "E");
                    }
                    result = localize(result, numberFormatInfo);
                    break;
                case "r":
                case "R":
                    result = value.toString();
                    result = localize(result, numberFormatInfo);
                    break;
                case "x":
                case "X":
                    result = value.toString(16);
                    if (formatChar === "X") {
                        result = result.toUpperCase();
                    }
                    if (precision !== undefined) {
                        var actualPrecision = result.length;
                        var isNegative = value < 0;
                        if (isNegative) {
                            actualPrecision--;
                        }
                        var paddingZerosCount = precision - actualPrecision;
                        var paddingZeros = undefined;
                        if (paddingZerosCount > 0) {
                            paddingZeros = StringExtensions.repeat("0", paddingZerosCount);
                        }
                        if (isNegative) {
                            result = "-" + paddingZeros + result.substr(1);
                        }
                        else {
                            result = paddingZeros + result;
                        }
                    }
                    result = localize(result, numberFormatInfo);
                    break;
                default:
                    result = Globalize.format(value, format, culture);
            }
            return result;
        }
        /** Formats the number using custom format expression */
        function formatNumberCustom(value, format, culture, nonScientificOverrideFormat) {
            var result;
            var numberFormatInfo = culture.numberFormat;
            if (isFinite(value)) {
                // Split format by positive[;negative;zero] pattern
                var formatComponents = getComponents(format);
                // Pick a format based on the sign of value
                if (value > 0) {
                    format = formatComponents.positive;
                }
                else if (value === 0) {
                    format = formatComponents.zero;
                }
                else {
                    format = formatComponents.negative;
                }
                // Normalize value if we have an explicit negative format
                if (formatComponents.hasNegative)
                    value = Math.abs(value);
                // Get format metadata
                var formatMeta = getCustomFormatMetadata(format, true /*calculatePrecision*/);
                // Preserve literals and escaped chars
                if (formatMeta.hasEscapes) {
                    format = FormattingEncoder.preserveEscaped(format, "\\0#.,%‰");
                }
                var literals = [];
                if (formatMeta.hasQuotes) {
                    format = FormattingEncoder.preserveLiterals(format, literals);
                }
                // Scientific format
                if (formatMeta.hasE && !nonScientificOverrideFormat) {
                    var scientificMatch = RegExpExtensions.run(ScientificFormatRegex, format);
                    if (scientificMatch) {
                        // Case 2.1. Scientific custom format
                        var formatM = format.substr(0, scientificMatch.index);
                        var formatE = format.substr(scientificMatch.index + 2); // E(+|-)
                        var precision = getCustomFormatPrecision(formatM, formatMeta);
                        var scale = getCustomFormatScale(formatM, formatMeta);
                        if (scale !== 1) {
                            value = value * scale;
                        }
                        var s = value.toExponential(precision);
                        var indexOfE = s.indexOf("e");
                        var mantissa = s.substr(0, indexOfE);
                        var exp = s.substr(indexOfE + 1);
                        var resultM = fuseNumberWithCustomFormat(mantissa, formatM, numberFormatInfo);
                        var resultE = fuseNumberWithCustomFormat(exp, formatE, numberFormatInfo);
                        if (resultE.charAt(0) === "+" && scientificMatch[0].charAt(1) !== "+") {
                            resultE = resultE.substr(1);
                        }
                        var e = scientificMatch[0].charAt(0);
                        result = resultM + e + resultE;
                    }
                }
                // Non scientific format
                if (result === undefined) {
                    var valueFormatted;
                    var isValueGlobalized = false;
                    var precision = getCustomFormatPrecision(format, formatMeta);
                    var scale = getCustomFormatScale(format, formatMeta);
                    if (scale !== 1)
                        value = value * scale;
                    // Rounding
                    value = parseFloat(toNonScientific(value, precision));
                    if (nonScientificOverrideFormat) {
                        // Get numeric format from format string
                        var numericFormat = NumberFormat.getNumericFormat(value, format);
                        // Add separators and decimalFormat to nonScientificFormat
                        nonScientificOverrideFormat = getNonScientificFormatWithPrecision(nonScientificOverrideFormat, numericFormat);
                        // Format the value
                        valueFormatted = powerbi_1.formattingService.format(nonScientificOverrideFormat, [value], culture.name);
                        isValueGlobalized = true;
                    }
                    else
                        valueFormatted = toNonScientific(value, precision);
                    result = fuseNumberWithCustomFormat(valueFormatted, format, numberFormatInfo, nonScientificOverrideFormat, isValueGlobalized);
                }
                if (formatMeta.hasQuotes) {
                    result = FormattingEncoder.restoreLiterals(result, literals);
                }
                if (formatMeta.hasEscapes) {
                    result = FormattingEncoder.restoreEscaped(result, "\\0#.,%‰");
                }
                _lastCustomFormatMeta = formatMeta;
            }
            else {
                return Globalize.format(value, undefined);
            }
            return result;
        }
        /** Returns string with the fixed point respresentation of the number */
        function toNonScientific(value, precision) {
            var result = "";
            var precisionZeros = 0;
            // Double precision numbers support actual 15-16 decimal digits of precision.
            if (precision > 16) {
                precisionZeros = precision - 16;
                precision = 16;
            }
            var digitsBeforeDecimalPoint = powerbi_1.Double.log10(Math.abs(value));
            if (digitsBeforeDecimalPoint < 16) {
                if (digitsBeforeDecimalPoint > 0) {
                    var maxPrecision = 16 - digitsBeforeDecimalPoint;
                    if (precision > maxPrecision) {
                        precisionZeros += precision - maxPrecision;
                        precision = maxPrecision;
                    }
                }
                result = value.toFixed(precision);
            }
            else if (digitsBeforeDecimalPoint === 16) {
                result = value.toFixed(0);
                precisionZeros += precision;
                if (precisionZeros > 0) {
                    result += ".";
                }
            }
            else {
                // Different browsers have different implementations of the toFixed().
                // In IE it returns fixed format no matter what's the number. In FF and Chrome the method returns exponential format for numbers greater than 1E21.
                // So we need to check for range and convert the to exponential with the max precision.
                // Then we convert exponential string to fixed by removing the dot and padding with "power" zeros.
                result = value.toExponential(15);
                var indexOfE = result.indexOf("e");
                if (indexOfE > 0) {
                    var indexOfDot = result.indexOf(".");
                    var mantissa = result.substr(0, indexOfE);
                    var exp = result.substr(indexOfE + 1);
                    var powerZeros = parseInt(exp, 10) - (mantissa.length - indexOfDot - 1);
                    result = mantissa.replace(".", "") + StringExtensions.repeat("0", powerZeros);
                    if (precision > 0) {
                        result = result + "." + StringExtensions.repeat("0", precision);
                    }
                }
            }
            if (precisionZeros > 0) {
                result = result + StringExtensions.repeat("0", precisionZeros);
            }
            return result;
        }
        /**
         * Returns the formatMetadata of the format
         * When calculating precision and scale, if format string of
         * positive[;negative;zero] => positive format will be used
         * @param (required) format - format string
         * @param (optional) calculatePrecision - calculate precision of positive format
         * @param (optional) calculateScale - calculate scale of positive format
         */
        function getCustomFormatMetadata(format, calculatePrecision, calculateScale) {
            if (_lastCustomFormatMeta !== undefined && format === _lastCustomFormatMeta.format) {
                return _lastCustomFormatMeta;
            }
            var result = {
                format: format,
                hasEscapes: false,
                hasQuotes: false,
                hasE: false,
                hasCommas: false,
                hasDots: false,
                hasPercent: false,
                hasPermile: false,
                precision: undefined,
                scale: undefined,
            };
            for (var i = 0, length_1 = format.length; i < length_1; i++) {
                var c = format.charAt(i);
                switch (c) {
                    case "\\":
                        result.hasEscapes = true;
                        break;
                    case "'":
                    case "\"":
                        result.hasQuotes = true;
                        break;
                    case "e":
                    case "E":
                        result.hasE = true;
                        break;
                    case ",":
                        result.hasCommas = true;
                        break;
                    case ".":
                        result.hasDots = true;
                        break;
                    case "%":
                        result.hasPercent = true;
                        break;
                    case "‰":
                        result.hasPermile = true;
                        break;
                }
            }
            // Use positive format for calculating these values
            var formatComponents = getComponents(format);
            if (calculatePrecision)
                result.precision = getCustomFormatPrecision(formatComponents.positive, result);
            if (calculateScale)
                result.scale = getCustomFormatScale(formatComponents.positive, result);
            return result;
        }
        NumberFormat.getCustomFormatMetadata = getCustomFormatMetadata;
        /** Returns the decimal precision of format based on the number of # and 0 chars after the decimal point
          * Important: The input format string needs to be split to the appropriate pos/neg/zero portion to work correctly */
        function getCustomFormatPrecision(format, formatMeta) {
            if (formatMeta.precision > -1) {
                return formatMeta.precision;
            }
            var result = 0;
            if (formatMeta.hasDots) {
                var dotIndex = format.indexOf(".");
                if (dotIndex > -1) {
                    var count = format.length;
                    for (var i = dotIndex; i < count; i++) {
                        var char = format.charAt(i);
                        if (char.match(NumericPlaceholderRegex))
                            result++;
                        // 0.00E+0 :: Break before counting 0 in
                        // exponential portion of format string
                        if (char === ExponentialFormatChar)
                            break;
                    }
                    result = Math.min(19, result);
                }
            }
            formatMeta.precision = result;
            return result;
        }
        /** Returns the scale factor of the format based on the "%" and scaling "," chars in the format */
        function getCustomFormatScale(format, formatMeta) {
            if (formatMeta.scale > -1) {
                return formatMeta.scale;
            }
            var result = 1;
            if (formatMeta.hasPercent && format.indexOf("%") > -1) {
                result = result * 100;
            }
            if (formatMeta.hasPermile && format.indexOf("‰") > -1) {
                result = result * 1000;
            }
            if (formatMeta.hasCommas) {
                var dotIndex = format.indexOf(".");
                if (dotIndex === -1) {
                    dotIndex = format.length;
                }
                for (var i = dotIndex - 1; i > -1; i--) {
                    var char = format.charAt(i);
                    if (char === ",") {
                        result = result / 1000;
                    }
                    else {
                        break;
                    }
                }
            }
            formatMeta.scale = result;
            return result;
        }
        function fuseNumberWithCustomFormat(value, format, numberFormatInfo, nonScientificOverrideFormat, isValueGlobalized) {
            var suppressModifyValue = !!nonScientificOverrideFormat;
            var formatParts = format.split(".", 2);
            if (formatParts.length === 2) {
                var wholeFormat = formatParts[0];
                var fractionFormat = formatParts[1];
                var displayUnit = "";
                // Remove display unit from value before splitting on "." as localized display units sometimes end with "."
                if (nonScientificOverrideFormat) {
                    debug.assert(NonScientificFormatRegex.test(nonScientificOverrideFormat), "Number should always precede the display unit");
                    displayUnit = nonScientificOverrideFormat.replace(NumericalPlaceHolderRegex, "");
                    value = value.replace(displayUnit, "");
                }
                var globalizedDecimalSeparator = numberFormatInfo["."];
                var decimalSeparator = isValueGlobalized ? globalizedDecimalSeparator : ".";
                var valueParts = value.split(decimalSeparator, 2);
                var wholeValue = valueParts.length === 1 ? valueParts[0] + displayUnit : valueParts[0];
                var fractionValue = valueParts.length === 2 ? valueParts[1] + displayUnit : "";
                fractionValue = fractionValue.replace(TrailingZerosRegex, "");
                var wholeFormattedValue = fuseNumberWithCustomFormatLeft(wholeValue, wholeFormat, numberFormatInfo, suppressModifyValue);
                var fractionFormattedValue = fuseNumberWithCustomFormatRight(fractionValue, fractionFormat, suppressModifyValue);
                if (fractionFormattedValue.fmtOnly || fractionFormattedValue.value === "")
                    return wholeFormattedValue + fractionFormattedValue.value;
                return wholeFormattedValue + globalizedDecimalSeparator + fractionFormattedValue.value;
            }
            return fuseNumberWithCustomFormatLeft(value, format, numberFormatInfo, suppressModifyValue);
        }
        function fuseNumberWithCustomFormatLeft(value, format, numberFormatInfo, suppressModifyValue) {
            var groupSymbolIndex = format.indexOf(",");
            var enableGroups = groupSymbolIndex > -1 && groupSymbolIndex < Math.max(format.lastIndexOf("0"), format.lastIndexOf("#")) && numberFormatInfo[","];
            var groupDigitCount = 0;
            var groupIndex = 0;
            var groupSizes = numberFormatInfo.groupSizes || [3];
            var groupSize = groupSizes[0];
            var groupSeparator = numberFormatInfo[","];
            var sign = "";
            var firstChar = value.charAt(0);
            if (firstChar === "+" || firstChar === "-") {
                sign = numberFormatInfo[firstChar];
                value = value.substr(1);
            }
            var isZero = value === "0";
            var result = "";
            var leftBuffer = "";
            var vi = value.length - 1;
            var fmtOnly = true;
            // Iterate through format chars and replace 0 and # with the digits from the value string
            for (var fi = format.length - 1; fi > -1; fi--) {
                var formatChar = format.charAt(fi);
                switch (formatChar) {
                    case ZeroPlaceholder:
                    case DigitPlaceholder:
                        fmtOnly = false;
                        if (leftBuffer !== "") {
                            result = leftBuffer + result;
                            leftBuffer = "";
                        }
                        if (!suppressModifyValue) {
                            if (vi > -1 || formatChar === ZeroPlaceholder) {
                                if (enableGroups) {
                                    // If the groups are enabled we'll need to keep track of the current group index and periodically insert group separator,
                                    if (groupDigitCount === groupSize) {
                                        result = groupSeparator + result;
                                        groupIndex++;
                                        if (groupIndex < groupSizes.length) {
                                            groupSize = groupSizes[groupIndex];
                                        }
                                        groupDigitCount = 1;
                                    }
                                    else {
                                        groupDigitCount++;
                                    }
                                }
                            }
                            if (vi > -1) {
                                if (isZero && formatChar === DigitPlaceholder) {
                                }
                                else {
                                    result = value.charAt(vi) + result;
                                }
                                vi--;
                            }
                            else if (formatChar !== DigitPlaceholder) {
                                result = formatChar + result;
                            }
                        }
                        break;
                    case ",":
                        // We should skip all the , chars
                        break;
                    default:
                        leftBuffer = formatChar + leftBuffer;
                        break;
                }
            }
            // If the value didn't fit into the number of zeros provided in the format then we should insert the missing part of the value into the result
            if (!suppressModifyValue) {
                if (vi > -1 && result !== "") {
                    if (enableGroups) {
                        while (vi > -1) {
                            if (groupDigitCount === groupSize) {
                                result = groupSeparator + result;
                                groupIndex++;
                                if (groupIndex < groupSizes.length) {
                                    groupSize = groupSizes[groupIndex];
                                }
                                groupDigitCount = 1;
                            }
                            else {
                                groupDigitCount++;
                            }
                            result = value.charAt(vi) + result;
                            vi--;
                        }
                    }
                    else {
                        result = value.substr(0, vi + 1) + result;
                    }
                }
                // Insert sign in front of the leftBuffer and result
                return sign + leftBuffer + result;
            }
            if (fmtOnly)
                // If the format doesn't specify any digits to be displayed, then just return the format we've parsed up until now.
                return sign + leftBuffer + result;
            return sign + leftBuffer + value + result;
        }
        function fuseNumberWithCustomFormatRight(value, format, suppressModifyValue) {
            var vi = 0;
            var fCount = format.length;
            var vCount = value.length;
            if (suppressModifyValue) {
                debug.assert(fCount > 0, "Empty formatting string");
                var lastChar = format.charAt(fCount - 1);
                if (!lastChar.match(NumericPlaceholderRegex))
                    return {
                        value: value + lastChar,
                        fmtOnly: value === "",
                    };
                return {
                    value: value,
                    fmtOnly: value === "",
                };
            }
            var result = "", fmtOnly = true;
            for (var fi = 0; fi < fCount; fi++) {
                var formatChar = format.charAt(fi);
                if (vi < vCount) {
                    switch (formatChar) {
                        case ZeroPlaceholder:
                        case DigitPlaceholder:
                            result += value[vi++];
                            fmtOnly = false;
                            break;
                        default:
                            result += formatChar;
                    }
                }
                else {
                    if (formatChar !== DigitPlaceholder) {
                        result += formatChar;
                        fmtOnly = fmtOnly && (formatChar !== ZeroPlaceholder);
                    }
                }
            }
            return {
                value: result,
                fmtOnly: fmtOnly,
            };
        }
        function localize(value, dictionary) {
            var plus = dictionary["+"];
            var minus = dictionary["-"];
            var dot = dictionary["."];
            var comma = dictionary[","];
            if (plus === "+" && minus === "-" && dot === "." && comma === ",") {
                return value;
            }
            var count = value.length;
            var result = "";
            for (var i = 0; i < count; i++) {
                var char = value.charAt(i);
                switch (char) {
                    case "+":
                        result = result + plus;
                        break;
                    case "-":
                        result = result + minus;
                        break;
                    case ".":
                        result = result + dot;
                        break;
                    case ",":
                        result = result + comma;
                        break;
                    default:
                        result = result + char;
                        break;
                }
            }
            return result;
        }
    })(NumberFormat = powerbi_1.NumberFormat || (powerbi_1.NumberFormat = {}));
    /** DateTimeScaleFormatInfo is used to calculate and keep the Date formats used for different units supported by the DateTimeScaleModel */
    var DateTimeScaleFormatInfo = (function () {
        // Constructor
        /**
         * Creates new instance of the DateTimeScaleFormatInfo class.
         * @param culture - culture which calendar info is going to be used to derive the formats.
         */
        function DateTimeScaleFormatInfo(culture) {
            var calendar = culture.calendar;
            var patterns = calendar.patterns;
            var monthAbbreviations = calendar["months"]["namesAbbr"];
            var cultureHasMonthAbbr = monthAbbreviations && monthAbbreviations[0];
            var yearMonthPattern = patterns["Y"];
            var monthDayPattern = patterns["M"];
            var fullPattern = patterns["f"];
            var longTimePattern = patterns["T"];
            var shortTimePattern = patterns["t"];
            var separator = fullPattern.indexOf(",") > -1 ? ", " : " ";
            var hasYearSymbol = yearMonthPattern.indexOf("yyyy'") === 0 && yearMonthPattern.length > 6 && yearMonthPattern[6] === '\'';
            this.YearPattern = hasYearSymbol ? yearMonthPattern.substr(0, 7) : "yyyy";
            var yearPos = fullPattern.indexOf("yy");
            var monthPos = fullPattern.indexOf("MMMM");
            this.MonthPattern = cultureHasMonthAbbr && monthPos > -1 ? (yearPos > monthPos ? "MMM yyyy" : "yyyy MMM") : yearMonthPattern;
            this.DayPattern = cultureHasMonthAbbr ? monthDayPattern.replace("MMMM", "MMM") : monthDayPattern;
            var minutePos = fullPattern.indexOf("mm");
            var pmPos = fullPattern.indexOf("tt");
            var shortHourPattern = pmPos > -1 ? shortTimePattern.replace(":mm ", "") : shortTimePattern;
            this.HourPattern = yearPos < minutePos ? this.DayPattern + separator + shortHourPattern : shortHourPattern + separator + this.DayPattern;
            this.MinutePattern = shortTimePattern;
            this.SecondPattern = longTimePattern;
            this.MillisecondPattern = longTimePattern.replace("ss", "ss.fff");
            // Special cases
            switch (culture.name) {
                case "fi-FI":
                    this.DayPattern = this.DayPattern.replace("'ta'", ""); // Fix for finish 'ta' suffix for month names.
                    this.HourPattern = this.HourPattern.replace("'ta'", "");
                    break;
            }
        }
        // Methods
        /**
         * Returns the format string of the provided DateTimeUnit.
         * @param unit - date or time unit
         */
        DateTimeScaleFormatInfo.prototype.getFormatString = function (unit) {
            switch (unit) {
                case powerbi_1.DateTimeUnit.Year:
                    return this.YearPattern;
                case powerbi_1.DateTimeUnit.Month:
                    return this.MonthPattern;
                case powerbi_1.DateTimeUnit.Week:
                case powerbi_1.DateTimeUnit.Day:
                    return this.DayPattern;
                case powerbi_1.DateTimeUnit.Hour:
                    return this.HourPattern;
                case powerbi_1.DateTimeUnit.Minute:
                    return this.MinutePattern;
                case powerbi_1.DateTimeUnit.Second:
                    return this.SecondPattern;
                case powerbi_1.DateTimeUnit.Millisecond:
                    return this.MillisecondPattern;
            }
            debug.assertFail('Unexpected unit: ' + unit);
        };
        return DateTimeScaleFormatInfo;
    })();
    powerbi_1.formattingService = new FormattingService();
})(powerbi || (powerbi = {}));
/*
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
var powerbi;
(function (powerbi) {
    var data;
    (function (data) {
        /** Serializes SQExpr in a form optimized in-memory comparison, but not intended for storage on disk. */
        var SQExprShortSerializer;
        (function (SQExprShortSerializer) {
            function serialize(expr) {
                return JSON.stringify(expr.accept(SQExprSerializer.instance));
            }
            SQExprShortSerializer.serialize = serialize;
            function serializeArray(exprs) {
                var str = '[';
                for (var i = 0, len = exprs.length; i < len; i++) {
                    if (i > 0)
                        str += ',';
                    str += SQExprShortSerializer.serialize(exprs[i]);
                }
                return str + ']';
            }
            SQExprShortSerializer.serializeArray = serializeArray;
            /** Responsible for serializing an SQExpr into a comparable string. */
            var SQExprSerializer = (function (_super) {
                __extends(SQExprSerializer, _super);
                function SQExprSerializer() {
                    _super.apply(this, arguments);
                }
                SQExprSerializer.prototype.visitColumnRef = function (expr) {
                    return {
                        col: {
                            s: expr.source.accept(this),
                            r: expr.ref,
                        }
                    };
                };
                SQExprSerializer.prototype.visitMeasureRef = function (expr) {
                    return {
                        measure: {
                            s: expr.source.accept(this),
                            r: expr.ref,
                        }
                    };
                };
                SQExprSerializer.prototype.visitAggr = function (expr) {
                    return {
                        agg: {
                            a: expr.arg.accept(this),
                            f: expr.func,
                        }
                    };
                };
                SQExprSerializer.prototype.visitEntity = function (expr) {
                    debug.assertValue(expr, 'expr');
                    debug.assertValue(expr.entity, 'expr.entity');
                    return {
                        e: expr.entity
                    };
                };
                SQExprSerializer.prototype.visitAnd = function (expr) {
                    debug.assertValue(expr, 'expr');
                    return {
                        and: {
                            l: expr.left.accept(this),
                            r: expr.right.accept(this),
                        }
                    };
                };
                SQExprSerializer.prototype.visitCompare = function (expr) {
                    debug.assertValue(expr, 'expr');
                    return {
                        comp: {
                            k: expr.comparison,
                            l: expr.left.accept(this),
                            r: expr.right.accept(this),
                        }
                    };
                };
                SQExprSerializer.prototype.visitConstant = function (expr) {
                    debug.assertValue(expr, 'expr');
                    return {
                        const: {
                            t: expr.type.primitiveType,
                            v: expr.value,
                        }
                    };
                };
                SQExprSerializer.prototype.visitArithmetic = function (expr) {
                    debug.assertValue(expr, 'expr');
                    return {
                        arithmetic: {
                            o: expr.operator,
                            l: expr.left.accept(this),
                            r: expr.right.accept(this)
                        }
                    };
                };
                SQExprSerializer.prototype.visitDefault = function (expr) {
                    debug.assertFail('Unexpected expression type found in DataViewScopeIdentity.');
                    return;
                };
                SQExprSerializer.instance = new SQExprSerializer();
                return SQExprSerializer;
            })(data.DefaultSQExprVisitor);
        })(SQExprShortSerializer = data.SQExprShortSerializer || (data.SQExprShortSerializer = {}));
    })(data = powerbi.data || (powerbi.data = {}));
})(powerbi || (powerbi = {}));

//# sourceMappingURL=VisualsData.js.map
