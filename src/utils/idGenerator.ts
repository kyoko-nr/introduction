export default class IdGenerator {
  private static id = -1

  static generate() {
    return IdGenerator.id += 1
  }
}