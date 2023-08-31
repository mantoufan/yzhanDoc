import { SetupContext } from 'vue'

export default (
  props: { expanded: boolean; onClick: () => void },
  { emit }: SetupContext
) => {
  return <b onClick={() => emit('onClick')}>{props.expanded ? '🔽' : '▶️'}</b>
}
