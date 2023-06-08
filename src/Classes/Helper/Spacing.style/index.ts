export class Spacing {
 
  padding: string | number | undefined
  margin: string | number | undefined

  setPadding (paddingValue: any) {
    this.padding = paddingValue
  }

  setMargin (marginValue?: any) {
    this.margin = marginValue
  }

  get style () {
    return {
      padding: this.padding,
      margin: this.margin
    }
  }
}