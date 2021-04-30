import { jsxs, jsx } from 'react/jsx-runtime';
import MUIButton from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        '&:hover': {
            color: 'blue'
        }
    },
});
function PrimaryButton(_a) {
    var children = _a.children, disabled = _a.disabled;
    var classes = useStyles();
    return jsxs(MUIButton, __assign({ className: classes.root, disabled: disabled, variant: "outlined" }, { children: [children, "Will this go to both repos hopefully"] }), void 0);
}
function SecondaryButton(_a) {
    var children = _a.children, _b = _a.disabled, disabled = _b === void 0 ? false : _b;
    return jsx(MUIButton, __assign({ color: "secondary", disabled: disabled }, { children: children }), void 0);
}

export { PrimaryButton, SecondaryButton };
