import Content from "./content"

export default class SkillContent extends Content {
  right: boolean
  left: boolean
  num: string

  /**
   * Constructor
   * @param num number
   * @param title title
   * @param detail detail
   * @param right true: right margin, false: left margin
   */
  constructor(num: string, title: string, detail: string, right: boolean) {
    super(title, detail)
    this.right = right
    this.left = !right
    this.num = num
  }

}