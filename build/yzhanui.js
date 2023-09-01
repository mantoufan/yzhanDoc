import { defineComponent as f, toRefs as p, createVNode as r } from "vue";
const c = {
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
}, n = /* @__PURE__ */ f({
  name: "Button",
  props: c,
  setup(t, {
    slots: e
  }) {
    const {
      type: o,
      size: a,
      disabled: l,
      block: s
    } = p(t), u = s.value ? " s-btn--block" : "";
    return () => {
      const d = e.default ? e.default() : "Button";
      return r("button", {
        disabled: l.value,
        class: `s-btn s-btn--${o.value} s-btn--${a.value}${u}`
      }, [d]);
    };
  }
}), i = {
  install(t) {
    t.component(n.name, n);
  }
}, b = [i], m = {
  install(t) {
    b.forEach((e) => t.use(e));
  }
};
export {
  n as Button,
  m as default
};
