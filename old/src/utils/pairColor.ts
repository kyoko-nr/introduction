import * as THREE from 'three'

export default class PairColor {
  private static colorset = [
    {light: "#A494B3", dark: "#5E5566"},
    {light: "#B39E94", dark: "#665A55"},
    {light: "#ADA6B3", dark: "#635F66"},
    {light: "#B1B394", dark: "#656655"},
    {light: "#9DB3B1", dark: "#5A6665"}
  ]

  /**
   * Get Light color of this colorset.
   * @param idx index of this colorset
   * @returns THREE.Color
   */
  static getLightThree(idx: number): THREE.Color {
    if(idx < 5 && idx >= 0) {
      return new THREE.Color(this.colorset[idx].light)
    } else {
      return new THREE.Color(this.colorset[0].light)
    }
  }

  /**
   * Get Dark color of this colorset.
   * @param idx index of this colorset
   * @returns THREE.Color
   */
  static getDarkThree(idx: number): THREE.Color {
    if(idx < 5 && idx >= 0) {
      return new THREE.Color(this.colorset[idx].dark)
    } else {
      return new THREE.Color(this.colorset[0].dark)
    }
  }

  /**
   * Get Light color of this colorset.
   * @param idx index of this colorset
   * @returns color string for CSS
   */
  static getLightStr(idx: number): string {
    if(idx < 5 && idx >= 0) {
      return this.colorset[idx].light
    } else {
      return this.colorset[0].light
    }
  }

  /**
   * Get Dark color of this colorset.
   * @param idx index of this colorset
   * @returns color string for CSS
   */
  static getDarkStr(idx: number): string {
    if(idx < 5 && idx >= 0) {
      return this.colorset[idx].dark
    } else {
      return this.colorset[0].dark
    }
  }
}