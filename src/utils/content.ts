export default class Content {
  right: boolean
  left: boolean
  score: string
  title: string
  detail: string

  constructor(score: string, title: string, detail: string, right: boolean) {
    this.right = right
    this.left = !right
    this.score = score
    this.title = title
    this.detail = detail
  }

}