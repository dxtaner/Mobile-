// 🔒 SİSTEM KARA LİSTE (GİZLİ)
const systemBlacklist = [
  'casino',
  'bet',
  'free money',
  'iddaa',
  'bahis',
  'kredi onaylandı',
  'investment guaranteed',
  'tıkla kazan',
];

export const checkSpam = (message, userBlacklist, whitelist) => {
  const lower = message.toLowerCase();

  for (let word of whitelist) {
    if (lower.includes(word.toLowerCase())) {
      return { spam: false, reason: 'Beyaz Liste' };
    }
  }

  for (let word of systemBlacklist) {
    if (lower.includes(word.toLowerCase())) {
      return { spam: true, reason: 'Sistem Kara Liste' };
    }
  }

  for (let word of userBlacklist) {
    if (lower.includes(word.toLowerCase())) {
      return { spam: true, reason: 'Kullanıcı Kara Liste' };
    }
  }

  return { spam: false, reason: 'Temiz Mesaj' };
};
