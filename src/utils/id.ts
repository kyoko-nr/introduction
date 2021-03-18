export default class Id {
  private static uuid = 0

  static generateId() {
    return Id.uuid += 1
  }
}