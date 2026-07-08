const students = [
  {
    "timestamp": "7/8/2026 12:44:29",
    "fullName": "เกศรินทร์ คิดคนึง",
    "nickname": "กลอย",
    "hint": "นัด8มา10",
    "image": "images/1.jpg"
  },
  {
    "timestamp": "7/8/2026 12:45:27",
    "fullName": "นายภานุวิชญ์ ชมชูชื่น",
    "nickname": "หยก",
    "hint": "ฮาลาล",
    "image": "images/2.jpg"
  },
  {
    "timestamp": "7/8/2026 12:46:08",
    "fullName": "วรวิช สังข์ชื่น",
    "nickname": "เพชร",
    "hint": "หมดไปเยอะ",
    "image": "images/3.jpg"
  },
  {
    "timestamp": "7/8/2026 12:46:38",
    "fullName": "วิทวัส สังข์ชื่น",
    "nickname": "ฟิล์ม",
    "hint": "gel nails ดิวะ",
    "image": "images/4.jpg"
  },
  {
    "timestamp": "7/8/2026 12:47:16",
    "fullName": "นางสาวอรพรรณ รสจันทร์",
    "nickname": "ผักบุ้ง",
    "hint": "ปากบอกไปแต่ใจจะบิด",
    "image": "images/5.jpg"
  },
  {
    "timestamp": "7/8/2026 12:47:42",
    "fullName": "ปวันรัตน์ สังสิงชัย",
    "nickname": "จ๊ะจ๋า",
    "hint": "ท่องราตรี",
    "image": "images/6.jpg"
  },
  {
    "timestamp": "7/8/2026 12:48:22",
    "fullName": "นาย ยอดนคร ขุนอักษร",
    "nickname": "บีม",
    "hint": "ชื่อเล่น1พยางค์",
    "image": "images/7.jpg"
  },
  {
    "timestamp": "7/8/2026 12:48:25",
    "fullName": "สิรินทิพย์ พูลเพิ่ม",
    "nickname": "น้ำ",
    "hint": "สี่สี่เอี่ยว",
    "image": "images/8.jpg"
  },
  {
    "timestamp": "7/8/2026 12:49:02",
    "fullName": "สุภิญญา ชาวแพรกน้อย",
    "nickname": "ไข่มุก",
    "hint": "มีหน้าม้า",
    "image": "images/9.jpg"
  },
  {
    "timestamp": "7/8/2026 12:49:52",
    "fullName": "จิรนันท์ สุขเกษม",
    "nickname": "แพน",
    "hint": "ดอลลี่อายพุ่งๆ",
    "image": "images/10.jpg"
  },
  {
    "timestamp": "7/8/2026 12:50:18",
    "fullName": "กนกวรรณ เบี่ยงสวาท",
    "nickname": "มิเชล",
    "hint": "ฟันเหล็กเด็กใคร",
    "image": "images/11.jpg"
  },
  {
    "timestamp": "7/8/2026 12:51:17",
    "fullName": "ธันยพร สท้านพล",
    "nickname": "มีนา",
    "hint": "ตับเเข็ง",
    "image": "images/12.jpg"
  },
  {
    "timestamp": "7/8/2026 12:51:47",
    "fullName": "ศุภกร บูชาสุข",
    "nickname": "จ๊าบ",
    "hint": "ยิ้มง่ายแต่คุยไม่ค่อยเก่ง",
    "image": "images/13.jpg"
  },
  {
    "timestamp": "7/8/2026 12:52:01",
    "fullName": "นายสรกฤช แก้วแสง",
    "nickname": "ตาต้า",
    "hint": "ปอดโยก",
    "image": "images/tata.jpg"
  },
  {
    "timestamp": "7/8/2026 12:52:10",
    "fullName": "กนกพร เพียรเรียน",
    "nickname": "ใบหม่อน",
    "hint": "ก๋วยเตี๋ยวคือของโปรด",
    "image": "images/15.jpg"
  },
  {
    "timestamp": "7/8/2026 12:52:14",
    "fullName": "นางสาว ศุภาวรรณ กันยาโม้",
    "nickname": "ข้าวเหนียว",
    "hint": "สายเสมอ",
    "image": "images/16.jpg"
  },
  {
    "timestamp": "7/8/2026 12:52:16",
    "fullName": "น.ส.วรรณกร ศรีแจ้",
    "nickname": "ใบตอง",
    "hint": "”ไม่เคยถูกระเบียบ“",
    "image": "images/17.jpg"
  },
  {
    "timestamp": "7/8/2026 12:52:58",
    "fullName": "นางสาวพัชราภรณ์ หลักเมือง",
    "nickname": "ข้าวผัด",
    "hint": "ตื่นไม่เคยทัน",
    "image": "images/18.jpg"
  },
  {
    "timestamp": "7/8/2026 12:53:54",
    "fullName": "ณฤพล จิตรออน",
    "nickname": "เนส",
    "hint": "สีชมพู",
    "image": "images/19.jpg"
  },
  {
    "timestamp": "7/8/2026 12:54:12",
    "fullName": "รุ่งรวี ศรีสอาด",
    "nickname": "ยา",
    "hint": "ง่วงทุกคาบ",
    "image": "images/20.jpg"
  },
  {
    "timestamp": "7/8/2026 12:54:25",
    "fullName": "นางสาว ธีมาพร พลอยขาว",
    "nickname": "คุ๊กกี้",
    "hint": "ลายสักการะ",
    "image": "images/21.jpg"
  },
  {
    "timestamp": "7/8/2026 12:55:26",
    "fullName": "ฟาติมะห์ รอดปิ่ม",
    "nickname": "ฟาร์",
    "hint": "เมะมาแล้วคั้บ",
    "image": "images/22.jpg"
  },
  {
    "timestamp": "7/8/2026 12:56:48",
    "fullName": "ชัชชัย อยู่สนาน",
    "nickname": "แทน",
    "hint": "ง่วงทุกคาบ",
    "image": "images/23.jpg"
  },
  {
    "timestamp": "7/8/2026 12:57:32",
    "fullName": "นายถิรายุส ศรชัย",
    "nickname": "ไทม์",
    "hint": "Gel nails ดิวะ",
    "image": "images/24.jpg"
  },
  {
    "timestamp": "7/8/2026 12:58:06",
    "fullName": "เมธา มีผลมาก",
    "nickname": "มาร์ค",
    "hint": "หม่าล่าทั่งเลิฟเวอร์",
    "image": "images/25.jpg"
  },
  {
    "timestamp": "7/8/2026 12:58:06",
    "fullName": "นายภาธรธฤต เปี่ยมพูล",
    "nickname": "ฟลุ๊ค ไร่สะท้อน",
    "hint": "3287",
    "image": "images/26.jpg"
  },
  {
    "timestamp": "7/8/2026 12:58:50",
    "fullName": "ธาดา ท้าวเม้ย",
    "nickname": "เสาร์",
    "hint": "ไตกับปอดเกือบได้ถอดพร้อมกัน",
    "image": "images/27.jpg"
  },
  {
    "timestamp": "7/8/2026 13:00:00",
    "fullName": "วงศกร ลวนางกูร",
    "nickname": "มีย",
    "hint": "3287",
    "image": "images/28.jpg"
  },
  {
    "timestamp": "7/8/2026 20:43:53",
    "fullName": "นาย ณัฐิวุฒิ นาคปานเอี่ยม",
    "nickname": "โซน",
    "hint": "ยิ้มง่ายแต่คุยไม่เก่ง",
    "image": "images/29.jpg"
  }
];
