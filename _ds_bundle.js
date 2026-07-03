/* @ds-bundle: {"format":3,"namespace":"NGISDesignSystem_f6dc23","components":[{"name":"Alert","sourcePath":"components/core/Alert.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"EyebrowLabel","sourcePath":"components/core/EyebrowLabel.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Select","sourcePath":"components/core/Select.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Alert.jsx":"b6ad14967fd1","components/core/Avatar.jsx":"2ab02b11f41a","components/core/Badge.jsx":"d673260a5f95","components/core/Button.jsx":"a2853c535be2","components/core/Card.jsx":"710987827d15","components/core/EyebrowLabel.jsx":"9473e6e307ca","components/core/IconButton.jsx":"3d3f05cd9778","components/core/Input.jsx":"9fa370b6bf38","components/core/Select.jsx":"054d4ae3472e","components/core/Stat.jsx":"ee28a0f919fa","components/core/Tag.jsx":"ecfec7457075","ui_kits/website/AcademicsScreen.jsx":"106763f134f1","ui_kits/website/AdmissionsScreen.jsx":"4b844f9f4d8a","ui_kits/website/Campuses.jsx":"6da2d9fece40","ui_kits/website/Decor.jsx":"3de359da8fe1","ui_kits/website/FacultyScreen.jsx":"2bd83a51218f","ui_kits/website/Footer.jsx":"517a62592744","ui_kits/website/GalleryScreen.jsx":"8d7ed5f0cd30","ui_kits/website/Header.jsx":"e0a418bde673","ui_kits/website/HomeScreen.jsx":"d45a6a6e12e9","ui_kits/website/Icon.jsx":"50c450eebccf"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NGISDesignSystem_f6dc23 = window.NGISDesignSystem_f6dc23 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NGIS Alert — inline message banner mapped to status colors.
 */
function Alert({
  children,
  title,
  tone = 'info',
  style,
  ...rest
}) {
  const tones = {
    info: {
      bg: 'var(--info-bg)',
      bar: 'var(--info)',
      fg: 'var(--blue-700)'
    },
    success: {
      bg: 'var(--success-bg)',
      bar: 'var(--success)',
      fg: 'var(--green-700)'
    },
    warning: {
      bg: 'var(--warning-bg)',
      bar: 'var(--warning)',
      fg: 'var(--gold-700)'
    },
    danger: {
      bg: 'var(--danger-bg)',
      bar: 'var(--danger)',
      fg: 'var(--red-700)'
    }
  };
  const t = tones[tone] || tones.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      fontFamily: 'var(--font-sans)',
      background: t.bg,
      borderLeft: `var(--border-accent) solid ${t.bar}`,
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-4) var(--space-5)',
      color: 'var(--text-body)',
      ...style
    }
  }, rest), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-base)',
      color: t.fg,
      marginBottom: 'var(--space-1)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-normal)'
    }
  }, children));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Alert.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NGIS Avatar — circular initials or photo, for faculty / student profiles.
 */
function Avatar({
  name = '',
  src = null,
  size = 44,
  color = 'navy',
  style,
  ...rest
}) {
  const colors = {
    navy: 'var(--navy-500)',
    red: 'var(--red-500)',
    blue: 'var(--blue-600)',
    green: 'var(--green-600)',
    gold: 'var(--gold-600)'
  };
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join('');
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-pill)',
      background: src ? 'var(--ink-200)' : colors[color] || colors.navy,
      color: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-bold)',
      fontSize: size * 0.4,
      overflow: 'hidden',
      flexShrink: 0,
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NGIS Badge — compact status/category label.
 * Tones map to the academic palette; use sparingly.
 */
function Badge({
  children,
  tone = 'neutral',
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      background: 'var(--ink-100)',
      color: 'var(--ink-700)'
    },
    brand: {
      background: 'var(--red-50)',
      color: 'var(--red-700)'
    },
    navy: {
      background: 'var(--navy-50)',
      color: 'var(--navy-600)'
    },
    success: {
      background: 'var(--green-50)',
      color: 'var(--green-700)'
    },
    info: {
      background: 'var(--blue-50)',
      color: 'var(--blue-700)'
    },
    warning: {
      background: 'var(--gold-50)',
      color: 'var(--gold-700)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      padding: '4px 9px',
      borderRadius: 'var(--radius-sm)',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NGIS Button — the primary interactive control.
 * Variants map to brand roles; sizes follow the 8px grid.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 14px',
      fontSize: 'var(--text-sm)',
      gap: '6px'
    },
    md: {
      padding: '11px 20px',
      fontSize: 'var(--text-base)',
      gap: '8px'
    },
    lg: {
      padding: '14px 28px',
      fontSize: 'var(--text-lg)',
      gap: '10px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--brand)',
      color: 'var(--text-on-brand)',
      border: '1px solid var(--brand)'
    },
    navy: {
      background: 'var(--brand-ink)',
      color: 'var(--text-on-navy)',
      border: '1px solid var(--brand-ink)'
    },
    secondary: {
      background: 'var(--surface-page)',
      color: 'var(--brand-ink)',
      border: '1px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--brand-ink)',
      border: '1px solid transparent'
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyle = !disabled && hover ? {
    primary: {
      background: 'var(--brand-hover)',
      borderColor: 'var(--brand-hover)'
    },
    navy: {
      background: 'var(--brand-ink-hover)',
      borderColor: 'var(--brand-ink-hover)'
    },
    secondary: {
      background: 'var(--surface-subtle)',
      borderColor: 'var(--ink-400)'
    },
    ghost: {
      background: 'var(--surface-subtle)'
    }
  }[variant] : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: fullWidth ? '100%' : 'auto',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-bold)',
      lineHeight: 1,
      letterSpacing: '0.01em',
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)',
      ...sizes[size],
      ...variants[variant],
      ...hoverStyle,
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NGIS Card — surface container with optional top accent rule.
 * Use for programme cards, news, feature panels.
 */
function Card({
  children,
  accent = null,
  // null | 'red' | 'navy' | 'blue' | 'green' | 'gold'
  interactive = false,
  padding = 'var(--space-5)',
  style,
  ...rest
}) {
  const accents = {
    red: 'var(--red-500)',
    navy: 'var(--navy-500)',
    blue: 'var(--blue-500)',
    green: 'var(--green-500)',
    gold: 'var(--gold-500)'
  };
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      borderTop: accent ? `var(--border-accent) solid ${accents[accent]}` : '1px solid var(--border)',
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-2px)' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)',
      padding,
      cursor: interactive ? 'pointer' : 'default',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/EyebrowLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NGIS EyebrowLabel — small uppercase kicker above headings.
 */
function EyebrowLabel({
  children,
  color = 'red',
  style,
  ...rest
}) {
  const colors = {
    red: 'var(--brand)',
    navy: 'var(--brand-ink)',
    blue: 'var(--blue-600)',
    green: 'var(--green-600)',
    gold: 'var(--gold-700)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-bold)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      color: colors[color] || colors.red,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { EyebrowLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/EyebrowLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NGIS IconButton — square button for a single icon (close, menu, social).
 */
function IconButton({
  children,
  variant = 'ghost',
  size = 40,
  label,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const variants = {
    ghost: {
      background: hover ? 'var(--surface-subtle)' : 'transparent',
      color: 'var(--brand-ink)',
      border: '1px solid transparent'
    },
    outline: {
      background: hover ? 'var(--surface-subtle)' : 'var(--surface-page)',
      color: 'var(--brand-ink)',
      border: '1px solid var(--border-strong)'
    },
    solid: {
      background: hover ? 'var(--brand-hover)' : 'var(--brand)',
      color: '#fff',
      border: '1px solid transparent'
    },
    navy: {
      background: hover ? 'var(--brand-ink-hover)' : 'var(--brand-ink)',
      color: '#fff',
      border: '1px solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      transition: 'background var(--dur-fast) var(--ease-standard)',
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NGIS Input — labelled text field with optional helper / error.
 */
function Input({
  label,
  helper,
  error,
  id,
  required = false,
  style,
  containerStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? label.toString().toLowerCase().replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'block',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)',
      marginBottom: 'var(--space-2)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand)'
    }
  }, " *")), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)',
      background: 'var(--surface-page)',
      padding: '11px 14px',
      borderRadius: 'var(--radius-md)',
      border: `1px solid ${error ? 'var(--danger)' : focus ? 'var(--focus-ring)' : 'var(--border-strong)'}`,
      boxShadow: focus && !error ? 'var(--shadow-focus)' : 'none',
      outline: 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
      ...style
    }
  }, rest)), (helper || error) && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)',
      fontSize: 'var(--text-sm)',
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NGIS Select — labelled native dropdown matching Input styling.
 */
function Select({
  label,
  helper,
  id,
  options = [],
  required = false,
  style,
  containerStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const selId = id || (label ? label.toString().toLowerCase().replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      display: 'block',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)',
      marginBottom: 'var(--space-2)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand)'
    }
  }, " *")), /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      appearance: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)',
      background: 'var(--surface-page)',
      padding: '11px 38px 11px 14px',
      borderRadius: 'var(--radius-md)',
      border: `1px solid ${focus ? 'var(--focus-ring)' : 'var(--border-strong)'}`,
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      outline: 'none',
      cursor: 'pointer',
      backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 12px center',
      ...style
    }
  }, rest), options.map((o, i) => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: i,
      value: val
    }, lab);
  })), helper && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, helper));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Select.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NGIS Stat — large figure with a supporting label.
 * Used in proof bands ("98% university placement", "1:8 ratio").
 */
