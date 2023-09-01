import { ExtractPropTypes } from 'vue'

export interface ColumnContext {
  field?: string
  header?: string
  type?: string
}

export const columnProps = {
  field: {
    type: String,
    default: ''
  },
  header: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: ''
  }
} as const

export type ColumnProps = ExtractPropTypes<typeof columnProps>
