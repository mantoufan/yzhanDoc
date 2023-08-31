import { PropType, computed, defineComponent } from 'vue'
import '../style/index.scss'

export default defineComponent({
  name: 'YIcon',
  props: {
    name: {
      type: String,
      default: ''
    },
    prefix: {
      type: String,
      default: 'icon'
    },
    size: {
      type: [String, Number] as PropType<string | number>,
      default: 'inherit'
    },
    color: {
      type: String,
      default: 'inherit'
    },
    type: {
      type: String as PropType<'svg' | 'other'>,
      default: 'other'
    }
  },
  setup(props, { attrs }) {
    // 获取尺寸
    const iconSize = computed(() =>
      typeof props.size === 'number' ? `${props.size}px` : props.size
    )
    // 图片图标：如果是远程资源，使用图片显示
    const imgIcon = (
      <img
        src={props.name}
        style={{
          width: (attrs.width as string | number) || iconSize.value,
          height: (attrs.height as string | number) || iconSize.value,
          verticalAlign: 'middle'
        }}
        {...attrs}
      ></img>
    )
    // 字体图标：否则用 span 的 class 显示字体图标
    const fontIcon = (
      <span
        class={[props.prefix, props.prefix + '-' + props.name]}
        style={{ fontSize: iconSize.value, color: props.color }}
      ></span>
    )
    // SVG 矢量图标
    const svgIcon = (
      <svg
        class="icon"
        style={{
          width: (attrs.width as string | number) || iconSize.value,
          height: (attrs.height as string | number) || iconSize.value
        }}
      >
        <use
          xlinkHref={'#' + props.prefix + '-' + props.name}
          fill={props.color}
        ></use>
      </svg>
    )
    const icon =
      props.type === 'svg'
        ? svgIcon
        : /^http|https/.test(props.name)
        ? imgIcon
        : fontIcon
    return () => icon
  }
})