function Stat({
  value,
  label,
  color = 'red',
  align = 'center',
  style,
  ...rest
}) {
  const colors = {
    red: 'var(--red-500)',
    navy: 'var(--navy-500)',
    blue: 'var(--blue-600)',
    green: 'var(--green-600)',
    gold: 'var(--gold-600)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-5xl)',
      fontWeight: 'var(--weight-bold)',
      lineHeight: 1,
      letterSpacing: 'var(--tracking-tight)',
      color: colors[color] || colors.red
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)'
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NGIS Tag — pill-shaped filter / category chip.
 */
function Tag({
  children,
  color = 'navy',
  active = false,
  style,
  ...rest
}) {
  const colors = {
    navy: 'var(--navy-500)',
    red: 'var(--red-500)',
    blue: 'var(--blue-600)',
    green: 'var(--green-600)',
    gold: 'var(--gold-600)'
  };
  const c = colors[color] || colors.navy;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      padding: '6px 14px',
      borderRadius: 'var(--radius-pill)',
      border: `1px solid ${active ? c : 'var(--border-strong)'}`,
      background: active ? c : 'transparent',
      color: active ? '#fff' : 'var(--text-body)',
      cursor: 'pointer',
      transition: 'all var(--dur-fast) var(--ease-standard)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AcademicsScreen.jsx
try { (() => {
// NGIS website — Academics / "Our Learning Ecosystem"
// Content from the NGIS Prospectus, the Grade Structure sheet and the
// Robotmea ETM Concept Deck.
function AcademicsScreen({
  onNav
}) {
  const {
    Card,
    Badge,
    EyebrowLabel,
    Button
  } = window.NGISDesignSystem_f6dc23;
  const Icon = window.Icon;
  const {
    PATTERNS,
    NAVY_GRADIENT,
    SectionDecor,
    PhotoFrame,
    EduMotifs,
    ClassNameStack
  } = window.Decor;

  // Grade structure — Playgroup to Grade 5 (the school's full range).
  const grades = [{
    stage: 'Playgroup',
    age: '3–4',
    en: 'Explorers',
    ko: '탐험가 (Tam-hum-ga)',
    ar: 'المستكشفون',
    insp: 'Where little hands discover big wonders — sparking imagination, curiosity and the joy of learning through play.'
  }, {
    stage: 'Foundation 1',
    age: '4–5',
    en: 'Dreamers',
    ko: '꿈나무 (Kkoom-na-moo)',
    ar: 'الحالمون',
    insp: 'Where stories come alive and dreams take shape — building confidence, creativity and a first friendship with technology.'
  }, {
    stage: 'Foundation 2',
    age: '5–6',
    en: 'Seekers',
    ko: '새싹 (Saessak)',
    ar: 'الباحثون',
    insp: 'Where young minds think like problem-solvers — introducing computational thinking and the magic of making technology respond.'
  }, {
    stage: 'Grade 1',
    age: '6–7',
    en: 'Little Champs',
    ko: '새싹 챔프 (Saessak Champ)',
    ar: 'الأبطال الصغار',
    insp: 'Where curiosity meets creation — exploring STEAM principles, mechanical wonders and the science of how things move.'
  }, {
    stage: 'Grade 2',
    age: '7–8',
    en: 'Bright Innovators',
    ko: '빛나는 혁신가',
    ar: 'المبتكرون النابهون',
    insp: 'Where ideas become inventions — mastering controllers, modules and mechanical assembly to bring imagination to life.'
  }, {
    stage: 'Grade 3',
    age: '8–9',
    en: 'Curious Thinkers',
    ko: '호기심 사상가',
    ar: 'المفكرون الفضوليون',
    insp: 'Where robots learn to think and children learn to lead — stepping into autonomous machines, sensors and AI.'
  }, {
    stage: 'Grade 4',
    age: '9–10',
    en: 'Young Visionaries',
    ko: '젊은 선구자',
    ar: 'أصحاب الرؤية',
    insp: 'Where logic meets innovation — programming intelligent systems and solving real-world problems.'
  }, {
    stage: 'Grade 5',
    age: '10–11',
    en: 'Junior Leaders',
    ko: '주니어 리더',
    ar: 'القادة الناشئون',
    insp: "Where tomorrow's engineers take charge — designing advanced robots and leading missions that shape the future."
  }];

  // Two frameworks, one journey.
  const games = [{
    l: 'G',
    t: 'General Knowledge'
  }, {
    l: 'A',
    t: 'Arts'
  }, {
    l: 'M',
    t: 'Mathematics'
  }, {
    l: 'E',
    t: 'English'
  }, {
    l: 'S',
    t: 'Science'
  }];
  const steam = [{
    l: 'S',
    t: 'Science'
  }, {
    l: 'T',
    t: 'Technology'
  }, {
    l: 'E',
    t: 'Engineering'
  }, {
    l: 'A',
    t: 'Arts'
  }, {
    l: 'M',
    t: 'Mathematics'
  }];

  // The Single Book domains (Pre-Primary System Model).
  const singleBook = ['Personal, Social & Emotional Development', 'Language & Literacy', 'Basic Mathematical Concepts', 'The World Around Us', 'Physical Development', 'Health, Hygiene & Safety', 'Creative Arts'];

  // Pedagogies inside the Discovery & Innovation Hub.
  const pedagogies = [{
    t: "Bloom's Taxonomy",
    d: 'Questioning and tasks designed across all six levels of thinking.',
    icon: 'layers'
  }, {
    t: 'SOLO Taxonomy',
    d: 'Tracking depth of understanding from surface to extended abstract.',
    icon: 'compass'
  }, {
    t: 'Universal Design for Learning',
    d: 'Inclusive, flexible learning that reaches every child (UDL).',
    icon: 'users'
  }, {
    t: 'Project-Based Inquiry Learning',
    d: 'PBIL — learning through real projects, not worksheets.',
    icon: 'flask'
  }, {
    t: 'The 4 C\u2019s',
    d: 'Critical thinking, Creativity, Collaboration & Communication.',
    icon: 'brain'
  }, {
    t: 'NCC · SNC Aligned',
    d: 'Mapped to the National & Single National Curriculum standards.',
    icon: 'bookMarked'
  }];

  // ETM Garage technologies.
  const garage = [{
    t: '3D Printers',
    d: 'Turning digital designs into real, holdable prototypes.',
    icon: 'printer'
  }, {
    t: 'VR Headsets',
    d: 'Immersive worlds for exploration and spatial learning.',
    icon: 'headset'
  }, {
    t: 'Quadcopters',
    d: 'Flight, control and physics, learned hands-on.',
    icon: 'drone'
  }, {
    t: 'RC Flying Planes',
    d: 'Aerodynamics and engineering brought to the sky.',
    icon: 'plane'
  }, {
    t: 'Tool Kits',
    d: 'The building blocks of every young maker\u2019s project.',
    icon: 'wrench'
  }, {
    t: 'Soldering Station',
    d: 'Real circuits, assembled by real young engineers.',
    icon: 'iron'
  }, {
    t: 'Woodworking Station',
    d: 'Designing and crafting with traditional materials.',
    icon: 'hammer'
  }];

  // Reimagined roles.
  const roles = [{
    who: 'Principal',
    as: 'Mentor',
    icon: 'compass'
  }, {
    who: 'Teachers',
    as: 'Coaches & Instructors',
    icon: 'graduationCap'
  }, {
    who: 'Students',
    as: 'Active Learners',
    icon: 'sparkles'
  }, {
    who: 'Classrooms',
    as: 'Discovery & Innovation Hubs',
    icon: 'lightbulb'
  }];

  // Framework column renderer (the GAMES / STEAM diagram).
  const FrameworkColumn = ({
    stageLabel,
    ages,
    name,
    items,
    accent,
    icon
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 280,
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderTop: `4px solid var(--${accent}-500)`,
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-7)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      flexShrink: 0,
      borderRadius: 'var(--radius-lg)',
      background: `var(--${accent}-50)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 26,
    color: `var(--${accent}-600)`
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 'var(--text-xs)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      color: `var(--${accent}-600)`
    }
  }, stageLabel), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      fontWeight: 600
    }
  }, ages))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      background: 'var(--surface-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: '10px 14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      flexShrink: 0,
      borderRadius: 'var(--radius-sm)',
      background: `var(--${accent}-500)`,
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-serif)',
      fontWeight: 700,
      fontSize: 'var(--text-lg)'
    }
  }, it.l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)'
    }
  }, it.t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)',
      textAlign: 'center',
      fontFamily: 'var(--font-serif)',
      fontWeight: 700,
      fontSize: 'var(--text-2xl)',
      letterSpacing: 'var(--tracking-wide)',
      color: `var(--${accent}-600)`
    }
  }, name));
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: NAVY_GRADIENT,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...PATTERNS.gridNavy,
      position: 'absolute',
      inset: 0,
      opacity: 0.6
    }
  }), /*#__PURE__*/React.createElement(EduMotifs, {
    tone: "navy",
    density: "light"
  }), /*#__PURE__*/React.createElement(SectionDecor, {
    tone: "navy"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(EyebrowLabel, {
    color: "gold"
  }, "Educational Transformation Movement"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-5xl)',
      fontWeight: 700,
      color: '#fff',
      margin: '14px 0 0',
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, "Our learning ecosystem"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'rgba(255,255,255,0.82)',
      margin: '16px 0 0',
      maxWidth: 660,
      lineHeight: 'var(--leading-normal)'
    }
  }, "An enabling ecosystem to make every child relevant \u2014 integrating emerging technologies, a STEAM curriculum and Islamic values, benchmarked to South Korean standards and aligned with the Pakistan National Curriculum."))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...PATTERNS.dotsLight,
      position: 'absolute',
      inset: 0,
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 700,
      margin: '0 auto var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(EyebrowLabel, {
    color: "red"
  }, "From Playgroup to Grade 5"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-4xl)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: '12px 0 0',
      lineHeight: 'var(--leading-tight)'
    }
  }, "One continuous journey, ages 3 to 11"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'var(--text-body)',
      margin: '14px 0 0',
      lineHeight: 'var(--leading-normal)'
    }
  }, "Every class carries an English, Korean and Arabic name \u2014 a signature of our trilingual identity and global outlook.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 'var(--space-4)'
    }
  }, grades.map((g, i) => {
    const accent = i % 2 === 0 ? 'navy' : 'red';
    return /*#__PURE__*/React.createElement("div", {
      key: g.stage,
      style: {
        display: 'flex',
        gap: 18,
        alignItems: 'flex-start',
        background: 'var(--surface-card)',
        border: '1px solid var(--border)',
        borderTop: `3px solid var(--${accent}-500)`,
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-5)',
        boxShadow: 'var(--shadow-sm)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flexShrink: 0,
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 64,
        height: 64,
        borderRadius: 'var(--radius-lg)',
        background: `var(--${accent}-50)`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontWeight: 700,
        fontSize: '10px',
        textTransform: 'uppercase',
        letterSpacing: 'var(--tracking-wide)',
        color: `var(--${accent}-600)`
      }
    }, "Ages"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontWeight: 700,
        fontSize: 'var(--text-xl)',
        color: `var(--${accent}-700)`
      }
    }, g.age)), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8,
        fontSize: '11px',
        fontWeight: 700,
        color: 'var(--text-muted)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--tracking-wide)',
        maxWidth: 72,
        lineHeight: 1.3
      }
    }, g.stage)), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(ClassNameStack, {
      en: g.en,
      ko: g.ko,
      ar: g.ar,
      accent: accent
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--text-sm)',
        color: 'var(--text-body)',
        lineHeight: 'var(--leading-normal)',
        margin: '12px 0 0'
      }
    }, g.insp)));
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-subtle)',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(EduMotifs, {
    tone: "light",
    density: "light"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 720,
      margin: '0 auto var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(EyebrowLabel, {
    color: "navy"
  }, "Two frameworks, one journey"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-4xl)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: '12px 0 0',
      lineHeight: 'var(--leading-tight)'
    }
  }, "G.A.M.E.S in Pre-Primary, S.T.E.A.M in Primary"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'var(--text-body)',
      margin: '14px 0 0',
      lineHeight: 'var(--leading-normal)'
    }
  }, "Foundations are laid through G.A.M.E.S in the early years, then deepened into the S.T.E.A.M disciplines as learners move into primary.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      justifyContent: 'center',
      gap: 'var(--space-5)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(FrameworkColumn, {
    stageLabel: "Pre-Primary",
    ages: "Playgroup\u2013FS2 \xB7 Ages 3\u20136",
    name: "G.A.M.E.S",
    items: games,
    accent: "navy",
    icon: "star"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: '50%',
      background: 'var(--gold-500)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    size: 24,
    color: "var(--navy-700)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 10,
      fontSize: '11px',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      color: 'var(--text-muted)',
      textAlign: 'center',
      maxWidth: 80
    }
  }, "Progression")), /*#__PURE__*/React.createElement(FrameworkColumn, {
    stageLabel: "Primary",
    ages: "Grade 1\u20135 \xB7 Ages 6\u201311",
    name: "S.T.E.A.M",
    items: steam,
    accent: "red",
    icon: "rocket"
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...PATTERNS.dotsLight,
      position: 'absolute',
      inset: 0,
      opacity: 0.4
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EyebrowLabel, {
    color: "navy"
  }, "The One-Book \u201CSystem Model\u201D"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-4xl)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: '12px 0 0',
      lineHeight: 'var(--leading-tight)'
    }
  }, "One book. Every subject. Zero heavy bags."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'var(--text-body)',
      margin: '16px 0 20px',
      lineHeight: 'var(--leading-normal)'
    }
  }, "Our Single Book model integrates every early-years domain into one coherent resource \u2014 STEAM-integrated, aligned to the NCP and benchmarked to South Korean standards. No heavy bags, no fragmented subjects, just connected learning."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10
    }
  }, singleBook.map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-pill)',
      padding: '7px 13px',
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 14,
    color: "var(--red-600)"
  }), s)))), /*#__PURE__*/React.createElement(PhotoFrame, {
    src: "../../assets/photos/steam-classroom.png",
    alt: "STEAM classroom",
    label: "Single Book model",
    icon: "bookMarked",
    accent: "red",
    ratio: "16 / 11",
    caption: "Pre-Primary \xB7 One Book"
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: NAVY_GRADIENT,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...PATTERNS.dotsNavy,
      position: 'absolute',
      inset: 0,
      opacity: 0.7
    }
  }), /*#__PURE__*/React.createElement(EduMotifs, {
    tone: "navy",
    density: "light"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 700,
      margin: '0 auto var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(EyebrowLabel, {
    color: "gold"
  }, "Discovery & Innovation Hub"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-4xl)',
      fontWeight: 700,
      color: '#fff',
      margin: '12px 0 0',
      lineHeight: 'var(--leading-tight)'
    }
  }, "Research-backed pedagogy, built into every lesson"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'rgba(255,255,255,0.82)',
      margin: '14px 0 0',
      lineHeight: 'var(--leading-normal)'
    }
  }, "Our classrooms are not lecture halls \u2014 they are hubs where established learning science shapes how every child thinks, questions and creates.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-4)'
    }
  }, pedagogies.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.t,
    style: {
      background: 'rgba(255,255,255,0.06)',
      border: '1px solid rgba(255,255,255,0.12)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 'var(--radius-md)',
      background: 'var(--red-500)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon,
    size: 24,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-lg)',
      fontWeight: 700,
      color: '#fff',
      margin: '0 0 6px'
    }
  }, p.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'rgba(255,255,255,0.72)',
      lineHeight: 'var(--leading-normal)',
      margin: 0
    }
  }, p.d)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(EduMotifs, {
    tone: "light",
    density: "light"
  }), /*#__PURE__*/React.createElement(SectionDecor, {
    tone: "light"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-8)',
      alignItems: 'center',
      marginBottom: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      background: 'var(--gold-500)',
      color: 'var(--navy-700)',
      padding: '7px 15px',
      borderRadius: 'var(--radius-pill)',
      fontWeight: 700,
      fontSize: 'var(--text-sm)',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "flask",
    size: 16,
    color: "var(--navy-700)"
  }), "Centre for Innovation & Entrepreneurship"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-4xl)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: '0 0 0',
      lineHeight: 'var(--leading-tight)'
    }
  }, "The ETM Garage"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'var(--text-body)',
      margin: '16px 0 0',
      lineHeight: 'var(--leading-normal)'
    }
  }, "A real workshop where curious learners become young creators \u2014 equipped with the same emerging technologies that power industry. A step towards an innovative Pakistan.")), /*#__PURE__*/React.createElement(PhotoFrame, {
    src: "../../assets/photos/etm-garage.png",
    alt: "The ETM Garage",
    label: "The ETM Garage",
    icon: "flask",
    accent: "navy",
    ratio: "16 / 10"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--space-4)'
    }
  }, garage.map((g, i) => {
    const accent = i % 2 === 0 ? 'navy' : 'red';
    return /*#__PURE__*/React.createElement("div", {
      key: g.t,
      style: {
        background: 'var(--surface-card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-5)',
        boxShadow: 'var(--shadow-sm)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 52,
        height: 52,
        borderRadius: 'var(--radius-md)',
        background: `var(--${accent}-50)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: g.icon,
      size: 26,
      color: `var(--${accent}-600)`
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-base)',
        fontWeight: 700,
        color: 'var(--text-strong)',
        margin: '0 0 6px'
      }
    }, g.t), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--text-sm)',
        color: 'var(--text-body)',
        lineHeight: 'var(--leading-normal)',
        margin: 0
      }
    }, g.d));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: NAVY_GRADIENT,
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...PATTERNS.dotsNavy,
      position: 'absolute',
      inset: 0,
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 700,
      color: 'var(--gold-500)',
      lineHeight: 1.1
    }
  }, "7+"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'rgba(255,255,255,0.85)',
      fontWeight: 600,
      marginTop: 4
    }
  }, "technologies in every Garage")))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-subtle)',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(EduMotifs, {
    tone: "light",
    density: "light"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 720,
      margin: '0 auto var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(EyebrowLabel, {
    color: "red"
  }, "Standard 01 \xB7 Islamic values at the core"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-4xl)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: '12px 0 0',
      lineHeight: 'var(--leading-tight)'
    }
  }, "Friends of Quran & the Role Model Programme"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'var(--text-body)',
      margin: '14px 0 0',
      lineHeight: 'var(--leading-normal)'
    }
  }, "The first published ETM standard \u2014 non-negotiable in every ETM school. Faith and character are woven through everyday learning, not taught apart from it.")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 880,
      margin: '0 auto var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(PhotoFrame, {
    src: "../../assets/photos/foq-quran.png",
    alt: "Friends of Quran programme",
    accent: "navy",
    ratio: "16 / 9",
    caption: "The best of you are those who learn the Quran and teach it"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderTop: '4px solid var(--navy-500)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-7)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      height: 60,
      borderRadius: 'var(--radius-lg)',
      background: 'var(--navy-50)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bookOpen",
    size: 30,
    color: "var(--navy-600)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: '0 0 10px'
    }
  }, "Friends of Quran"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-normal)',
      margin: 0
    }
  }, "A daily companionship with the Holy Quran \u2014 building a lasting relationship with its words, meaning and guidance. Supported by compulsory Arabic, students grow in recitation, understanding and love for their faith.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderTop: '4px solid var(--red-500)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-7)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      height: 60,
      borderRadius: 'var(--radius-lg)',
      background: 'var(--red-50)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "star",
    size: 30,
    color: "var(--red-600)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: '0 0 10px'
    }
  }, "Prophet Muhammad \uFDFA as our Role Model"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-normal)',
      margin: 0
    }
  }, "The Role Model (SAWW) Programme places the character of the Prophet Muhammad \uFDFA at the heart of school life \u2014 guiding how students speak, share, lead and treat one another, so values are lived every day."))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      alignItems: 'center',
      background: 'var(--surface-subtle)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-7)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      flexShrink: 0,
      borderRadius: 'var(--radius-lg)',
      background: 'var(--navy-50)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "languages",
    size: 36,
    color: "var(--navy-600)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 280
    }
  }, /*#__PURE__*/React.createElement(EyebrowLabel, {
    color: "navy"
  }, "Compulsory Arabic"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: '10px 0 8px',
      lineHeight: 'var(--leading-tight)'
    }
  }, "The language of the Quran, for every learner"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      margin: 0,
      lineHeight: 'var(--leading-normal)',
      maxWidth: 640
    }
  }, "Arabic is taught as a compulsory subject across all grades \u2014 connecting our students to their faith and to one of the world\u2019s great languages, as part of our Islamic-values foundation."))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-subtle)',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(EduMotifs, {
    tone: "light",
    density: "light"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 620,
      margin: '0 auto var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(EyebrowLabel, {
    color: "red"
  }, "Reimagined roles"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-4xl)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: '12px 0 0',
      lineHeight: 'var(--leading-tight)'
    }
  }, "Everyone in the building is a mentor")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--space-5)'
    }
  }, roles.map((r, i) => {
    const accent = i % 2 === 0 ? 'navy' : 'red';
    return /*#__PURE__*/React.createElement(Card, {
      key: r.who,
      accent: accent
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 52,
        height: 52,
        borderRadius: 'var(--radius-md)',
        background: `var(--${accent}-50)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: r.icon,
      size: 26,
      color: `var(--${accent}-600)`
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--text-sm)',
        color: 'var(--text-muted)',
        fontWeight: 600
      }
    }, r.who, " as"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontSize: 'var(--text-xl)',
        fontWeight: 600,
        color: 'var(--text-strong)',
        margin: '4px 0 0',
        lineHeight: 'var(--leading-snug)'
      }
    }, r.as));
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: NAVY_GRADIENT,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...PATTERNS.gridNavy,
      position: 'absolute',
      inset: 0,
      opacity: 0.6
    }
  }), /*#__PURE__*/React.createElement(EduMotifs, {
    tone: "navy",
    density: "light"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--space-5)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 'var(--space-6)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-4xl)',
      fontWeight: 700,
      color: '#fff',
      margin: 0,
      lineHeight: 'var(--leading-tight)'
    }
  }, "Ready to begin the journey?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'rgba(255,255,255,0.82)',
      margin: '12px 0 0'
    }
  }, "Enroll your child in Pakistan\u2019s first ETM-powered school.")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 18
    }),
    onClick: () => onNav('Admissions'),
    style: {
      flexShrink: 0
    }
  }, "Begin admission"))));
}
window.AcademicsScreen = AcademicsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AcademicsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AdmissionsScreen.jsx
try { (() => {
// NGIS website — Admissions / "Enrolllment Guide" (from the NGIS Prospectus + Uniform guide)
function AdmissionsScreen() {
  const {
    Card,
    EyebrowLabel,
    Button,
    Input,
    Select,
    Alert,
    Badge
  } = window.NGISDesignSystem_f6dc23;
  const Icon = window.Icon;
  const {
    PATTERNS,
    NAVY_GRADIENT,
    SectionDecor
  } = window.Decor;
  const [submitted, setSubmitted] = React.useState(false);
  const [name, setName] = React.useState('');
  const steps = [{
    n: '01',
    t: 'Collect Prospectus & Admission Form',
    icon: 'fileText'
  }, {
    n: '02',
    t: 'Document Submission',
    icon: 'check'
  }, {
    n: '03',
    t: 'Parent Orientation Meeting',
    icon: 'users'
  }, {
    n: '04',
    t: 'Written Test & Interview',
    icon: 'bookOpen'
  }, {
    n: '05',
    t: 'Health Examination & Lab Tests',
    icon: 'heartPulse'
  }, {
    n: '06',
    t: 'Enrolllment & Fee Submission',
    icon: 'shieldCheck'
  }];

  // School uniform guideline.
  const uniformBoys = ['Cotton blue button-down shirt', 'Navy dress trousers', 'Blue & red striped tie', 'Black belt', 'Black socks with black shoes'];
  const uniformGirls = ['Navy blue tunic (pinafore)', 'White trousers', 'White full-sleeve shirt', 'Blue scarf', 'White shoes'];
  const documents = ['Child\u2019s recent passport-size photographs (4 copies)', 'Child\u2019s B-Form / Birth Certificate (original + photocopy)', 'Parent / Guardian\u2019s CNIC (photocopy of both sides)', 'School leaving certificate', 'Child\u2019s vaccination record / health card', 'Emergency contact information for two guardians', 'Completed NGIS Admission Form (signed by parent / guardian)'];
  const safety = [{
    icon: 'smartphone',
    color: 'navy',
    t: 'Digital Attendance System',
    d: 'Seamless attendance tracking that keeps parents instantly informed and connected.'
  }, {
    icon: 'heartPulse',
    color: 'red',
    t: 'Health Card',
    d: 'Healthy students lead to excellent minds — we safeguard the wellbeing of every child.'
  }, {
    icon: 'phone',
    color: 'navy',
    t: 'Parent Mobile Application',
    d: 'Stay updated with academics, notices and progress — anytime, anywhere.'
  }, {
    icon: 'shieldCheck',
    color: 'red',
    t: 'Security & Safety',
    d: 'A secure, well-monitored environment where children learn with confidence.'
  }];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: NAVY_GRADIENT,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...PATTERNS.gridNavy,
      position: 'absolute',
      inset: 0,
      opacity: 0.6
    }
  }), /*#__PURE__*/React.createElement(SectionDecor, {
    tone: "navy"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(EyebrowLabel, {
    color: "gold"
  }, "Enrolllment Guide"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-5xl)',
      fontWeight: 700,
      color: '#fff',
      margin: '14px 0 0',
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, "Begin your child\u2019s journey"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'rgba(255,255,255,0.82)',
      margin: '16px 0 0',
      maxWidth: 640,
      lineHeight: 'var(--leading-normal)'
    }
  }, "We warmly invite you to be part of Pakistan\u2019s first ETM-powered school. Here is everything you need to Enroll \u2014 InshaAllah."))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(EyebrowLabel, {
    color: "red"
  }, "The admission process"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-4xl)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: '12px 0 0'
    }
  }, "Six steps to Enrolllment")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: 'var(--space-4)'
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      background: 'var(--red-50)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 24,
    color: "var(--red-600)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-xl)',
      fontWeight: 700,
      color: 'var(--red-500)',
      lineHeight: 1,
      marginBottom: 6
    }
  }, s.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: 0,
      lineHeight: 'var(--leading-snug)'
    }
  }, s.t)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--space-5)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-7)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    accent: "navy",
    padding: "var(--space-7)"
  }, /*#__PURE__*/React.createElement(EyebrowLabel, {
    color: "navy"
  }, "Uniform guideline"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: '10px 0 20px'
    }
  }, "What to wear"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 'var(--radius-md)',
      background: 'var(--navy-500)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-serif)',
      fontWeight: 700,
      fontSize: 'var(--text-base)'
    }
  }, "B"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: 0,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)'
    }
  }, "Boys")), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, uniformBoys.map(u => /*#__PURE__*/React.createElement("li", {
    key: u,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-normal)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    color: "var(--navy-600)",
    style: {
      marginTop: 2,
      flexShrink: 0
    }
  }), u)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 'var(--radius-md)',
      background: 'var(--red-500)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-serif)',
      fontWeight: 700,
      fontSize: 'var(--text-base)'
    }
  }, "G"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: 0,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)'
    }
  }, "Girls")), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, uniformGirls.map(u => /*#__PURE__*/React.createElement("li", {
    key: u,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-normal)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    color: "var(--red-600)",
    style: {
      marginTop: 2,
      flexShrink: 0
    }
  }), u))))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      margin: '18px 0 0',
      lineHeight: 'var(--leading-normal)'
    }
  }, "The school crest badge is worn on the shirt pocket. Uniforms are available through the school\u2019s approved supplier.")), /*#__PURE__*/React.createElement(Card, {
    accent: "red",
    padding: "var(--space-7)"
  }, /*#__PURE__*/React.createElement(EyebrowLabel, {
    color: "red"
  }, "Required documents"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: '10px 0 20px'
    }
  }, "What to bring"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, documents.map(d => /*#__PURE__*/React.createElement("li", {
    key: d,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-normal)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18,
    color: "var(--red-600)",
    style: {
      marginTop: 2,
      flexShrink: 0
    }
  }), d)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(SectionDecor, {
    tone: "light"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 680,
      margin: '0 auto var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(EyebrowLabel, {
    color: "red"
  }, "Safety & student wellbeing"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-4xl)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: '12px 0 0',
      lineHeight: 'var(--leading-tight)'
    }
  }, "Intelligent safety, connected learning"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'var(--text-body)',
      margin: '14px 0 0',
      lineHeight: 'var(--leading-normal)'
    }
  }, "From the moment students step onto campus to the time they return home, every element is designed to make them feel secure and supported.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--space-5)'
    }
  }, safety.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.t,
    accent: s.color
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 'var(--radius-md)',
      background: `var(--${s.color}-50)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 26,
    color: `var(--${s.color}-600)`
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-lg)',
      fontWeight: 600,
      color: 'var(--text-strong)',
      margin: '0 0 8px',
      lineHeight: 'var(--leading-snug)'
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-normal)',
      margin: 0
    }
  }, s.d)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-subtle)',
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--space-5)',
      display: 'grid',
      gridTemplateColumns: '1.2fr 0.8fr',
      gap: 'var(--space-7)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-7)"
  }, /*#__PURE__*/React.createElement(EyebrowLabel, {
    color: "navy"
  }, "Enquiry form"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: '10px 0 22px'
    }
  }, "Request a prospectus"), submitted ? /*#__PURE__*/React.createElement(Alert, {
    tone: "success",
    title: `Thank you${name ? ', ' + name.split(' ')[0] : ''}.`
  }, "Your enquiry has been received. Our admissions team will be in touch within three working days with your prospectus and next steps, InshaAllah.") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Parent / guardian name",
    placeholder: "Full name",
    required: true,
    value: name,
    onChange: e => setName(e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email address",
    type: "email",
    placeholder: "you@example.com",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Child\\u2019s age",
    placeholder: "e.g. 6"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Stage of interest",
    required: true,
    options: ['Pre-Primary (2–6)', 'Primary', 'Secondary', 'Sixth Form']
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Message",
    placeholder: "Tell us a little about your child (optional)"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: () => setSubmitted(true)
  }, "Submit enquiry"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      margin: 0,
      textAlign: 'center'
    }
  }, "We respect your privacy. Your details are used only to respond to this enquiry."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    accent: "navy"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-xl)',
      fontWeight: 600,
      color: 'var(--text-strong)',
      margin: '0 0 12px'
    }
  }, "Speak to admissions"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "globe",
    size: 16,
    color: "var(--brand-ink)"
  }), "www.ngis.pk"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mapPin",
    size: 16,
    color: "var(--brand-ink)"
  }), "Karachi, Pakistan"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 16,
    color: "var(--brand-ink)"
  }), "admissions@ngis.pk"))), /*#__PURE__*/React.createElement(Card, {
    accent: "gold"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shieldCheck",
    size: 22,
    color: "var(--gold-700)"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-xl)',
      fontWeight: 600,
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "Accreditation")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-normal)',
      margin: 0
    }
  }, "An Initiative of Robotmea, accredited by Robotron, South Korea. Built on South Korean educational standards and grounded in Islamic values."))))));
}
window.AdmissionsScreen = AdmissionsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AdmissionsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Campuses.jsx
try { (() => {
// NGIS website — "Two campuses" section with social handles
function Campuses({
  heading = true
}) {
  const Icon = window.Icon;
  const {
    PATTERNS,
    SectionDecor,
    PhotoFrame
  } = window.Decor;
  const campuses = [{
    name: 'Malir Campus',
    area: 'Malir Cantt, Karachi',
    accent: 'navy',
    photo: '../../assets/photos/campus-building.jpeg',
    instagram: {
      handle: '@ngis_malir',
      url: 'https://www.instagram.com/ngis_malir'
    },
    facebook: {
      handle: 'NGIS Malir',
      url: 'https://www.facebook.com/profile.php?id=61575432466967'
    }
  }, {
    name: 'Jinnah Avenue Campus',
    area: 'Jinnah Avenue, Karachi',
    accent: 'red',
    photo: '../../assets/photos/campus-jinnah-avenue.png',
    instagram: {
      handle: '@ngis_jinnahavenue_official',
      url: 'https://www.instagram.com/ngis_jinnahavenue_official'
    },
    facebook: {
      handle: 'NGIS Jinnah Avenue',
      url: 'https://www.facebook.com/profile.php?id=61575391815391'
    }
  }];
  const Social = ({
    kind,
    handle,
    url
  }) => {
    const isIg = kind === 'instagram';
    return /*#__PURE__*/React.createElement("a", {
      href: url,
      target: "_blank",
      rel: "noopener noreferrer",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11,
        textDecoration: 'none',
        background: 'var(--surface-card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-md)',
        padding: '10px 14px',
        flex: 1,
        minWidth: 0,
        transition: 'box-shadow var(--dur-fast), transform var(--dur-fast)'
      },
      onMouseEnter: e => {
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
        e.currentTarget.style.transform = 'translateY(-1px)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'none';
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 36,
        height: 36,
        flexShrink: 0,
        borderRadius: 'var(--radius-sm)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: isIg ? 'linear-gradient(45deg, #F58529 0%, #DD2A7B 50%, #8134AF 100%)' : '#1877F2'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: kind,
      size: 19,
      color: "#fff"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: '11px',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: 'var(--tracking-wide)',
        color: 'var(--text-muted)',
        lineHeight: 1.2
      }
    }, isIg ? 'Instagram' : 'Facebook'), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 'var(--text-sm)',
        fontWeight: 600,
        color: 'var(--text-strong)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, handle)));
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-subtle)',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(SectionDecor, {
    tone: "light"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--space-5)'
    }
  }, heading && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 640,
      margin: '0 auto var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 'var(--text-sm)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wider)',
      color: 'var(--red-600)',
      marginBottom: 10
    }
  }, "Visit us in Karachi"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-4xl)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: 0,
      lineHeight: 'var(--leading-tight)'
    }
  }, "Two campuses, one movement"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'var(--text-body)',
      margin: '14px 0 0',
      lineHeight: 'var(--leading-normal)'
    }
  }, "The NGIS ETM experience, now at two locations across the city. Follow each campus for news, events and student life.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 'var(--space-7)'
    }
  }, campuses.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.name,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderTop: `4px solid var(--${c.accent}-500)`,
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '16 / 10',
      overflow: 'hidden',
      background: 'var(--surface-subtle)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: c.photo,
    alt: c.name,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(13,31,61,0.55), transparent 55%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 18,
      bottom: 16,
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      background: 'rgba(255,255,255,0.95)',
      borderRadius: 'var(--radius-pill)',
      padding: '6px 13px',
      fontSize: 'var(--text-sm)',
      fontWeight: 700,
      color: `var(--${c.accent}-700)`
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mapPin",
    size: 15,
    color: `var(--${c.accent}-600)`
  }), c.area))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: '0 0 4px'
    }
  }, c.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      margin: '0 0 18px'
    }
  }, "NextGen International School \xB7 Karachi"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Social, {
    kind: "instagram",
    handle: c.instagram.handle,
    url: c.instagram.url
  }), /*#__PURE__*/React.createElement(Social, {
    kind: "facebook",
    handle: c.facebook.handle,
    url: c.facebook.url
  }))))))));
}
window.Campuses = Campuses;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Campuses.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Decor.jsx
try { (() => {
// NGIS website — shared decorative system
// Disciplined to the brand's primary pair (red + navy) with gold as a sparing
// metallic accent. Provides background patterns, ring motifs (echoing the crest
// ring) and layered photo frames (the prospectus's stacked-rectangle look).

// ---- Background patterns (pure CSS, no asset loading) --------------------
const PATTERNS = {
  // faint dot grid for light surfaces
  dotsLight: {
    backgroundImage: 'radial-gradient(var(--ink-200) 1.1px, transparent 1.2px)',
    backgroundSize: '24px 24px'
  },
  // dot grid for navy surfaces
  dotsNavy: {
    backgroundImage: 'radial-gradient(rgba(255,255,255,0.09) 1.1px, transparent 1.2px)',
    backgroundSize: '24px 24px'
  },
  // fine engineering grid for navy surfaces
  gridNavy: {
    backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
    backgroundSize: '40px 40px'
  }
};

// Deep navy gradient used on all dark sections.
const NAVY_GRADIENT = 'linear-gradient(150deg, var(--navy-700) 0%, var(--navy-500) 60%, var(--navy-600) 100%)';

// ---- Ring motif ----------------------------------------------------------
// Concentric outline rings echoing the crest ring. Decorative only.
function Rings({
  size = 320,
  tone = 'light',
  style = {}
}) {
  const stroke = tone === 'navy' ? 'rgba(255,255,255,0.14)' : 'var(--ink-200)';
  const accent = tone === 'navy' ? 'rgba(253,204,14,0.5)' : 'var(--red-200)';
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 320 320",
    fill: "none",
    style: {
      position: 'absolute',
      pointerEvents: 'none',
      ...style
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "160",
    cy: "160",
    r: "158",
    stroke: stroke,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "160",
    cy: "160",
    r: "118",
    stroke: stroke,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "160",
    cy: "160",
    r: "78",
    stroke: accent,
    strokeWidth: "1.5",
    strokeDasharray: "3 7"
  }));
}

// ---- Section decoration layer -------------------------------------------
// Drops faint rings + a dot cluster behind a section. Parent must be
// position:relative with overflow:hidden.
function SectionDecor({
  tone = 'light'
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Rings, {
    tone: tone,
    size: 360,
    style: {
      top: -120,
      right: -110
    }
  }), /*#__PURE__*/React.createElement(Rings, {
    tone: tone,
    size: 240,
    style: {
      bottom: -100,
      left: -90
    }
  }));
}

