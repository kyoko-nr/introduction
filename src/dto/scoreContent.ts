import Content from "./content"

export default class ScoreContent extends Content {
  right: boolean
  left: boolean
  score: string

  /**
   * Constructor
   * @param score score
   * @param title title
   * @param detail detail
   * @param right true: right margin, false: left margin
   */
  constructor(score: string, title: string, detail: string, right: boolean) {
    super(title, detail)
    this.right = right
    this.left = !right
    this.score = score
  }

}