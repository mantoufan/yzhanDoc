import { defineComponent as p, toRefs as f, createVNode as r } from "vue";
const b = {
  type: {
    type: String,
    default: "secondary"
  },
  size: {
    type: String,
    default: "medium"
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  block: {
    type: Boolean,
    default: !1
  },
  tag: {
    type: String,
    default: "button"
  },
  loading: {
    type: Boolean,
    default: !1
  },
  attrType: {
    type: String,
    default: "button"
  }
}, n = /* @__PURE__ */ p({
  name: "Button",
  props: b,
  setup(t, {
    slots: e
  }) {
    const {
      type: o,
      size: a,
      disabled: l,
      block: s
    } = f(t), u = s.value ? " s-btn--block" : "";
    return () => {
      const d = e.default ? e.default() : "Button";
      return r("button", {
        disabled: l.value,
        class: `s-btn s-btn--${o.value} s-btn--${a.value}${u}`
      }, [d]);
    };
  }
}), c = {
  install(t) {
    t.component(n.name, n);
  }
};
export {
  n as Button,
  c as default
};