// ---- Layered picture holder ----------------------------------------------
// A clean, light placeholder frame with an offset accent rectangle behind it
// (the catalogue's stacked-rectangle look). Reads clearly as "photo goes here";
// drop a real photo in later via the `src` prop.
function PhotoFrame({
  src,
  alt = '',
  label = 'Photo',
  caption,
  accent = 'red',
  ratio = '4 / 3',
  icon = 'image',
  style = {}
}) {
  const Icon = window.Icon;
  const accentVar = `var(--${accent}-500)`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      transform: 'translate(14px, 14px)',
      borderRadius: 'var(--radius-xl)',
      background: accentVar,
      opacity: 0.14
    },
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -6,
      left: -6,
      width: 48,
      height: 48,
      borderTop: `3px solid ${accentVar}`,
      borderLeft: `3px solid ${accentVar}`,
      borderTopLeftRadius: 'var(--radius-lg)',
      zIndex: 2
    },
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      background: '#fff',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-xl)',
      padding: 8,
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: ratio,
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: 'var(--surface-subtle)',
      border: '1.5px dashed var(--border-strong, var(--ink-200))',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...PATTERNS.dotsLight,
      position: 'absolute',
      inset: 0,
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: '50%',
      background: `var(--${accent}-50)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 24,
    color: accentVar
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      fontSize: 'var(--text-xs)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label)))), caption && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      zIndex: 2,
      bottom: 16,
      left: -10,
      background: '#fff',
      borderLeft: `3px solid ${accentVar}`,
      padding: '7px 13px',
      borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
      boxShadow: 'var(--shadow-md)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 'var(--text-sm)',
      color: 'var(--brand-ink)'
    }
  }, caption));
}

// ---- Floating education motifs -------------------------------------------
// Scatters faint subject icons behind a section for warmth (book, compass,
// rocket, star, flask, etc). Parent must be position:relative; overflow:hidden.
function EduMotifs({
  tone = 'light',
  density = 'normal'
}) {
  const Icon = window.Icon;
  const color = tone === 'navy' ? 'rgba(255,255,255,0.07)' : 'var(--ink-100)';
  const base = [{
    name: 'bookOpen',
    size: 64,
    top: '8%',
    left: '4%',
    rot: -12
  }, {
    name: 'compass',
    size: 52,
    top: '64%',
    left: '8%',
    rot: 10
  }, {
    name: 'rocket',
    size: 58,
    top: '14%',
    left: '88%',
    rot: 14
  }, {
    name: 'flask',
    size: 48,
    top: '72%',
    left: '82%',
    rot: -8
  }, {
    name: 'star',
    size: 40,
    top: '40%',
    left: '50%',
    rot: 0
  }, {
    name: 'graduationCap',
    size: 50,
    top: '82%',
    left: '46%',
    rot: 6
  }, {
    name: 'lightbulb',
    size: 44,
    top: '26%',
    left: '30%',
    rot: -6
  }, {
    name: 'brain',
    size: 46,
    top: '54%',
    left: '72%',
    rot: 12
  }];
  const motifs = density === 'light' ? base.filter((_, i) => i % 2 === 0) : base;
  return /*#__PURE__*/React.createElement(React.Fragment, null, motifs.map((m, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: m.top,
      left: m.left,
      transform: `rotate(${m.rot}deg)`,
      pointerEvents: 'none',
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: m.name,
    size: m.size,
    color: color,
    strokeWidth: 1.5
  }))));
}

// ---- Soft wave divider ---------------------------------------------------
// A friendly curved transition between sections. Place at the very top or
// bottom of a section; `fill` should match the ADJACENT section's background.
function WaveDivider({
  fill = 'var(--surface-page)',
  flip = false,
  height = 56
}) {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      [flip ? 'bottom' : 'top']: -1,
      lineHeight: 0,
      transform: flip ? 'scaleY(-1)' : 'none',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 1440 56",
    width: "100%",
    height: height,
    preserveAspectRatio: "none",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0,32 C240,64 480,0 720,16 C960,32 1200,64 1440,24 L1440,0 L0,0 Z",
    fill: fill
  })));
}

// ---- Multilingual class-name badge --------------------------------------
// Shows a class's English / Korean / Arabic names — the school's signature
// trilingual identity system.
function ClassNameStack({
  en,
  ko,
  ar,
  accent = 'navy'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 700,
      fontSize: 'var(--text-xl)',
      color: 'var(--text-strong)'
    }
  }, en), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: `var(--${accent}-600)`,
      fontWeight: 600
    }
  }, ko), /*#__PURE__*/React.createElement("span", {
    dir: "rtl",
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-muted)'
    }
  }, ar));
}
window.Decor = {
  PATTERNS,
  NAVY_GRADIENT,
  Rings,
  SectionDecor,
  PhotoFrame,
  EduMotifs,
  WaveDivider,
  ClassNameStack
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Decor.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FacultyScreen.jsx
try { (() => {
// NGIS website — Faculty Development Cell
// Content from the school's Faculty Development reference + Robotmea ETM brief.
function FacultyScreen({
  onNav
}) {
  const {
    Card,
    EyebrowLabel,
    Button,
    Badge
  } = window.NGISDesignSystem_f6dc23;
  const Icon = window.Icon;
  const {
    PATTERNS,
    NAVY_GRADIENT,
    SectionDecor,
    PhotoFrame,
    EduMotifs
  } = window.Decor;
  const programmes = [{
    t: 'Teacher Training & PD',
    d: 'Structured professional development that brings an entire faculty up to a modern teaching standard.',
    icon: 'graduationCap',
    accent: 'red'
  }, {
    t: 'Educational Leadership',
    d: 'Leadership programmes for principals and heads of department driving whole-school change.',
    icon: 'users',
    accent: 'navy'
  }, {
    t: 'AI, Robotics & STEAM',
    d: 'Deep capability-building in AI, robotics, STEAM education and emerging technologies.',
    icon: 'brain',
    accent: 'red'
  }, {
    t: 'Curriculum & Assessment',
    d: 'Innovation in curriculum design and assessment — moving beyond rote learning toward evidence of real understanding.',
    icon: 'bookMarked',
    accent: 'navy'
  }, {
    t: 'International Certification',
    d: 'Internationally recognised certifications and recognition for participating educators.',
    icon: 'award',
    accent: 'red'
  }, {
    t: 'Continuous PD (CPD)',
    d: 'Ongoing CPD cycles that keep the standard alive long after the initial training ends.',
    icon: 'refresh',
    accent: 'navy'
  }, {
    t: 'International L&D',
    d: 'Access to international learning-and-development programmes, courses and exchange opportunities.',
    icon: 'globe',
    accent: 'red'
  }];
  const credentials = [{
    icon: 'award',
    t: 'Robotron Certification',
    d: 'Educators who complete the programme earn certificates issued by Robotron, South Korea.'
  }, {
    icon: 'globe',
    t: 'International Standards',
    d: 'Training is benchmarked to global teaching standards, not local minimums.'
  }, {
    icon: 'users',
    t: 'Open to Outsiders',
    d: 'The Cell is open to educators beyond NGIS — a resource for the wider teaching community.'
  }, {
    icon: 'shieldCheck',
    t: 'An Initiative of Robotmea',
    d: 'An initiative of Robotmea, accredited by Robotron — the same authority behind ETM.'
  }];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: NAVY_GRADIENT,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...PATTERNS.gridNavy,
      position: 'absolute',
      inset: 0,
      opacity: 0.6
    }
  }), /*#__PURE__*/React.createElement(EduMotifs, {
    tone: "navy",
    density: "light"
  }), /*#__PURE__*/React.createElement(SectionDecor, {
    tone: "navy"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--space-5)',
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EyebrowLabel, {
    color: "gold"
  }, "An Initiative of Robotmea \xB7 Accredited by Robotron"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-6xl)',
      fontWeight: 700,
      color: '#fff',
      margin: '14px 0 0',
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, "Faculty Development Cell"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'var(--text-2xl)',
      color: 'var(--gold-500)',
      margin: '12px 0 0'
    }
  }, "Teachers first. Always."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'rgba(255,255,255,0.82)',
      margin: '18px 0 0',
      maxWidth: 540,
      lineHeight: 'var(--leading-normal)'
    }
  }, "The single most reliable predictor of a programme\u2019s outcome is the teacher standing next to the technology. The Cell empowers educators and school leaders with 21st-century teaching skills \u2014 from emerging-technology pedagogy to international certification and continuous professional development.")), /*#__PURE__*/React.createElement(PhotoFrame, {
    src: "../../assets/photos/faculty-development.png",
    alt: "Faculty Development session at NGIS",
    accent: "red",
    ratio: "4 / 3",
    caption: "Empowering educators"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-7) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      alignItems: 'center',
      flexWrap: 'wrap',
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 500,
      color: 'var(--text-strong)',
      lineHeight: 'var(--leading-snug)',
      margin: 0,
      maxWidth: 900,
      textWrap: 'balance'
    }
  }, "Technology changes a classroom only as much as the teacher beside it. So we invest in teachers first \u2014 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--red-600)'
    }
  }, "better teachers, stronger learners, a brighter tomorrow."))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-subtle)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(EduMotifs, {
    tone: "light",
    density: "light"
  }), /*#__PURE__*/React.createElement(SectionDecor, {
    tone: "light"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 680,
      margin: '0 auto var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(EyebrowLabel, {
    color: "red"
  }, "What the Cell delivers"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-4xl)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: '12px 0 0',
      lineHeight: 'var(--leading-tight)'
    }
  }, "Seven programmes for educator growth")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--space-5)'
    }
  }, programmes.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.t,
    accent: p.accent,
    interactive: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 'var(--radius-md)',
      background: `var(--${p.accent}-50)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon,
    size: 26,
    color: `var(--${p.accent}-600)`
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-xl)',
      fontWeight: 600,
      color: 'var(--text-strong)',
      margin: '0 0 8px',
      lineHeight: 'var(--leading-snug)'
    }
  }, p.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-normal)',
      margin: 0
    }
  }, p.d))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: NAVY_GRADIENT,
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...PATTERNS.dotsNavy,
      position: 'absolute',
      inset: 0,
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-xl)',
      fontWeight: 700,
      color: '#fff',
      margin: '0 0 10px',
      lineHeight: 'var(--leading-snug)'
    }
  }, "Train with us"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'rgba(255,255,255,0.78)',
      margin: '0 0 16px',
      lineHeight: 'var(--leading-normal)'
    }
  }, "Open to educators from every school."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 15
    }),
    onClick: () => onNav('Admissions')
  }, "Enquire")))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...PATTERNS.dotsLight,
      position: 'absolute',
      inset: 0,
      opacity: 0.4
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.85fr 1.15fr',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(PhotoFrame, {
    src: "../../assets/photos/students-classroom.png",
    alt: "NGIS learners",
    accent: "navy",
    ratio: "5 / 4",
    caption: "Trained for global standards"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EyebrowLabel, {
    color: "navy"
  }, "Recognition that travels"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-4xl)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: '12px 0 22px',
      lineHeight: 'var(--leading-tight)'
    }
  }, "Certified by Robotron. Open to all."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 'var(--space-4)'
    }
  }, credentials.map((c, i) => {
    const accent = i % 2 === 0 ? 'navy' : 'red';
    return /*#__PURE__*/React.createElement("div", {
      key: c.t,
      style: {
        display: 'flex',
        gap: 14,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 46,
        height: 46,
        flexShrink: 0,
        borderRadius: 'var(--radius-md)',
        background: `var(--${accent}-50)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: c.icon,
      size: 23,
      color: `var(--${accent}-600)`
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-base)',
        fontWeight: 700,
        color: 'var(--text-strong)',
        margin: '0 0 4px'
      }
    }, c.t), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--text-sm)',
        color: 'var(--text-body)',
        lineHeight: 'var(--leading-normal)',
        margin: 0
      }
    }, c.d)));
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: NAVY_GRADIENT,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...PATTERNS.gridNavy,
      position: 'absolute',
      inset: 0,
      opacity: 0.6
    }
  }), /*#__PURE__*/React.createElement(EduMotifs, {
    tone: "navy",
    density: "light"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--space-5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-6)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-4xl)',
      fontWeight: 700,
      color: '#fff',
      margin: 0,
      lineHeight: 'var(--leading-tight)'
    }
  }, "Grow with the Faculty Development Cell"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'rgba(255,255,255,0.82)',
      margin: '12px 0 0'
    }
  }, "For NGIS faculty and educators everywhere \u2014 earn Robotron-certified credentials.")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 18
    }),
    onClick: () => onNav('Admissions'),
    style: {
      flexShrink: 0
    }
  }, "Get in touch"))));
}
window.FacultyScreen = FacultyScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FacultyScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// NGIS website — footer
function Footer({
  onNav
}) {
  const Icon = window.Icon;
  const cols = [{
    h: 'Academics',
    items: ['Grade Structure', 'The System Model', 'Discovery & Innovation Hub', 'ETM Garage']
  }, {
    h: 'Faculty',
    items: ['Faculty Development Cell', 'Robotron Certification', 'International L&D', 'Continuous PD']
  }, {
    h: 'Admissions',
    items: ['Admission Process', 'Uniform Guideline', 'Required Documents', 'Safety & Wellbeing']
  }, {
    h: 'Gallery',
    items: ['Life at NextGen', 'Classrooms', 'STEAM Projects', 'Events']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--navy-700)',
      color: 'rgba(255,255,255,0.82)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--space-5) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1fr 1fr 1fr',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/ngis-logo-crest.png",
    alt: "NGIS",
    style: {
      width: 48,
      height: 48,
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 700,
      fontSize: 18,
      color: '#fff'
    }
  }, "NextGen International School")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-normal)',
      maxWidth: 320,
      margin: '0 0 16px'
    }
  }, "Pakistan\u2019s first ETM-powered school (Playgroup\u2013Grade\xA05) \u2014 transforming education for a better tomorrow, on South Korean standards and grounded in Islamic values."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      fontSize: 'var(--text-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mapPin",
    size: 16,
    color: "var(--gold-500)",
    style: {
      marginTop: 2,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#fff',
      fontWeight: 700
    }
  }, "Malir Campus"), /*#__PURE__*/React.createElement("br", null), "Malir Cantt, Karachi")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mapPin",
    size: 16,
    color: "var(--gold-500)",
    style: {
      marginTop: 2,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#fff',
      fontWeight: 700
    }
  }, "Jinnah Avenue Campus"), /*#__PURE__*/React.createElement("br", null), "Jinnah Avenue, Karachi")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 16,
    color: "var(--gold-500)"
  }), "admissions@ngis.pk")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      color: 'rgba(255,255,255,0.6)',
      marginBottom: 10
    }
  }, "Follow our campuses"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, [{
    kind: 'instagram',
    label: 'Malir',
    url: 'https://www.instagram.com/ngis_malir'
  }, {
    kind: 'facebook',
    label: 'Malir',
    url: 'https://www.facebook.com/profile.php?id=61575432466967'
  }, {
    kind: 'instagram',
    label: 'Jinnah Ave',
    url: 'https://www.instagram.com/ngis_jinnahavenue_official'
  }, {
    kind: 'facebook',
    label: 'Jinnah Ave',
    url: 'https://www.facebook.com/profile.php?id=61575391815391'
  }].map((s, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: s.url,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      textDecoration: 'none',
      background: 'rgba(255,255,255,0.08)',
      border: '1px solid rgba(255,255,255,0.14)',
      borderRadius: 'var(--radius-pill)',
      padding: '6px 12px',
      fontSize: 'var(--text-xs)',
      fontWeight: 600,
      color: 'rgba(255,255,255,0.9)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.kind,
    size: 15,
    color: s.kind === 'instagram' ? '#E1306C' : '#4d8bf0'
  }), s.label))))), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 'var(--text-sm)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      color: '#fff',
      marginBottom: 14
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, c.items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav && onNav(c.h),
    style: {
      fontSize: 'var(--text-sm)',
      color: 'rgba(255,255,255,0.78)',
      cursor: 'pointer',
      textDecoration: 'none'
    }
  }, it))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.14)',
      marginTop: 'var(--space-6)',
      paddingTop: 'var(--space-4)',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 'var(--text-xs)',
      color: 'rgba(255,255,255,0.6)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 NextGen International School. An Initiative of Robotmea \xB7 Accredited by Robotron, South Korea."), /*#__PURE__*/React.createElement("span", null, "Privacy Policy \xB7 Terms \xB7 Safeguarding"))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/GalleryScreen.jsx
try { (() => {
// NGIS website — Gallery / "Life at NextGen" (school updates)
function GalleryScreen({
  onNav
}) {
  const {
    EyebrowLabel,
    Button,
    Badge
  } = window.NGISDesignSystem_f6dc23;
  const Icon = window.Icon;
  const {
    PATTERNS,
    NAVY_GRADIENT,
    SectionDecor,
    PhotoFrame,
    EduMotifs
  } = window.Decor;

  // Gallery items — real NGIS photography mapped to school themes.
  const items = [{
    src: '../../assets/photos/etm-garage.png',
    tag: 'ETM Garage',
    accent: 'red',
    caption: 'Young innovators at work',
    ratio: '4 / 3'
  }, {
    src: '../../assets/photos/foq-quran.png',
    tag: 'Faith',
    accent: 'navy',
    caption: 'Friends of Quran',
    ratio: '4 / 5'
  }, {
    src: '../../assets/photos/steam-classroom.png',
    tag: 'STEAM',
    accent: 'navy',
    caption: 'STEAM in the classroom',
    ratio: '16 / 11'
  }, {
    src: '../../assets/photos/innovate-lab.png',
    tag: 'Classrooms',
    accent: 'red',
    caption: 'Discovery & Innovation Hub',
    ratio: '4 / 3'
  }, {
    src: '../../assets/photos/students-classroom.png',
    tag: 'Student Life',
    accent: 'red',
    caption: 'Learning together',
    ratio: '16 / 10'
  }, {
    src: '../../assets/photos/faculty-development.png',
    tag: 'Faculty',
    accent: 'navy',
    caption: 'Faculty Development Cell',
    ratio: '4 / 3'
  }, {
    src: '../../assets/photos/hero-students.png',
    tag: 'Campus',
    accent: 'navy',
    caption: 'A day at NextGen',
    ratio: '16 / 11'
  }, {
    tag: 'Events',
    accent: 'red',
    label: 'Competitions & showcases',
    icon: 'trophy',
    ratio: '4 / 5'
  }];

  // split into 3 columns for a masonry feel
  const cols = [[], [], []];
  items.forEach((it, i) => cols[i % 3].push(it));
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: NAVY_GRADIENT,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...PATTERNS.gridNavy,
      position: 'absolute',
      inset: 0,
      opacity: 0.6
    }
  }), /*#__PURE__*/React.createElement(EduMotifs, {
    tone: "navy",
    density: "light"
  }), /*#__PURE__*/React.createElement(SectionDecor, {
    tone: "navy"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(EyebrowLabel, {
    color: "gold"
  }, "From our classrooms"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-5xl)',
      fontWeight: 700,
      color: '#fff',
      margin: '14px 0 0',
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, "Life at NextGen"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'rgba(255,255,255,0.82)',
      margin: '16px 0 0',
      maxWidth: 620,
      lineHeight: 'var(--leading-normal)'
    }
  }, "A window into everyday learning \u2014 projects, hubs, competitions and the moments that make our school a movement."))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-5)',
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, ['All updates', 'Curriculum', 'Classrooms', 'STEAM', 'ETM Garage', 'Events', 'Faith'].map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      padding: '8px 16px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      cursor: 'default',
      background: i === 0 ? 'var(--navy-600)' : 'var(--surface-subtle)',
      color: i === 0 ? '#fff' : 'var(--text-body)',
      border: i === 0 ? 'none' : '1px solid var(--border)'
    }
  }, c)))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...PATTERNS.dotsLight,
      position: 'absolute',
      inset: 0,
      opacity: 0.4
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--space-5)',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-6)'
    }
  }, cols.map((col, ci) => /*#__PURE__*/React.createElement("div", {
    key: ci,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6) '
    }
  }, col.map((it, ii) => /*#__PURE__*/React.createElement("div", {
    key: ii,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 18,
      left: 18,
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(4px)',
      borderRadius: 'var(--radius-pill)',
      padding: '5px 12px',
      fontSize: 'var(--text-xs)',
      fontWeight: 700,
      color: `var(--${it.accent}-700)`,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: `var(--${it.accent}-500)`
    }
  }), it.tag)), /*#__PURE__*/React.createElement(PhotoFrame, {
    src: it.src,
    alt: it.caption || it.label,
    accent: it.accent,
    ratio: it.ratio,
    caption: it.caption,
    label: it.label,
    icon: it.icon
  }))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-subtle)',
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--space-5)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: '0 0 8px'
    }
  }, "Want to see it in person?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'var(--text-body)',
      margin: '0 0 22px'
    }
  }, "Book a campus tour and experience the ETM ecosystem first-hand."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 18
    }),
    onClick: () => onNav('Admissions')
  }, "Book a tour"))));
}
window.GalleryScreen = GalleryScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/GalleryScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
// NGIS website — top navigation header
function Header({
  active,
  onNav
}) {
  const {
    Button
  } = window.NGISDesignSystem_f6dc23;
  const Icon = window.Icon;
  const links = ['Home', 'Academics', 'Faculty', 'Admissions', 'Gallery'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'var(--surface-navy)',
      borderBottom: '3px solid var(--brand)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--space-5)',
      height: 'var(--header-height)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('Home'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      cursor: 'pointer',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/ngis-logo-crest.png",
    alt: "NGIS",
    style: {
      width: 44,
      height: 44,
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.1,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 700,
      fontSize: 17,
      color: '#fff',
      letterSpacing: '0.01em'
    }
  }, "NextGen International"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 10.5,
      color: 'var(--gold-500)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase'
    }
  }, "School"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 4,
      marginLeft: 'auto'
    },
    className: "ngis-nav"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    onClick: () => onNav(l),
    style: {
      padding: '8px 14px',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: active === l ? '#fff' : 'rgba(255,255,255,0.78)',
      background: active === l ? 'rgba(255,255,255,0.12)' : 'transparent',
      transition: 'background var(--dur-fast), color var(--dur-fast)'
    },
    onMouseEnter: e => {
      if (active !== l) e.currentTarget.style.color = '#fff';
    },
    onMouseLeave: e => {
      if (active !== l) e.currentTarget.style.color = 'rgba(255,255,255,0.78)';
    }
  }, l))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 15
    }),
    onClick: () => onNav('Admissions')
  }, "Apply")));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
// NGIS website — Home screen (content from the NGIS Prospectus + ETM Concept Deck)
function HomeScreen({
  onNav
}) {
  const {
    Button,
    Stat,
    Card,
    EyebrowLabel,
    Badge
  } = window.NGISDesignSystem_f6dc23;
  const Icon = window.Icon;
  const {
    PATTERNS,
    NAVY_GRADIENT,
    SectionDecor,
    PhotoFrame,
    EduMotifs,
    WaveDivider
  } = window.Decor;

  // The four crest quadrants → the ETM education model.
  const pillars = [{
    icon: 'school',
    accent: 'navy',
    t: 'South Korean Standards',
    d: 'A globally benchmarked academic system aligned with South Korean educational excellence and the Pakistan National Curriculum (NCP).'
  }, {
    icon: 'brain',
    accent: 'red',
    t: 'Emerging Technologies',
    d: 'Robotics, coding and AI woven through every stage of learning — from Playgroup to Grade 5.'
  }, {
    icon: 'bookOpen',
    accent: 'navy',
    t: 'Islamic Values',
    d: 'Character grounded in faith through our Friends of Quran and Role Model (SAWW) programmes.'
  }, {
    icon: 'lightbulb',
    accent: 'red',
    t: 'Innovation & Enterprise',
    d: 'The ETM Garage — our centre for innovation that turns curious learners into young creators.'
  }];

  // What ETM refuses to do (from the Concept Deck).
  const differentiators = [{
    no: 'No Homework',
    yes: 'Learning happens at school',
    icon: 'compass'
  }, {
    no: 'No Heavy Bags',
    yes: 'The One-Book (System) Model',
    icon: 'layers'
  }, {
    no: 'No Boring Classes',
    yes: 'PBIL is the default',
    icon: 'sparkles'
  }, {
    no: 'No Rote Learning',
    yes: 'Portfolios over memorisation',
    icon: 'zap'
  }, {
    no: 'No Exam Pressure',
    yes: 'Continuous assessment',
    icon: 'shieldCheck'
  }];

  // The five published ETM standards — the "standards stack".
  const standards = [{
    n: '01',
    t: 'Friends of Quran & Role Model (SAWW)',
    icon: 'star'
  }, {
    n: '02',
    t: 'STEAM-Integrated Academic Planning',
    icon: 'layers'
  }, {
    n: '03',
    t: 'Discovery & Innovation Hub',
    icon: 'compass'
  }, {
    n: '04',
    t: 'The ETM Garage',
    icon: 'flask'
  }, {
    n: '05',
    t: 'Faculty Development Cell',
    icon: 'award'
  }];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: NAVY_GRADIENT,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...PATTERNS.gridNavy,
      position: 'absolute',
      inset: 0,
      opacity: 0.7
    }
  }), /*#__PURE__*/React.createElement(EduMotifs, {
    tone: "navy",
    density: "light"
  }), /*#__PURE__*/React.createElement(SectionDecor, {
    tone: "navy"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--space-5)',
      display: 'grid',
      gridTemplateColumns: '1.12fr 0.88fr',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      background: 'var(--red-500)',
      color: '#fff',
      padding: '8px 16px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 'var(--text-sm)',
      letterSpacing: '0.01em',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "star",
    size: 16,
    color: "var(--gold-500)"
  }), "Pakistan\u2019s First ETM-Powered School"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-6xl)',
      fontWeight: 700,
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-tight)',
      color: '#fff',
      margin: '18px 0 0'
    }
  }, "Transforming education", /*#__PURE__*/React.createElement("br", null), "for a ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-500)'
    }
  }, "better tomorrow.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      lineHeight: 'var(--leading-normal)',
      color: 'rgba(255,255,255,0.82)',
      maxWidth: 530,
      margin: '20px 0 28px'
    }
  }, "A Playgroup\u2013to\u2013Grade\xA05 movement combining South Korean academic standards, a STEAM-integrated curriculum and deep-rooted Islamic values. We are not just another school \u2014 we are a movement toward transformational education."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav('Admissions')
  }, "Apply for admission"))), /*#__PURE__*/React.createElement(PhotoFrame, {
    src: "../../assets/photos/hero-students.png",
    alt: "NGIS students outside the school",
    accent: "red",
    ratio: "4 / 3",
    caption: "Karachi, Pakistan"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderTop: '1px solid rgba(255,255,255,0.12)',
      background: 'rgba(0,0,0,0.18)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-4) var(--space-5)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      flexWrap: 'wrap',
      fontSize: 'var(--text-sm)',
      color: 'rgba(255,255,255,0.78)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shieldCheck",
    size: 17,
    color: "var(--gold-500)"
  }), "An Initiative of Robotmea"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "award",
    size: 17,
    color: "var(--gold-500)"
  }), "Accredited by Robotron, South Korea"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bookMarked",
    size: 17,
    color: "var(--gold-500)"
  }), "Integrated with the Pakistan National Curriculum")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-7) var(--space-5)',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "1st",
    label: "ETM-powered school in Pakistan",
    color: "red"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "Play\u2013G5",
    label: "Playgroup to Grade 5 \xB7 ages 3\u201311",
    color: "navy"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "Arabic",
    label: "Compulsory language of the Quran",
    color: "red"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "0",
    label: "Homework \xB7 rote learning \xB7 exam pressure",
    color: "navy"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...PATTERNS.dotsLight,
      position: 'absolute',
      inset: 0,
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--space-5)',
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(PhotoFrame, {
    src: "../../assets/photos/students-classroom.png",
    alt: "NGIS students in class",
    accent: "navy",
    ratio: "5 / 4",
    caption: "Our commitment to your child"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EyebrowLabel, {
    color: "red"
  }, "Who we are"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-4xl)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: '12px 0 0',
      lineHeight: 'var(--leading-tight)'
    }
  }, "Where local values meet global standards"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'var(--text-body)',
      margin: '18px 0 0',
      lineHeight: 'var(--leading-normal)'
    }
  }, "NextGen International School brings a globally benchmarked educational system to Karachi \u2014 combining South Korean academic excellence with a STEAM-integrated curriculum and deep-rooted Islamic values, for learners from Playgroup through Grade 5."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)',
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      background: 'var(--navy-50)',
      border: '1px solid var(--navy-100)',
      borderLeft: '4px solid var(--red-500)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      flexShrink: 0,
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-card)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "compass",
    size: 24,
    color: "var(--navy-600)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      color: 'var(--text-muted)'
    }
  }, "Our vision"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 700,
      color: 'var(--brand-ink)',
      lineHeight: 'var(--leading-snug)',
      marginTop: 2
    }
  }, "Transforming Education for a Better Tomorrow")))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: NAVY_GRADIENT,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...PATTERNS.dotsNavy,
      position: 'absolute',
      inset: 0,
      opacity: 0.8
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 680,
      margin: '0 auto var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(EyebrowLabel, {
    color: "gold"
  }, "What ETM refuses to do"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-4xl)',
      fontWeight: 700,
      color: '#fff',
      margin: '12px 0 0',
      lineHeight: 'var(--leading-tight)'
    }
  }, "From transactional to transformational"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'rgba(255,255,255,0.82)',
      margin: '14px 0 0',
      lineHeight: 'var(--leading-normal)'
    }
  }, "We replaced the tired conventions of traditional schooling with an ecosystem designed to make every child relevant for tomorrow\u2019s world.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 'var(--space-4)'
    }
  }, differentiators.map(d => /*#__PURE__*/React.createElement("div", {
    key: d.no,
    style: {
      background: 'rgba(255,255,255,0.06)',
      border: '1px solid rgba(255,255,255,0.12)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      color: 'rgba(255,255,255,0.55)',
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      textDecoration: 'line-through',
      textDecorationColor: 'var(--red-500)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ban",
    size: 16,
    color: "var(--red-500)"
  }), d.no), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'rgba(255,255,255,0.12)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-md)',
      background: 'var(--red-500)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: d.icon,
    size: 22,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 'var(--text-base)',
      color: '#fff',
      lineHeight: 'var(--leading-snug)'
    }
  }, d.yes)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-subtle)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(EduMotifs, {
    tone: "light",
    density: "light"
  }), /*#__PURE__*/React.createElement(SectionDecor, {
    tone: "light"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 660,
      margin: '0 auto var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(EyebrowLabel, {
    color: "red"
  }, "Our learning ecosystem"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-4xl)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: '12px 0 0',
      lineHeight: 'var(--leading-tight)'
    }
  }, "Four pillars, drawn from our crest"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'var(--text-body)',
      margin: '14px 0 0',
      lineHeight: 'var(--leading-normal)'
    }
  }, "Where local values meet global standards \u2014 and emerging technology meets enduring character.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--space-5)'
    }
  }, pillars.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.t,
    accent: p.accent,
    interactive: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 'var(--radius-md)',
      background: `var(--${p.accent}-50)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon,
    size: 26,
    color: `var(--${p.accent}-600)`
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-xl)',
      fontWeight: 600,
      color: 'var(--text-strong)',
      margin: '0 0 8px'
    }
  }, p.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-normal)',
      margin: 0
    }
  }, p.d)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.8fr 1.2fr',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EyebrowLabel, {
    color: "navy"
  }, "The standards stack"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-4xl)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: '12px 0 0',
      lineHeight: 'var(--leading-tight)'
    }
  }, "Five published standards, non-negotiable in every ETM school"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-muted)',
      margin: '16px 0 0',
      lineHeight: 'var(--leading-normal)'
    }
  }, "These are the structural reasons ETM is a movement, not a brand. Every ETM school delivers all five \u2014 audited quarterly by Robotron.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, standards.map((s, i) => {
    const accent = i % 2 === 0 ? 'navy' : 'red';
    return /*#__PURE__*/React.createElement("div", {
      key: s.n,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 18,
        background: 'var(--surface-card)',
        border: '1px solid var(--border)',
        borderLeft: `4px solid var(--${accent}-500)`,
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-4) var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontWeight: 700,
        fontSize: 'var(--text-2xl)',
        color: `var(--${accent}-500)`,
        minWidth: 36
      }
    }, s.n), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 44,
        height: 44,
        flexShrink: 0,
        borderRadius: 'var(--radius-md)',
        background: `var(--${accent}-50)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: s.icon,
      size: 22,
      color: `var(--${accent}-600)`
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontWeight: 700,
        fontSize: 'var(--text-lg)',
        color: 'var(--text-strong)'
      }
    }, s.t));
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-subtle)',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(EduMotifs, {
    tone: "light",
    density: "light"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(EyebrowLabel, {
    color: "navy"
  }, "The ETM equation"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-4xl)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: '12px 0 0',
      lineHeight: 'var(--leading-tight)'
    }
  }, "The Educational Transformation Movement")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-4)',
      flexWrap: 'wrap'
    }
  }, [{
    t: 'Emerging Technologies',
    icon: 'brain'
  }, {
    op: '+'
  }, {
    t: 'Progressive Curriculum',
    icon: 'bookMarked'
  }, {
    op: '+'
  }, {
    t: 'Islamic Values',
    icon: 'star'
  }, {
    op: '='
  }, {
    t: 'Success — Inshallah',
    icon: 'trophy',
    solid: true
  }].map((c, i) => c.op ? /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-4xl)',
      fontWeight: 700,
      color: 'var(--text-faint)'
    }
  }, c.op) : /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
      padding: 'var(--space-5) var(--space-4)',
      borderRadius: 'var(--radius-lg)',
      minWidth: 150,
      background: c.solid ? 'var(--red-500)' : 'var(--surface-card)',
      border: c.solid ? 'none' : '1px solid var(--navy-100)',
      boxShadow: c.solid ? 'var(--shadow-md)' : 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 30,
    color: c.solid ? '#fff' : 'var(--navy-600)'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 'var(--text-base)',
      textAlign: 'center',
      lineHeight: 'var(--leading-snug)',
      color: c.solid ? '#fff' : 'var(--text-strong)'
    }
  }, c.t)))), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      fontSize: 'var(--text-base)',
      color: 'var(--text-muted)',
      margin: 'var(--space-6) auto 0',
      maxWidth: 620,
      lineHeight: 'var(--leading-normal)'
    }
  }, "ETM is a Robotron-certified system from South Korea \u2014 an enabling ecosystem that integrates emerging technologies, a future-ready curriculum and Islamic values to make every learner relevant."))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 'var(--space-6)',
      flexWrap: 'wrap',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EyebrowLabel, {
    color: "red"
  }, "From our classrooms"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-4xl)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: '12px 0 0',
      lineHeight: 'var(--leading-tight)'
    }
  }, "Life at NextGen")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 17
    }),
    onClick: () => onNav('Gallery')
  }, "View the gallery")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(PhotoFrame, {
    src: "../../assets/photos/innovate-lab.png",
    alt: "Innovation lab",
    accent: "red",
    ratio: "4 / 3"
  }), /*#__PURE__*/React.createElement(PhotoFrame, {
    src: "../../assets/photos/foq-quran.png",
    alt: "Friends of Quran",
    accent: "navy",
    ratio: "4 / 3"
  }), /*#__PURE__*/React.createElement(PhotoFrame, {
    src: "../../assets/photos/etm-garage.png",
    alt: "ETM Garage",
    accent: "red",
    ratio: "4 / 3"
  })))), /*#__PURE__*/React.createElement(Campuses, null), /*#__PURE__*/React.createElement("section", {
    style: {
      background: NAVY_GRADIENT,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...PATTERNS.gridNavy,
      position: 'absolute',
      inset: 0,
      opacity: 0.6
    }
  }), /*#__PURE__*/React.createElement(EduMotifs, {
    tone: "navy",
    density: "light"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--space-5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-6)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-4xl)',
      fontWeight: 700,
      color: '#fff',
      margin: 0,
      lineHeight: 'var(--leading-tight)'
    }
  }, "Join the ETM Movement"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'rgba(255,255,255,0.82)',
      margin: '12px 0 0'
    }
  }, "Make your child relevant for tomorrow\u2019s world. Book a tour or begin your application today.")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 18
    }),
    onClick: () => onNav('Admissions'),
    style: {
      flexShrink: 0
    }
  }, "Begin admission"))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Icon.jsx
try { (() => {
// NGIS UI kit — curated Lucide icons (https://lucide.dev, ISC).
// Line style, 24x24, 2px stroke, round caps — matches the brand's icon spec.
// Usage: <Icon name="menu" size={20} color="currentColor" />
const NGIS_ICON_PATHS = {
  menu: '<line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/>',
  x: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  arrowRight: '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
  arrowUpRight: '<line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>',
  chevronDown: '<polyline points="6 9 12 15 18 9"/>',
  chevronRight: '<polyline points="9 18 15 12 9 6"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22 6 12 13 2 6"/>',
  mapPin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
  check: '<polyline points="20 6 9 17 4 12"/>',
  graduationCap: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
  bookOpen: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  lightbulb: '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/>',
  cpu: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>',
  globe: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  award: '<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>',
  star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
  quote: '<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>',
  microscope: '<path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>',
  palette: '<circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>',
  trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
  ban: '<circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/>',
  shieldCheck: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  fileText: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/>',
  smartphone: '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>',
  heartPulse: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/>',
  layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
  zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  flask: '<path d="M10 2v7.31"/><path d="M14 9.3V1.99"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><path d="M5.52 16h12.96"/>',
  languages: '<path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/>',
  sparkles: '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0z"/>',
  rocket: '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
  brain: '<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/>',
  compass: '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
  school: '<path d="m4 6 8-4 8 4"/><path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"/><path d="M14 22v-4a2 2 0 0 0-2-2 2 2 0 0 0-2 2v4"/><path d="M18 5v17"/><path d="M6 5v17"/><circle cx="12" cy="9" r="2"/>',
  bookMarked: '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><polyline points="10 2 10 10 13 7 16 10 16 2"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',
  printer: '<path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8" rx="1"/>',
  headset: '<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>',
  drone: '<path d="M10 10 7 7"/><path d="m14 10 3-3"/><path d="m14 14 3 3"/><path d="m10 14-3 3"/><rect x="9" y="9" width="6" height="6" rx="1"/><circle cx="5" cy="5" r="2.5"/><circle cx="19" cy="5" r="2.5"/><circle cx="5" cy="19" r="2.5"/><circle cx="19" cy="19" r="2.5"/>',
  plane: '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',
  wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  iron: '<path d="M2 16h12a4 4 0 0 0 4-4V8"/><path d="M2 16v2a2 2 0 0 0 2 2h9"/><path d="M18 8h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-2"/><path d="M14 8H2"/>',
  hammer: '<path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9"/><path d="m18 15 4-4"/><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"/>',
  refresh: '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/>',
  instagram: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',
  facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>'
};
function Icon({
  name,
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  style,
  ...rest
}) {
  const inner = NGIS_ICON_PATHS[name] || '';
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    style: {
      display: 'block',
      flexShrink: 0,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: inner
    },
    ...rest
  });
}
window.Icon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Icon.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.EyebrowLabel = __ds_scope.EyebrowLabel;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

})();
