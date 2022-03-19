
/**
 * 58. 
 * 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。
 * 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。
 * s 仅有英文字母和空格 ' ' 组成
 * s 中至少存在一个单词
 * 
 * @example
 * 输入: s = "Hello World"
 * 输出: 5
 * 解释: 最后一个单词是"World"，长度为5。
 * 
 * 输入: s = "   fly me   to   the moon  "
 * 输出: 4
 * 解释: 最后一个单词是"moon"，长度为4。
 * 
 * 输入: s = "luffy is still joyboy"
 * 输出: 6
 * 解释: 最后一个单词是长度为6的"joyboy"。
 */
export const lengthOfLastWord = (s: string): number => {

  let length = 0
  let index = s.length - 1

  while (s[index] === ' ') {
    index--
  }

  while (index >= 0 && s[index] !== ' ') {
    length++
    index--
  }

  return length
}