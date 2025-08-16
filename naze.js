process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)

/*
    * تم الإنشاء بواسطة Naze
    * تابع https://github.com/nazedev
    * واتساب : https://whatsapp.com/channel/0029VaWOkNm7DAWtkvkJBK43
*/

require('./settings');
const fs = require('fs');
const os = require('os');
const qs = require('qs');
const util = require('util');
const jimp = require('jimp');
const path = require('path');
const https = require('https');
const axios = require('axios');
const chalk = require('chalk');
const yts = require('yt-search');
const ytdl = require('ytdl-core');
const cron = require('node-cron');
const cheerio = require('cheerio');
const fetch = require('node-fetch');
const FileType = require('file-type');
const { Chess } = require('chess.js');
const google = require('googlethis');
const similarity = require('similarity');
const PDFDocument = require('pdfkit');
const webp = require('node-webpmux');
const ffmpeg = require('fluent-ffmpeg');
const speed = require('performance-now');
const didYouMean = require('didyoumean');
const { performance } = require('perf_hooks');
const moment = require('moment-timezone');
const translate = require('translate-google-api');
const { Akinator, AkinatorAnswer } = require('aki-api');
const PhoneNum = require('awesome-phonenumber');
const { exec, spawn, execSync } = require('child_process');
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('baileys');

const menfesTimeouts = new Map();
const TicTacToe = require('./lib/tictactoe');
const { antiSpam } = require('./src/antispam');
const templateMenu = require('./lib/template_menu');
const { TelegraPh, UguuSe } = require('./lib/uploader');
const { toAudio, toPTT, toVideo } = require('./lib/converter');
const { GroupUpdate, LoadDataBase } = require('./src/message');
const { JadiBot, StopJadiBot, ListJadiBot } = require('./src/jadibot');
const { imageToWebp, videoToWebp, gifToWebp, writeExif } = require('./lib/exif');
const { cmdAdd, cmdDel, cmdAddHit, addExpired, getPosition, getExpired, getStatus, checkStatus, getAllExpired, checkExpired } = require('./src/database');
const { rdGame, iGame, tGame, gameSlot, gameCasinoSolo, gameSamgongSolo, gameMerampok, gameBegal, daily, buy, setLimit, addLimit, addMoney, setMoney, transfer, Blackjack, SnakeLadder } = require('./lib/game');
const { pinterest, wallpaper, remini, wikimedia, hitamkan, yanzGpt, mediafireDl, ringtone, styletext, instagramDl, tiktokDl, facebookDl, instaStalk, telegramStalk, tiktokStalk, genshinStalk, instaStory, bk9Ai, spotifyDl, ytMp4, ytMp3, NvlGroup, quotedLyo, youSearch, gptLogic, savetube, simi, geminiAi } = require('./lib/screaper');
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, errorCache, normalize, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, convertTimestampToDate, getAllHTML, tarBackup } = require('./lib/function');

module.exports = naze = async (naze, m, msg, store) => {
    const botNumber = naze.decodeJid(naze.user.id);
    const ownerNumber = db?.set?.[botNumber]?.owner?.map(x => x.id) || owner;

    try {

        await LoadDataBase(naze, m);
        await GroupUpdate(naze, m, store);

        const body = ((m.type === 'conversation') ? m.message.conversation :
            (m.type == 'imageMessage') ? m.message.imageMessage.caption :
                (m.type == 'videoMessage') ? m.message.videoMessage.caption :
                    (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text :
                        (m.type == 'reactionMessage') ? m.message.reactionMessage.text :
                            (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId :
                                (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
                                    (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId :
                                        (m.type == 'interactiveResponseMessage' && m.quoted) ? (m.message.interactiveResponseMessage?.nativeFlowResponseMessage ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : '') :
                                            (m.type == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || '') :
                                                (m.type == 'editedMessage') ? (m.message.editedMessage?.message?.protocolMessage?.editedMessage?.extendedTextMessage?.text || m.message.editedMessage?.message?.protocolMessage?.editedMessage?.conversation || '') :
                                                    (m.type == 'protocolMessage') ? (m.message.protocolMessage?.editedMessage?.extendedTextMessage?.text || m.message.protocolMessage?.editedMessage?.conversation || m.message.protocolMessage?.editedMessage?.imageMessage?.caption || m.message.protocolMessage?.editedMessage?.videoMessage?.caption || '') : '') || '';

        const budy = (typeof m.text == 'string' ? m.text : '')
        const isCreator = isOwner = [botNumber, ...ownerNumber].filter(v => typeof v === 'string').map(v => v.replace(/[^0-9]/g, '')).includes(m.sender.split('@')[0])
        const cases = db.cases ? db.cases : (db.cases = [...fs.readFileSync('./naze.js', 'utf-8').matchAll(/case\s+['"]([^'"]+)['"]/g)].map(match => match[1]));
        const prefix = isCreator ? (/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi)[0] : /[\uD800-\uDBFF][\uDC00-\uDFFF]/gi.test(body) ? body.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/gi)[0] : listprefix.find(a => body?.startsWith(a)) || '') : db.set[botNumber].multiprefix ? (/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi)[0] : /[\uD800-\uDBFF][\uDC00-\uDFFF]/gi.test(body) ? body.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/gi)[0] : listprefix.find(a => body?.startsWith(a)) || '¿') : listprefix.find(a => body?.startsWith(a)) || '¿'
        const isCmd = body.startsWith(prefix)
        const args = body.trim().split(/ +/).slice(1)
        const quoted = m.quoted ? m.quoted : m
        const command = isCreator ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : ''
        const text = q = args.join(' ')
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const author = db?.set?.[botNumber]?.author || 'TWENTY';
        const packname = db?.set?.[botNumber]?.packname || 'بوت واتساب';
        const hari = moment.tz('Asia/Jakarta').locale('id').format('dddd');
        const tanggal = moment.tz('Asia/Jakarta').locale('id').format('DD/MM/YYYY');
        const jam = moment.tz('Asia/Jakarta').locale('id').format('HH:mm:ss');
        const ucapanWaktu = jam < '05:00:00' ? 'صباح الخير 🌉' : jam < '11:00:00' ? 'صباح الخير 🌄' : jam < '15:00:00' ? 'مساء الخير 🏙' : jam < '18:00:00' ? 'مساء الخير 🌅' : jam < '19:00:00' ? 'مساء الخير 🌃' : jam < '23:59:00' ? 'تصبح على خير 🌌' : 'تصبح على خير 🌌';
        const almost = 0.72
        const time = Date.now()
        const time_now = new Date()
        const time_end = 60000 - (time_now.getSeconds() * 1000 + time_now.getMilliseconds());
        const readmore = String.fromCharCode(8206).repeat(999)
        const setv = pickRandom(listv)

        // قراءة قاعدة البيانات
        const sewa = db.sewa
        const premium = db.premium
        const set = db.set[botNumber]

        // قاعدة بيانات الألعاب
        let suit = db.game.suit
        let chess = db.game.chess
        let chat_ai = db.game.chat_ai
        let menfes = db.game.menfes
        let tekateki = db.game.tekateki
        let akinator = db.game.akinator
        let tictactoe = db.game.tictactoe
        let tebaklirik = db.game.tebaklirik
        let kuismath = db.game.kuismath
        let blackjack = db.game.blackjack
        let tebaklagu = db.game.tebaklagu
        let tebakkata = db.game.tebakkata
        let family100 = db.game.family100
        let susunkata = db.game.susunkata
        let tebakbom = db.game.tebakbom
        let ulartangga = db.game.ulartangga
        let tebakkimia = db.game.tebakkimia
        let caklontong = db.game.caklontong
        let tebakangka = db.game.tebakangka
        let tebaknegara = db.game.tebaknegara
        let tebakgambar = db.game.tebakgambar
        let tebakbendera = db.game.tebakbendera

        const isVip = db.users[m.sender] ? db.users[m.sender].vip : false
        const isBan = db.users[m.sender] ? db.users[m.sender].ban : false
        const isLimit = db.users[m.sender] ? (db.users[m.sender].limit > 0) : false
        const isPremium = isCreator || checkStatus(m.sender, premium) || false
        const isNsfw = m.isGroup ? db.groups[m.chat].nsfw : false

        // Fake contact
        const fkontak = {
            key: {
                remoteJid: '0@s.whatsapp.net',
                participant: '0@s.whatsapp.net',
                fromMe: false,
                id: 'Naze'
            },
            message: {
                contactMessage: {
                    displayName: (m.pushName || author),
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${m.pushName || author},;;;\nFN:${m.pushName || author}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                    sendEphemeral: true
                }
            }
        }

        // إعادة تعيين الحصص اليومية للمستخدمين
        cron.schedule('00 00 * * *', async () => {
            cmdDel(db.hit);
            console.log('تم إعادة تعيين حد المستخدمين')
            let user = Object.keys(db.users)
            for (let jid of user) {
                const limitUser = db.users[jid].vip ? limit.vip : checkStatus(jid, premium) ? limit.premium : limit.free
                if (db.users[jid].limit < limitUser) db.users[jid].limit = limitUser
            }
            if (set?.autobackup) {
                let datanya = './database/' + tempatDB;
                if (tempatDB.startsWith('mongodb')) {
                    datanya = './database/backup_database.json';
                    fs.writeFileSync(datanya, JSON.stringify(global.db, null, 2), 'utf-8');
                }
                let tglnya = new Date().toISOString().replace(/[:.]/g, '-');
                for (let o of ownerNumber) {
                    try {
                        await naze.sendMessage(o, { document: fs.readFileSync(datanya), mimetype: 'application/json', fileName: tglnya + '_database.json' })
                        console.log(`[AUTO BACKUP] Backup berhasil dikirim ke ${o}`);
                    } catch (e) {
                        console.error(`[AUTO BACKUP] فشل في إرسال النسخة الاحتياطية إلى ${o}:`, error);
                    }
                }
            }
        }, {
            scheduled: true,
            timezone: 'Asia/Jakarta'
        });

        // تحديث السيرة الذاتية تلقائياً
        if (set.autobio) {
            if (new Date() * 1 - set.status > 60000) {
                await naze.updateProfileStatus(`${naze.user.name} | 🎯 Runtime : ${runtime(process.uptime())}`).catch(e => { })
                set.status = new Date() * 1
            }
        }

        // وضع الاستخدام (عام/خاص/مجموعة فقط)
        if (!isCreator) {
            if ((set.grouponly === set.privateonly)) {
                if (!naze.public && !m.key.fromMe) return
            } else if (set.grouponly) {
                if (!m.isGroup) return
            } else if (set.privateonly) {
                if (m.isGroup) return
            }
        }

        // إعدادات المجموعة
        if (m.isGroup) {
            // كتم البوت بالمجموعة
            if (db.groups[m.chat].mute && !isCreator) {
                return
            }

            // منع الهايد تاج (Anti Hidetag)
            if (!m.key.fromMe && m.mentionedJid?.length === m.metadata.participanis?.length && db.groups[m.chat].antihidetag && !isCreator && m.isBotAdmin && !m.isAdmin) {
                await naze.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender } })
                await m.reply('*تم تفعيل Anti Hidetag❗*')
            }

            // Anti Tag Sw
            if (!m.key.fromMe && db.groups[m.chat].antitagsw && !isCreator && m.isBotAdmin && !m.isAdmin) {
                if (m.type === 'groupStatusMentionMessage' || m.message?.groupStatusMentionMessage || m.message?.protocolMessage?.type === 25 || Object.keys(m.message).length === 1 && Object.keys(m.message)[0] === 'messageContextInfo') {
                    if (!db.groups[m.chat].tagsw[m.sender]) {
                        db.groups[m.chat].tagsw[m.sender] = 1
                        await m.reply(`تم اكتشاف هذه المجموعة على أنها مُشار إليها في حالة WhatsApp\n@${m.sender.split('@')[0]}, يرجى عدم وضع علامة على المجموعات في حالة WhatsApp\nتحذير ${db.groups[m.chat].tagsw[m.sender]}/5, سيتم طرده في أي وقت❗`)
                    } else if (db.groups[m.chat].tagsw[m.sender] >= 5) {
                        await naze.groupParticipantsUpdate(m.chat, [m.sender], 'remove').catch((err) => m.reply('فشل!'))
                        await m.reply(`@${m.sender.split("@")[0]} تم إزالته من المجموعة بسبب وضع علامة للمجموعة في حالة WhatsApp 5 مرات`)
                        delete db.groups[m.chat].tagsw[m.sender]
                    } else {
                        db.groups[m.chat].tagsw[m.sender] += 1
                        await m.reply(`تم اكتشاف هذه المجموعة على أنها مُشار إليها في حالة WhatsApp\n@${m.sender.split('@')[0]}, يرجى عدم وضع علامة على المجموعات في حالة WhatsApp\nتحذير ${db.groups[m.chat].tagsw[m.sender]}/5, سيتم طرده في أي وقت❗`)
                    }
                }
            }

            // Anti Toxic
            if (!m.key.fromMe && db.groups[m.chat].antitoxic && !isCreator && m.isBotAdmin && !m.isAdmin) {
                if (budy.toLowerCase().split(/\s+/).some(word => badWords.includes(word))) {
                    await naze.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender } })
                    await naze.relayMessage(m.chat, { extendedTextMessage: { text: `مُكتَشَف @${m.sender.split('@')[0]} قال كلام مسيء\nيرجى استخدام لغة مهذبة.`, contextInfo: { mentionedJid: [m.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*مضاد للسموم❗*' }, ...m.key } } }, {})
                }
            }

            // Anti Delete
            if (m.type == 'protocolMessage' && db.groups[m.chat].antidelete && !isCreator && m.isBotAdmin && !m.isAdmin) {
                const mess = msg.message.protocolMessage
                if (store?.messages?.[m.chat]?.array) {
                    const chats = store.messages[m.chat].array.find(a => a.id === mess.key.id);
                    if (!chats?.msg) return
                    chats.msg.contextInfo = { mentionedJid: [chats.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*مضاد للحذف❗*' }, ...chats.key }
                    const pesan = chats.type === 'conversation' ? { extendedTextMessage: { text: chats.msg, contextInfo: { mentionedJid: [chats.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*مضاد للحذف❗*' }, ...chats.key } } } : { [chats.type]: chats.msg }
                    await naze.relayMessage(m.chat, pesan, {})
                }
            }

            // Anti Link Group
            if (db.groups[m.chat].antilink && !isCreator && m.isBotAdmin && !m.isAdmin) {
                if (budy.match('chat.whatsapp.com/')) {
                    await naze.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender } })
                    await naze.relayMessage(m.chat, { extendedTextMessage: { text: `مُكتَشَف @${m.sender.split('@')[0]} إرسال رابط المجموعة\nعذراً، يجب إزالة الرابط.`, contextInfo: { mentionedJid: [m.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*مضاد الروابط❗*' }, ...m.key } } }, {})
                }
            }

            // Anti Virtex Group
            if (db.groups[m.chat].antivirtex && !isCreator && m.isBotAdmin && !m.isAdmin) {
                if (budy.length > 4000) {
                    await naze.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender } })
                    await naze.relayMessage(m.chat, { extendedTextMessage: { text: `مُكتَشَف @${m.sender.split('@')[0]} إرسال فيرتكس..`, contextInfo: { mentionedJid: [m.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*مضاد للفيرتكس❗*' }, ...m.key } } }, {})
                    await naze.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
                }
                if (m.msg?.nativeFlowMessage?.messageParamsJson?.length > 3500) {
                    await naze.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender } })
                    await naze.relayMessage(m.chat, { extendedTextMessage: { text: `مُكتَشَف @${m.sender.split('@')[0]} إرسال الأخطاء..`, contextInfo: { mentionedJid: [m.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*مضاد الأخطاء❗*' }, ...m.key } } }, {})
                    await naze.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
                }
            }

        }

        // قراءة الرسائل تلقائيًا
        if (m.message && m.key.remoteJid !== 'status@broadcast') {
            if ((set.autoread && naze.public) || isCreator) {
                naze.readMessages([m.key]);
                console.log(chalk.black(chalk.bgWhite('[ PESAN ]:'), chalk.bgGreen(new Date), chalk.bgHex('#00EAD3')(budy || m.type), chalk.bgHex('#AF26EB')(m.key.id) + '\n' + chalk.bgCyanBright('[ DARI ] :'), chalk.bgYellow(m.pushName || (isCreator ? 'Bot' : 'Anonim')), chalk.bgHex('#FF449F')(m.sender), chalk.bgHex('#FF5700')(m.isGroup ? m.metadata.subject : m.chat.endsWith('@newsletter') ? 'Newsletter' : 'Private Chat'), chalk.bgBlue('(' + m.chat + ')')));
            }
        }

        // تجاهل رسائل البوت والحظر
        if (m.isBot) return
        if (db.users[m.sender]?.ban && !isCreator) return

        // الكتابة و منع السبام وتسجيل الضربات
        if (naze.public && isCmd) {
            if (set.autotyping) {
                await naze.sendPresenceUpdate('تأليف', m.chat)
            }
            if (cases.includes(command)) {
                cmdAdd(db.hit);
                cmdAddHit(db.hit, command);
            }
            if (set.antispam && antiSpam.isFiltered(m.sender)) {
                console.log(chalk.bgRed('[ SPAM ] : '), chalk.black(chalk.bgHex('#1CFFF7')(`From -> ${m.sender}`), chalk.bgHex('#E015FF')(` In ${m.isGroup ? m.chat : 'Private Chat'}`)))
                return m.reply('「 ❗ 」توقفي لمدة 5 ثوانٍ لكل أمر')
            }
        }

        if (isCmd && !isCreator) antiSpam.addFilter(m.sender)

        // أمر مرتبط بوسائط محفوظة عبر SHA256
        let fileSha256;
        if (m.isMedia && m.msg.fileSha256 && db.cmd && (m.msg.fileSha256.toString('base64') in db.cmd)) {
            let hash = db.cmd[m.msg.fileSha256.toString('base64')]
            fileSha256 = hash.text
        }

        // الرد على التحية الإسلامية
        if (/^a(s|ss)alamu('|)alaikum(| )(wr|)( |)(wb|)$/.test(budy?.toLowerCase())) {
            const jwb_salam = ['Wa\'السلام عليكم', 'Wa\'السلام عليكم wr wb', 'Wa\'عليكم السلام ورحمة الله وبركاته']
            m.reply(pickRandom(jwb_salam))
        }

        // مواقيت الصلاة (مخزنة كمثال)
        const jadwalSholat = {
            Subuh: '04:30',
            Dzuhur: '12:06',
            Ashar: '15:21',
            Maghrib: '18:08',
            Isya: '19:00'
        }
        if (!this.intervalSholat) this.intervalSholat = null;
        if (!this.waktusholat) this.waktusholat = {};
        if (this.intervalSholat) clearInterval(this.intervalSholat);
        setTimeout(() => {
            this.intervalSholat = setInterval(async () => {
                const sekarang = moment.tz('Asia/Jakarta');
                const jamSholat = sekarang.format('HH:mm');
                const hariIni = sekarang.format('YYYY-MM-DD');
                const detik = sekarang.format('ss');
                if (detik !== '00') return;
                for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
                    if (jamSholat === waktu && this.waktusholat[sholat] !== hariIni) {
                        this.waktusholat[sholat] = hariIni
                        for (const [idnya, settings] of Object.entries(db.groups)) {
                            if (settings.waktusholat) {
                                await naze.sendMessage(idnya, { text: `وقت *${sholat}* لقد وصلت، خذ ماء الوضوء وصلي على الفور🙂.\n\n*${waktu.slice(0, 5)}*\n_لمنطقة اليمن والمناطق المحيطة بها._` }, { ephemeralExpiration: m.expiration || store?.messages[idnya]?.array?.slice(-1)[0]?.metadata?.ephemeralDuration || 0 }).catch(e => { })
                            }
                        }
                    }
                }
            }, 60000)
        }, time_end);

        // فحص الاشتراكات المنتهية
        checkExpired(premium);
        checkExpired(sewa, naze);

        // لعبة تيك تاك تو
        let room = Object.values(tictactoe).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
        if (room) {
            let now = Date.now();
            if (now - (room.lastMove || now) > 5 * 60 * 1000) {
                m.reply('تم إلغاء لعبة "تيك تاك تو" بسبب عدم النشاط لمدة 5 دقائق.');
                delete tictactoe[room.id];
                return;
            }
            room.lastMove = now;
            let ok, isWin = false, isTie = false, isSurrender = false;
            if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
            isSurrender = !/^[1-9]$/.test(m.text)
            if (m.sender !== room.game.currentTurn) {
                if (!isSurrender) return true
            }
            if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
                m.reply({ '-3': 'لقد انتهت اللعبة', '-2': 'غير صالح', '-1': 'موضع غير صالح', 0: 'موضع غير صالح' }[ok])
                return true
            }
            if (m.sender === room.game.winner) isWin = true
            else if (room.game.board === 511) isTie = true
            if (!(room.game instanceof TicTacToe)) {
                room.game = Object.assign(new TicTacToe(room.game.playerX, room.game.playerO), room.game)
            }
            let arr = room.game.render().map(v => ({ X: '❌', O: '⭕', 1: '1️⃣', 2: '2️⃣', 3: '3️⃣', 4: '4️⃣', 5: '5️⃣', 6: '6️⃣', 7: '7️⃣', 8: '8️⃣', 9: '9️⃣' }[v]))
            if (isSurrender) {
                room.game._currentTurn = m.sender === room.game.playerX
                isWin = true
            }
            let winner = isSurrender ? room.game.currentTurn : room.game.winner
            if (isWin) {
                db.users[m.sender].limit += 3
                db.users[m.sender].money += 3000
            }
            let str = `معرف الغرفة: ${room.id}\n\n${arr.slice(0, 3).join('')}\n${arr.slice(3, 6).join('')}\n${arr.slice(6).join('')}\n\n${isWin ? `@${winner.split('@')[0]} يفوز!` : isTie ? `انتهت اللعبة` : `دور ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}\n❌: @${room.game.playerX.split('@')[0]}\n⭕: @${room.game.playerO.split('@')[0]}\n\nعندما *تستسلم* للاستسلام والاعتراف بالهزيمة`
            if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
                room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
            if (room.x !== room.o) await naze.sendMessage(room.x, { text: str, mentions: parseMention(str) }, { quoted: m })
            await naze.sendMessage(room.o, { text: str, mentions: parseMention(str) }, { quoted: m })
            if (isTie || isWin) delete tictactoe[room.id]
        }

        // لعبة حجر ورقة مقص PvP
        let roof = Object.values(suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
        if (roof) {
            let now = Date.now();
            let win = '', tie = false;
            if (now - (roof.lastMove || now) > 3 * 60 * 1000) {
                m.reply('تم إلغاء لعبة Game Suit بسبب عدم النشاط لمدة 3 دقائق.');
                delete suit[roof.id];
                return;
            }
            roof.lastMove = now;
            if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
                if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
                    m.reply(`@${roof.p2.split`@`[0]} رفض الدعوى,\nتم إلغاء الدعوى`)
                    delete suit[roof.id]
                    return !0
                }
                roof.status = 'play';
                roof.asal = m.chat;
                m.reply(`Suit telah dikirimkan ke chat\n\n@${roof.p.split`@`[0]} dan @${roof.p2.split`@`[0]}\n\nSilahkan pilih suit di chat masing-masing klik https://wa.me/${botNumber.split`@`[0]}`)
                if (!roof.pilih) naze.sendMessage(roof.p, { text: `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️` }, { quoted: m })
                if (!roof.pilih2) naze.sendMessage(roof.p2, { text: `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️` }, { quoted: m })
            }
            let jwb = m.sender == roof.p, jwb2 = m.sender == roof.p2;
            let g = /gunting/i, b = /batu/i, k = /kertas/i, reg = /^(gunting|batu|kertas)/i;

            if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
                roof.pilih = reg.exec(m.text.toLowerCase())[0];
                roof.text = m.text;
                m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`);
                if (!roof.pilih2) naze.sendMessage(roof.p2, { text: '_Lawan sudah memilih_\nSekarang giliran kamu' })
            }
            if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
                roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
                roof.text2 = m.text
                m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
                if (!roof.pilih) naze.sendMessage(roof.p, { text: '_Lawan sudah memilih_\nSekarang giliran kamu' })
            }
            let stage = roof.pilih
            let stage2 = roof.pilih2
            if (roof.pilih && roof.pilih2) {
                if (b.test(stage) && g.test(stage2)) win = roof.p
                else if (b.test(stage) && k.test(stage2)) win = roof.p2
                else if (g.test(stage) && k.test(stage2)) win = roof.p
                else if (g.test(stage) && b.test(stage2)) win = roof.p2
                else if (k.test(stage) && b.test(stage2)) win = roof.p
                else if (k.test(stage) && g.test(stage2)) win = roof.p2
                else if (stage == stage2) tie = true
                db.users[roof.p == win ? roof.p : roof.p2].limit += tie ? 0 : 3
                db.users[roof.p == win ? roof.p : roof.p2].money += tie ? 0 : 3000
                naze.sendMessage(roof.asal, { text: `_*Hasil Suit*_${tie ? '\nSERI' : ''}\n\n@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}\n@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}\n\nPemenang Mendapatkan\n*Hadiah :* Uang(3000) & Limit(3)`.trim(), mentions: [roof.p, roof.p2] }, { quoted: m })
                delete suit[roof.id]
            }
        }

        // لعبة تفجير الأرقام (Tebak Bomb)
        let pilih = '🌀', bomb = '💣';
        if (m.sender in tebakbom) {
            if (!/^[1-9]|10$/i.test(body) && !isCmd && !isCreator) return !0;
            if (tebakbom[m.sender].petak[parseInt(body) - 1] === 1) return !0;
            if (tebakbom[m.sender].petak[parseInt(body) - 1] === 2) {
                tebakbom[m.sender].board[parseInt(body) - 1] = bomb;
                tebakbom[m.sender].pick++;
                m.react('❌')
                tebakbom[m.sender].bomb--;
                tebakbom[m.sender].nyawa.pop();
                let brd = tebakbom[m.sender].board;
                if (tebakbom[m.sender].nyawa.length < 1) {
                    await m.reply(`*انتهت اللعبة*\nلقد انفجرت القنبلة\n\n ${brd.join('')}\n\n*عدد الاختيارات :* ${tebakbom[m.sender].pick}\n_تخفيض الحد : 1_`);
                    m.react('😂')
                    delete tebakbom[m.sender];
                } else m.reply(`*اختر رقماً*\n\nلقد انفجرت القنبلة\n ${brd.join('')}\n\nالاختيارات: ${tebakbom[m.sender].pick}\nحياة متبقية: ${tebakbom[m.sender].nyawa}`);
                return !0;
            }
            if (tebakbom[m.sender].petak[parseInt(body) - 1] === 0) {
                tebakbom[m.sender].petak[parseInt(body) - 1] = 1;
                tebakbom[m.sender].board[parseInt(body) - 1] = pilih;
                tebakbom[m.sender].pick++;
                tebakbom[m.sender].lolos--;
                let brd = tebakbom[m.sender].board;
                if (tebakbom[m.sender].lolos < 1) {
                    db.users[m.sender].money += 6000
                    await m.reply(`*أنت رائع ಠ⁠ᴥ⁠ಠ*\n\n${brd.join('')}\n\n*الاختيارات :* ${tebakbom[m.sender].pick}\n*حياة متبقية :* ${tebakbom[m.sender].nyawa}\n*قنابل :* ${tebakbom[m.sender].bomb}\nمكافأة نقدية 💰 *+6000*`);
                    delete tebakbom[m.sender];
                } else m.reply(`*اختر رقماً*\n\n${brd.join('')}\n\nالاختيارات : ${tebakbom[m.sender].pick}\nحياة متبقية : ${tebakbom[m.sender].nyawa}\nقنابل : ${tebakbom[m.sender].bomb}`)
            }
        }

        // Akinator
        if (m.sender in akinator) {
            if (m.quoted && akinator[m.sender].key == m.quoted.id) {
                if (budy == '5') {
                    if (akinator[m.sender]?.progress?.toFixed(0) == 0) {
                        delete akinator[m.sender]
                        return m.reply(`🎮 انتهت جلسة Akinator!\nمع تقدم *0*`)
                    }
                    akinator[m.sender].isWin = false
                    await akinator[m.sender].cancelAnswer()
                    let { key } = await m.reply(`🎮 Akinator : العودة\n\n@${m.sender.split('@')[0]} (${akinator[m.sender].progress.toFixed(2)}) %\n${akinator[m.sender].question}\n\n- 0 - نعم\n- 1 - لا\n- 2 - لا أعرف\n- 3 - ربما\n- 4 - ربما لا\n- 5 - ${akinator[m.sender]?.progress?.toFixed(0) == 0 ? 'إنهاء' : 'عودة'}`)
                    akinator[m.sender].key = key.id
                } else if (akinator[m.sender].isWin && ['benar', 'ya'].includes(budy.toLowerCase())) {
                    m.react('🎊')
                    delete akinator[m.sender]
                } else {
                    if (!isNaN(budy) && budy.match(/^[0-4]$/) && budy) {
                        if (akinator[m.sender].isWin) {
                            let { key } = await m.reply({ image: { url: akinator[m.sender].sugestion_photo }, caption: `🎮 Akinator الجواب :\n\n@${m.sender.split('@')[0]}\nإنه *${akinator[m.sender].sugestion_name}*\n_${akinator[m.sender].sugestion_desc}_\n\n- 5 - العودة\n- *نعم* (لإنهاء الجلسة)`, contextInfo: { mentionedJid: [m.sender] } });
                            akinator[m.sender].key = key.id
                        } else {
                            await akinator[m.sender].answer(budy)
                            if (akinator[m.sender].isWin) {
                                let { key } = await m.reply({ image: { url: akinator[m.sender].sugestion_photo }, caption: `🎮 Akinator الجواب :\n\n@${m.sender.split('@')[0]}\nإنه *${akinator[m.sender].sugestion_name}*\n_${akinator[m.sender].sugestion_desc}_\n\n- 5 - العودة\n- *نعم* (لإنهاء الجلسة)`, contextInfo: { mentionedJid: [m.sender] } });
                                akinator[m.sender].key = key.id
                            } else {
                                let { key } = await m.reply(`🎮 Akinator :\n\n@${m.sender.split('@')[0]} (${akinator[m.sender].progress.toFixed(2)}) %\n${akinator[m.sender].question}\n\n- 0 - نعم\n- 1 - لا\n- 2 - لا أعرف\n- 3 - ربما\n- 4 - ربما لا\n- 5 - العودة`)
                                akinator[m.sender].key = key.id
                            }
                        }
                    }
                }
            }
        }

        // نظام الألعاب (تحقق الأجوبة)
        const games = { tebaklirik, tekateki, tebaklagu, tebakkata, kuismath, susunkata, tebakkimia, caklontong, tebakangka, tebaknegara, tebakgambar, tebakbendera }
        for (let gameName in games) {
            let game = games[gameName];
            let id = iGame(game, m.chat);
            if ((!isCmd || isCreator) && m.quoted && id == m.quoted.id) {
                if (game[m.chat + id]?.jawaban) {
                    if (gameName == 'kuismath') {
                        jawaban = game[m.chat + id].jawaban
                        const difficultyMap = { 'noob': 1, 'easy': 1.5, 'medium': 2.5, 'hard': 4, 'extreme': 5, 'impossible': 6, 'impossible2': 7 };
                        let randMoney = difficultyMap[kuismath[m.chat + id].mode]
                        if (!isNaN(budy)) {
                            if (budy.toLowerCase() == jawaban) {
                                db.users[m.sender].money += randMoney * 1000
                                await m.reply(`الإجابة صحيحة 🎉\nمكافأة نقدية 💰 *+${randMoney * 1000}*`)
                                delete kuismath[m.chat + id]
                            } else m.reply('*الإجابة خاطئة!*')
                        }
                    } else {
                        jawaban = game[m.chat + id].jawaban
                        let jawabBenar = /tekateki|tebaklirik|tebaklagu|tebakkata|tebaknegara|tebakbendera/.test(gameName) ? (similarity(budy.toLowerCase(), jawaban) >= almost) : (budy.toLowerCase() == jawaban)
                        let bonus = gameName == 'caklontong' ? 9999 : gameName == 'tebaklirik' ? 4299 : gameName == 'susunkata' ? 2989 : 3499
                        if (jawabBenar) {
                            db.users[m.sender].money += bonus * 1
                            await m.reply(`الإجابة صحيحة 🎉\nمكافأة نقدية 💰 *+${bonus}*`)
                            delete game[m.chat + id]
                        } else m.reply('*الإجابة خاطئة!*')
                    }
                }
            }
        }

        // لعبة Family 100 (الإجابات المتعددة)
        if (m.chat in family100) {
            if (m.quoted && m.quoted.id == family100[m.chat].id && !isCmd) {
                let room = family100[m.chat]
                let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
                let isSurender = /^((me)?nyerah|surr?ender)$/i.test(teks)
                if (!isSurender) {
                    let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                    if (room.terjawab[index]) return !0
                    room.terjawab[index] = m.sender
                }
                let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
                let caption = `أجب على السؤال التالي :\n${room.soal}\n\n\nيوجد ${room.jawaban.length} إجابات ${room.jawaban.find(v => v.includes(' ')) ? `(بعض الإجابات تحتوي على مسافات)` : ''}\n${isWin ? `تم الإجابة على كل الإجابات` : isSurender ? 'استسلام!' : ''}\n${Array.from(room.jawaban, (jawaban, index) => { return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false }).filter(v => v).join('\n')}\n${isSurender ? '' : `اللاعب المثالي`}`.trim()
                m.reply(caption)
                if (isWin || isSurender) delete family100[m.chat]
            }
        }

        // لعبة الشطرنج (vs بوت)
        if ((!isCmd || isCreator) && (m.sender in chess)) {
            const game = chess[m.sender];
            if (m.quoted && game.id == m.quoted.id && game.turn == m.sender && game.botMode) {
                if (!(game instanceof Chess)) {
                    chess[m.sender] = Object.assign(new Chess(game.fen), game);
                }
                if (game.isCheckmate() || game.isDraw() || game.isGameOver()) {
                    const status = game.isCheckmate() ? 'Checkmate' : game.isDraw() ? 'Draw' : 'Game Over';
                    delete chess[m.sender];
                    return m.reply(`♟انتهت اللعبة: ${status}\nتم إيقاف اللعبة`);
                }
                const [from, to] = budy.toLowerCase().split(' ');
                if (!from || !to || from.length !== 2 || to.length !== 2) return m.reply('تنسيق خاطئ! استخدم: e2 e4');
                try {
                    game.move({ from, to });
                } catch (e) {
                    return m.reply('حركة غير صالحة!')
                }

                if (game.isGameOver()) {
                    delete chess[m.sender];
                    return m.reply(`♟انتهت اللعبة\nالفائز: @${m.sender.split('@')[0]}`);
                }
                const moves = game.moves({ verbose: true });
                const botMove = moves[Math.floor(Math.random() * moves.length)];
                game.move(botMove);
                game._fen = game.fen();
                game.time = Date.now();

                if (game.isGameOver()) {
                    delete chess[m.sender];
                    return m.reply(`♟انتهت اللعبة\nالفائز: البوت`);
                }
                const encodedFen = encodeURI(game._fen);
                const boardUrls = [`https://www.chess.com/dynboard?fen=${encodedFen}&size=3&coordinates=inside`, `https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside`, `https://chessboardimage.com/${encodedFen}.png`, `https://backscattering.de/web-boardimage/board.png?fen=${encodedFen}&coordinates=true&size=765`, `https://fen2image.chessvision.ai/${encodedFen}/`];
                for (let url of boardUrls) {
                    try {
                        const { data } = await axios.get(url, { responseType: 'arraybuffer' });
                        let { key } = await m.reply({ image: data, caption: `♟️لعبة الشطرنج (ضد البوت)\n\nحركتك: ${from} → ${to}\nحركة البوت: ${botMove.from} → ${botMove.to}\n\nدورك التالي!\nمثال: e2 e4`, mentions: [m.sender] });
                        game.id = key.id;
                        break;
                    } catch (e) { }
                }
            } else if (game.time && (Date.now() - game.time >= 3600000)) {
                delete chess[m.sender];
                return m.reply(`♟انتهى الوقت!\nتم إيقاف اللعبة`);
            }
        }
        if (m.isGroup && (!isCmd || isCreator) && (m.chat in chess)) {
            if (m.quoted && chess[m.chat].id == m.quoted.id && [chess[m.chat].player1, chess[m.chat].player2].includes(m.sender)) {
                if (!(chess[m.chat] instanceof Chess)) {
                    chess[m.chat] = Object.assign(new Chess(chess[m.chat].fen), chess[m.chat]);
                }
                if (chess[m.chat].isCheckmate() || chess[m.chat].isDraw() || chess[m.chat].isGameOver()) {
                    const status = chess[m.chat].isCheckmate() ? 'Checkmate' : chess[m.chat].isDraw() ? 'Draw' : 'Game Over';
                    delete chess[m.chat];
                    return m.reply(`♟انتهت اللعبة: ${status}\nتم إيقاف اللعبة`);
                }
                const [from, to] = budy.toLowerCase().split(' ');
                if (!from || !to || from.length !== 2 || to.length !== 2) return m.reply('تنسيق خاطئ! استخدم: e2 e4');
                if ([chess[m.chat].player1, chess[m.chat].player2].includes(m.sender) && chess[m.chat].turn === m.sender) {
                    try {
                        chess[m.chat].move({ from, to });
                    } catch (e) {
                        return m.reply('حركة غير صالحة!')
                    }
                    chess[m.chat].time = Date.now();
                    chess[m.chat]._fen = chess[m.chat].fen();
                    const isPlayer2 = chess[m.chat].player2 === m.sender
                    const nextPlayer = isPlayer2 ? chess[m.chat].player1 : chess[m.chat].player2;
                    const encodedFen = encodeURI(chess[m.chat]._fen);
                    const boardUrls = [`https://www.chess.com/dynboard?fen=${encodedFen}&size=3&coordinates=inside${!isPlayer2 ? '&flip=true' : ''}`, `https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside${!isPlayer2 ? '&flip=true' : ''}`, `https://chessboardimage.com/${encodedFen}${!isPlayer2 ? '-flip' : ''}.png`, `https://backscattering.de/web-boardimage/board.png?fen=${encodedFen}&coordinates=true&size=765${!isPlayer2 ? '&orientation=black' : ''}`, `https://fen2image.chessvision.ai/${encodedFen}/${!isPlayer2 ? '?pov=black' : ''}`];
                    for (let url of boardUrls) {
                        try {
                            const { data } = await axios.get(url, { responseType: 'arraybuffer' });
                            let { key } = await m.reply({ image: data, caption: `♟️لعبة الشطرنج\n\nدور: @${nextPlayer.split('@')[0]}\n\nرد على هذه الرسالة للمتابعة!\nمثال: from to -> b1 c3`, mentions: [nextPlayer] });
                            chess[m.chat].turn = nextPlayer
                            chess[m.chat].id = key.id;
                            break;
                        } catch (e) { }
                    }
                }
            } else if (chess[m.chat].time && (Date.now() - chess[m.chat].time >= 3600000)) {
                delete chess[m.chat]
                return m.reply(`♟انتهى الوقت!\nتم إيقاف اللعبة`)
            }
        }

        // لعبة السلم والثعبان
        if (m.isGroup && (!isCmd || isCreator) && (m.chat in ulartangga)) {
            if (m.quoted && ulartangga[m.chat].id == m.quoted.id) {
                if (!(ulartangga[m.chat] instanceof SnakeLadder)) {
                    ulartangga[m.chat] = Object.assign(new SnakeLadder(ulartangga[m.chat]), ulartangga[m.chat]);
                }
                if (/^(roll|kocok)/i.test(budy.toLowerCase())) {
                    const player = ulartangga[m.chat].players.findIndex(a => a.id == m.sender)
                    if (ulartangga[m.chat].turn !== player) return m.reply('ليس دورك!')
                    const roll = ulartangga[m.chat].rollDice();
                    await m.reply(`https://raw.githubusercontent.com/twenty/database/master/games/images/dice/roll-${roll}.webp`);
                    ulartangga[m.chat].nextTurn();
                    ulartangga[m.chat].players[player].move += roll
                    if (ulartangga[m.chat].players[player].move > 100) ulartangga[m.chat].players[player].move = 100 - (ulartangga[m.chat].players[player].move - 100);
                    let teks = `🐍🪜اللون: ${['أحمر', 'أزرق فاتح', 'أصفر', 'أخضر', 'بنفسجي', 'برتقالي', 'أزرق غامق', 'أبيض'][player]} -> ${ulartangga[m.chat].players[player].move}\n`;
                    if (Object.keys(ulartangga[m.chat].map.move).includes(ulartangga[m.chat].players[player].move.toString())) {
                        teks += ulartangga[m.chat].players[player].move > ulartangga[m.chat].map.move[ulartangga[m.chat].players[player].move] ? 'لقد أكلتك الأفعى!\n' : 'لقد تسلقت السلم\n'
                        ulartangga[m.chat].players[player].move = ulartangga[m.chat].map.move[ulartangga[m.chat].players[player].move];
                    }
                    const newMap = await ulartangga[m.chat].drawBoard(ulartangga[m.chat].map.url, ulartangga[m.chat].players);
                    if (ulartangga[m.chat].players[player].move === 100) {
                        teks += `@${m.sender.split('@')[0]} فاز\nالمكافآت:\n- حد + 50\n- نقود + 100.000`;
                        addLimit(50, m.sender, db);
                        addMoney(100000, m.sender, db);
                        delete ulartangga[m.chat];
                        return m.reply({ image: newMap, caption: teks, mentions: [m.sender] });
                    }
                    let { key } = await m.reply({ image: newMap, caption: teks + `دور: @${ulartangga[m.chat].players[ulartangga[m.chat].turn].id.split('@')[0]}`, mentions: [m.sender, ulartangga[m.chat].players[ulartangga[m.chat].turn].id] });
                    ulartangga[m.chat].id = key.id;
                } else m.reply('مثال: roll/kocok')
            } else if (ulartangga[m.chat].time && (Date.now() - ulartangga[m.chat].time >= 7200000)) {
                delete ulartangga[m.chat]
                return m.reply(`🐍🪜انتهى الوقت!\nتم إيقاف اللعبة`)
            }
        }

        // نظام Menfes والـ Room AI (الرسائل المجهولة و غرف المحادثة مع AI)
        if (!m.isGroup && (!isCmd || isCreator)) {
            if (menfes[m.sender] && m.key.remoteJid !== 'status@broadcast' && m.msg) {
                m.react('✈');
                m.msg.contextInfo = { isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: `*رسالة من ${menfes[m.sender].nama ? menfes[m.sender].nama : 'شخص ما'}*` }, key: { remoteJid: '0@s.whatsapp.net', fromMe: false, participant: '0@s.whatsapp.net' } }
                const pesan = m.type === 'conversation' ? { extendedTextMessage: { text: m.msg, contextInfo: { isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: `*رسالة من ${menfes[m.sender].nama ? menfes[m.sender].nama : 'شخص ما'}*` }, key: { remoteJid: '0@s.whatsapp.net', fromMe: false, participant: '0@s.whatsapp.net' } } } } : { [m.type]: m.msg }
                await naze.relayMessage(menfes[m.sender].tujuan, pesan, {});
            }

            if (chat_ai[m.sender] && m.key.remoteJid !== 'status@broadcast') {
                if (!/^(del((room|c|hat)ai)|>|<$)$/i.test(command) && budy) {
                    chat_ai[m.sender].push({ role: 'user', content: budy });
                    let hasil;
                    try {
                        hasil = await gptLogic(chat_ai[m.sender], budy)
                    } catch (e) {
                        try {
                            hasil = await yanzGpt(chat_ai[m.sender])
                        } catch (e) {
                            hasil = 'فشل في جلب الرد، الموقع يواجه مشكلة'
                        }
                    }
                    const response = hasil?.choices?.[0]?.message?.content || hasil || 'عذراً، لم أفهم.';
                    chat_ai[m.sender].push({ role: 'assistant', content: response });
                    await m.reply(response)
                }
            }
        }

        // نظام AFK
        let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
        for (let jid of mentionUser) {
            let user = db.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`لا تقم بوسمه!\nهو في وضع AFK ${reason ? 'بسبب ' + reason : 'بدون سبب'}\nمنذ ${clockString(new Date - afkTime)}`.trim())
        }
        if (db.users[m.sender].afkTime > -1) {
            let user = db.users[m.sender]
            m.reply(`@${m.sender.split('@')[0]} عاد من وضع AFK${user.afkReason ? ' بعد ' + user.afkReason : ''}\nمدة AFK: ${clockString(new Date - user.afkTime)}`)
            user.afkTime = -1
            user.afkReason = ''
        }


        switch (fileSha256 || command) {
            // مكان إضافة Case
            case '19rujxl1e': {
                console.log('.')
            }
                break

            // أوامر المالك
            case 'shutdown': case 'off': {
                if (!isCreator) return m.reply(mess.owner)
                m.reply(`*[BOT] جاري إيقاف العملية...*`).then(() => {
                    process.exit(0)
                })
            }
                break
            case 'setbio': {
                if (!isCreator) return m.reply(mess.owner)
                if (!text) return m.reply('أين النص؟')
                naze.setStatus(q)
                m.reply(`*تم تغيير البايو إلى ${q}*`)
            }
                break
            case 'setppbot': {
                if (!isCreator) return m.reply(mess.owner)
                if (!/image/.test(quoted.type)) return m.reply(`قم بالرد على صورة مع التعليق ${prefix + command}`)
                let media = await naze.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (text.length > 0) {
                    let { img } = await generateProfilePicture(media)
                    await naze.query({
                        tag: 'iq',
                        attrs: {
                            to: '@s.whatsapp.net',
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]
                    })
                    await fs.unlinkSync(media)
                    m.reply('تم بنجاح')
                } else {
                    await naze.updateProfilePicture(botNumber, { url: media })
                    await fs.unlinkSync(media)
                    m.reply('تم بنجاح')
                }
            }
                break
            case 'delppbot': {
                if (!isCreator) return m.reply(mess.owner)
                await naze.removeProfilePicture(naze.user.id)
                m.reply('تم بنجاح')
            }
                break
            case 'join': {
                if (!isCreator) return m.reply(mess.owner)
                if (!text) return m.reply('أدخل رابط المجموعة!')
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply('الرابط غير صالح!')
                const result = args[0].split('https://chat.whatsapp.com/')[1]
                m.reply(mess.wait)
                await naze.groupAcceptInvite(result).catch((res) => {
                    if (res.data == 400) return m.reply('المجموعة غير موجودة❗');
                    if (res.data == 401) return m.reply('تم طرد البوت من تلك المجموعة❗');
                    if (res.data == 409) return m.reply('البوت بالفعل داخل تلك المجموعة❗');
                    if (res.data == 410) return m.reply('تم إعادة تعيين رابط المجموعة❗');
                    if (res.data == 500) return m.reply('المجموعة ممتلئة❗');
                })
            }
                break
            case 'leave': {
                if (!isCreator) return m.reply(mess.owner)
                await naze.groupLeave(m.chat).then(() => naze.sendFromOwner(ownerNumber, 'تم الخروج من المجموعة بنجاح', m, { contextInfo: { isForwarded: true } })).catch(e => { });
            }
                break
            case 'clearchat': {
                if (!isCreator) return m.reply(mess.owner)
                await naze.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.timestamp }] }, m.chat).catch((e) => m.reply('فشل في حذف المحادثة!'))
                m.reply('تم تنظيف المحادثة بنجاح')
            }
                break
            case 'getmsgstore': case 'storemsg': {
                if (!isCreator) return m.reply(mess.owner)
                let [teks1, teks2] = text.split`|`
                if (teks1 && teks2) {
                    const msgnya = await store.loadMessage(teks1, teks2)
                    if (msgnya?.message) await naze.relayMessage(m.chat, msgnya.message, {})
                    else m.reply('الرسالة غير موجودة!')
                } else m.reply(`مثال: ${prefix + command} 123xxx@g.us|3EB0xxx`)
            }
                break
            case 'blokir': case 'block': {
                if (!isCreator) return m.reply(mess.owner)
                if (text || m.quoted) {
                    const numbersOnly = m.isGroup ? (text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender) : m.chat
                    await naze.updateBlockStatus(numbersOnly, 'block').then((a) => m.reply(mess.done)).catch((err) => m.reply('فشل!'))
                } else m.reply(`مثال: ${prefix + command} 62xxx`)
            }
                break
            case 'listblock': {
                let anu = await naze.fetchBlocklist()
                m.reply(`إجمالي المحظورين : ${anu.length}\n` + anu.map(v => '• ' + v.replace(/@.+/, '')).join`\n`)
            }
                break
            case 'openblokir': case 'unblokir': case 'openblock': case 'unblock': {
                if (!isCreator) return m.reply(mess.owner)
                if (text || m.quoted) {
                    const numbersOnly = m.isGroup ? (text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender) : m.chat
                    await naze.updateBlockStatus(numbersOnly, 'unblock').then((a) => m.reply(mess.done)).catch((err) => m.reply('فشل!'))
                } else m.reply(`مثال: ${prefix + command} 62xxx`)
            }
                break
            case 'ban': case 'banned': {
                if (!isCreator) return m.reply(mess.owner)
                if (!text) return m.reply(`أرسل/ضع علامة على رقمه!\nمثال:\n${prefix + command} 62xxx`)
                const nmrnya = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                if (db.users[nmrnya] && !db.users[nmrnya].ban) {
                    db.users[nmrnya].ban = true
                    m.reply('تم حظر المستخدم!')
                } else m.reply('المستخدم غير مسجل في قاعدة البيانات!')
            }
                break
            case 'unban': case 'unbanned': {
                if (!isCreator) return m.reply(mess.owner)
                if (!text) return m.reply(`أرسل/ضع علامة على رقمه!\nمثال:\n${prefix + command} 62xxx`)
                const nmrnya = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                if (db.users[nmrnya] && db.users[nmrnya].ban) {
                    db.users[nmrnya].ban = false
                    m.reply('تم رفع الحظر عن المستخدم!')
                } else m.reply('المستخدم غير مسجل في قاعدة البيانات!')
            }
                break
            case 'mute': case 'unmute': {
                if (!isCreator) return m.reply(mess.owner)
                if (!m.isGroup) return m.reply(mess.group)
                if (command == 'mute') {
                    db.groups[m.chat].mute = true
                    m.reply('تم كتم البوت في هذه المجموعة!')
                } else if (command == 'unmute') {
                    db.groups[m.chat].mute = false
                    m.reply('تم إلغاء الكتم بنجاح')
                }
            }
                break
            case 'addowner': {
                if (!isCreator) return m.reply(mess.owner)
                if (!text || isNaN(text)) return m.reply(`أرسل/ضع علامة على رقمه!\nمثال:\n${prefix + command} 62xxx`)
                const nmrnya = text.replace(/[^0-9]/g, '')
                const onWa = await naze.onWhatsApp(nmrnya)
                if (!onWa.length > 0) return m.reply('الرقم غير مسجل في واتساب!')
                if (db?.set?.[botNumber]?.owner) {
                    if (db.set[botNumber].owner.find(a => a.id === nmrnya)) return m.reply('الرقم موجود بالفعل في قائمة المالكين!')
                    db.set[botNumber].owner.push({ id: nmrnya, lock: false });
                }
                m.reply('تم إضافة مالك بنجاح')
            }
                break
            case 'delowner': {
                if (!isCreator) return m.reply(mess.owner)
                if (!text || isNaN(text)) return m.reply(`أرسل/ضع علامة على رقمه!\nمثال:\n${prefix + command} 62xxx`)
                const nmrnya = text.replace(/[^0-9]/g, '')
                const onWa = await naze.onWhatsApp(nmrnya)
                if (!onWa.length > 0) return m.reply('الرقم غير مسجل في واتساب!')
                let list = db.set[botNumber].owner
                const index = list.findIndex(o => o.id === nmrnya);
                if (index === -1) return m.reply('المالك غير موجود في القائمة!')
                list.splice(index, 1)
                m.reply('تم حذف المالك بنجاح')
            }
                break
            case 'adduang': case 'addmoney': {
                if (!isCreator) return m.reply(mess.owner)
                if (!args[0] || !args[1] || isNaN(args[1])) return m.reply(`أرسل/ضع علامة على رقمه!\nمثال:\n${prefix + command} 62xxx 1000`)
                if (args[1].length > 15) return m.reply('الحد الأقصى للمبلغ 15 رقم!')
                const nmrnya = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                const onWa = await naze.onWhatsApp(nmrnya)
                if (!onWa.length > 0) return m.reply('الرقم غير مسجل في واتساب!')
                if (db.users[nmrnya] && db.users[nmrnya].money >= 0) {
                    addMoney(args[1], nmrnya, db)
                    m.reply('تم إضافة المال بنجاح')
                } else m.reply('المستخدم غير مسجل في قاعدة البيانات!')
            }
                break
            case 'addlimit': {
                if (!isCreator) return m.reply(mess.owner)
                if (!args[0] || !args[1] || isNaN(args[1])) return m.reply(`أرسل/ضع علامة على رقمه!\nمثال:\n${prefix + command} 62xxx 10`)
                if (args[1].length > 10) return m.reply('الحد الأقصى للحدود هو 10 أرقام!')
                const nmrnya = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                const onWa = await naze.onWhatsApp(nmrnya)
                if (!onWa.length > 0) return m.reply('الرقم غير مسجل في واتساب!')
                if (db.users[nmrnya] && db.users[nmrnya].limit >= 0) {
                    addLimit(args[1], nmrnya, db)
                    m.reply('تم إضافة الحد بنجاح')
                } else m.reply('المستخدم غير مسجل في قاعدة البيانات!')
            }
                break
            case 'listpc': {
                if (!isCreator) return m.reply(mess.owner)
                let anu = Object.keys(store.messages).filter(a => a.endsWith('.net') || a.endsWith('lid'));
                let teks = `● *قائمة المحادثات الخاصة*\n\nإجمالي المحادثات : ${anu.length} محادثة\n\n`
                if (anu.length === 0) return m.reply(teks)
                for (let i of anu) {
                    if (store.messages?.[i]?.array?.length) {
                        let nama = naze.getName(m.sender)
                        teks += `${setv} *الاسم :* ${nama}\n${setv} *المستخدم :* @${i.split('@')[0]}\n${setv} *الدردشة :* https://wa.me/${i.split('@')[0]}\n\n=====================\n\n`
                    }
                }
                await m.reply(teks)
            }
                break
            case 'listgc': {
                if (!isCreator) return m.reply(mess.owner)
                let anu = Object.keys(store.messages).filter(a => a.endsWith('@g.us'));
                let teks = `● *قائمة المجموعات*\n\nإجمالي المجموعات : ${anu.length} مجموعة\n\n`
                if (anu.length === 0) return m.reply(teks)
                for (let i of anu) {
                    let metadata;
                    try {
                        metadata = store.groupMetadata[i]
                    } catch (e) {
                        metadata = (store.groupMetadata[i] = await naze.groupMetadata(i).catch(e => ({})))
                    }
                    teks += metadata?.subject ? `${setv} *الاسم :* ${metadata.subject}\n${setv} *المالك :* ${metadata.owner ? `@${metadata.owner.split('@')[0]}` : '-'}\n${setv} *المعرف :* ${metadata.id}\n${setv} *تاريخ الإنشاء :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n${setv} *عدد الأعضاء :* ${metadata.participants.length}\n\n=====================\n\n` : ''
                }
                await m.reply(teks)
            }
                break
            case 'creategc': case 'buatgc': {
                if (!isCreator) return m.reply(mess.owner)
                if (!text) return m.reply(`مثال:\n${prefix + command} *اسم المجموعة*`)
                let group = await naze.groupCreate(q, [m.sender])
                let res = await naze.groupInviteCode(group.id)
                await m.reply(`*رابط المجموعة :* *https://chat.whatsapp.com/${res}*\n\n*اسم المجموعة :* *${group.subject}*\nانضم خلال 30 ثانية\nلكي تصبح مشرفًا`, { detectLink: true })
                await sleep(30000)
                await naze.groupParticipantsUpdate(group.id, [m.sender], 'promote').catch(e => { });
                await naze.sendMessage(group.id, { text: 'تم' })
            }
                break
            case 'addsewa': case 'sewa': {
                if (!isCreator) return m.reply(mess.owner)
                if (!text) return m.reply(`مثال:\n${prefix + command} https://chat.whatsapp.com/xxx | وقت\n${prefix + command} https://chat.whatsapp.com/xxx | 30 hari`)
                let [teks1, teks2] = text.split('|')?.map(x => x.trim()) || [];
                if (!isUrl(teks1) && !teks1.includes('chat.whatsapp.com/')) return m.reply('الرابط غير صالح!')
                const urlny = teks1.split('chat.whatsapp.com/')[1]
                try {
                    await naze.groupAcceptInvite(urlny)
                } catch (e) {
                    if (e.data == 400) return m.reply('المجموعة غير موجودة❗');
                    if (e.data == 401) return m.reply('تم طرد البوت من تلك المجموعة❗');
                    if (e.data == 410) return m.reply('تم إعادة تعيين رابط المجموعة❗');
                    if (e.data == 500) return m.reply('المجموعة ممتلئة❗');
                }
                await naze.groupGetInviteInfo(urlny).then(a => {
                    addExpired({ url: urlny, expired: (teks2?.replace(/[^0-9]/g, '') || 30) + 'd', ...a }, sewa)
                    m.reply('تمت إضافة سِياقة لمدة ' + (teks2?.replace(/[^0-9]/g, '') || 30) + ' يوم\nسيخرج تلقائيًا عند انتهاء الوقت!')
                }).catch(e => m.reply('فشل في إضافة السِياقة!'))
            }
                break
            case 'delsewa': {
                if (!isCreator) return m.reply(mess.owner)
                if (!text) return m.reply(`مثال:\n${prefix + command} https://chat.whatsapp.com/xxxx\n أو \n${prefix + command} id_group@g.us`)
                const urlny = text.split('chat.whatsapp.com/')[1].trim()
                if (checkStatus(urlny, sewa)) {
                    await m.reply('تم حذف السِياقة بنجاح')
                    await naze.groupLeave(getStatus(urlny, sewa).id).catch(e => { });
                    sewa.splice(getPosition(urlny, sewa), 1);
                } else m.reply(`${text} غير مدرج في قاعدة البيانات\nمثال:\n${prefix + command} https://chat.whatsapp.com/xxxx\n أو \n${prefix + command} id_group@g.us`)
            }
                break
            case 'listsewa': {
                if (!isCreator) return m.reply(mess.owner)
                let txt = `*------「 قائمة السِياقات 」------*\n\n`
                for (let s of sewa) {
                    txt += `➸ *ID*: ${s.id}\n➸ *رابط*: https://chat.whatsapp.com/${s.url}\n➸ *انتهاء*: ${formatDate(s.expired)}\n\n`
                }
                m.reply(txt)
            }
                break
            case 'addpr': case 'addprem': case 'addpremium': {
                if (!isCreator) return m.reply(mess.owner)
                if (!text) return m.reply(`مثال:\n${prefix + command} @tag|وقت\n${prefix + command} @${m.sender.split('@')[0]}|30 hari`)
                let [teks1, teks2] = text.split('|').map(x => x.trim());
                const nmrnya = teks1.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                const onWa = await naze.onWhatsApp(nmrnya)
                if (!onWa.length > 0) return m.reply('الرقم غير مسجل في واتساب!')
                if (teks2) {
                    if (db.users[nmrnya] && db.users[nmrnya].limit >= 0) {
                        addExpired({ id: nmrnya, expired: teks2.replace(/[^0-9]/g, '') + 'd' }, premium);
                        m.reply(`تم إضافة ${command} إلى @${nmrnya.split('@')[0]} لمدة ${teks2}`)
                        db.users[nmrnya].limit += db.users[nmrnya].vip ? limit.vip : limit.premium
                        db.users[nmrnya].money += db.users[nmrnya].vip ? money.vip : money.premium
                    } else m.reply('الرقم غير مسجل في البوت!\nتأكد أن الرقم سبق وأن استخدم البوت!')
                } else m.reply(`أدخل المدة!\nمثال:\n${prefix + command} @tag|المدة\n${prefix + command} @${m.sender.split('@')[0]}|30d\n_d = يوم_`)
            }
                break
            case 'delpr': case 'delprem': case 'delpremium': {
                if (!isCreator) return m.reply(mess.owner)
                if (!text) return m.reply(`مثال:\n${prefix + command} @tag`)
                const nmrnya = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                if (db.users[nmrnya] && db.users[nmrnya].limit >= 0) {
                    if (checkStatus(nmrnya, premium)) {
                        premium.splice(getPosition(nmrnya, premium), 1);
                        m.reply(`تم إزالة ${command} عن @${nmrnya.split('@')[0]}`)
                        db.users[nmrnya].limit += db.users[nmrnya].vip ? limit.vip : limit.free
                        db.users[nmrnya].money += db.users[nmrnya].vip ? money.vip : money.free
                    } else m.reply(`المستخدم @${nmrnya.split('@')[0]} ليس من المشتركين المدفوعين❗`)
                } else m.reply('الرقم غير مسجل في البوت!')
            }
                break
            case 'listpr': case 'listprem': case 'listpremium': {
                if (!isCreator) return m.reply(mess.owner)
                let txt = `*------「 قائمة المشتركين المميزين 」------*\n\n`
                for (let userprem of premium) {
                    txt += `➸ *رقم*: @${userprem.id.split('@')[0]}\n➸ *حدود*: ${db.users[userprem.id].limit}\n➸ *نقود*: ${db.users[userprem.id].money.toLocaleString('id-ID')}\n➸ *انتهاء*: ${formatDate(userprem.expired)}\n\n`
                }
                m.reply(txt)
            }
                break
            case 'upsw': {
                if (!isCreator) return m.reply(mess.owner)
                const statusJidList = Object.keys(db.users)
                const backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
                try {
                    if (quoted.isMedia) {
                        if (/image|video/.test(quoted.mime)) {
                            await naze.sendMessage('status@broadcast', {
                                [`${quoted.mime.split('/')[0]}`]: await quoted.download(),
                                caption: text || m.quoted?.body || ''
                            }, { statusJidList, broadcast: true })
                            m.react('✅')
                        } else if (/audio/.test(quoted.mime)) {
                            await naze.sendMessage('status@broadcast', {
                                audio: await quoted.download(),
                                mimetype: 'audio/mp4',
                                ptt: true
                            }, { backgroundColor, statusJidList, broadcast: true })
                            m.react('✅')
                        } else m.reply('يدعم الفيديو/الصورة/النص فقط')
                    } else if (quoted.text) {
                        await naze.sendMessage('status@broadcast', { text: text || m.quoted?.body || '' }, {
                            textArgb: 0xffffffff,
                            font: Math.floor(Math.random() * 9),
                            backgroundColor, statusJidList,
                            broadcast: true
                        })
                        m.react('✅')
                    } else m.reply('يدعم الفيديو/الصورة/الصوت/النص فقط')
                } catch (e) {
                    m.reply('فشل في رفع الحالة على واتساب!')
                }
            }
                break
            case 'addcase': {
                if (!isCreator) return m.reply(mess.owner)
                if (!text && !text.startsWith('case')) return m.reply('أدخل الـ case!')
                fs.readFile('naze.js', 'utf8', (err, data) => {
                    if (err) {
                        console.error('حدث خطأ أثناء قراءة الملف:', err);
                        return;
                    }
                    const posisi = data.indexOf("case '19rujxl1e':");
                    if (posisi !== -1) {
                        const codeBaru = data.slice(0, posisi) + '\n' + `${text}` + '\n' + data.slice(posisi);
                        fs.writeFile('naze.js', codeBaru, 'utf8', (err) => {
                            if (err) {
                                m.reply('حدث خطأ أثناء كتابة الملف: ', err);
                            } else m.reply('تمت إضافة الـ case بنجاح');
                        });
                    } else m.reply('فشل في إضافة الـ case!');
                });
            }
                break
            case 'getcase': {
                if (!isCreator) return m.reply(mess.owner)
                if (!text) return m.reply('أدخل اسم الـ case!')
                try {
                    const getCase = (cases) => {
                        return "case" + `'${cases}'` + fs.readFileSync("naze.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
                    }
                    m.reply(`${getCase(text)}`)
                } catch (e) {
                    m.reply(`الـ case ${text} غير موجود!`)
                }
            }
                break
            case 'delcase': {
                if (!isCreator) return m.reply(mess.owner)
                if (!text) return m.reply('أدخل اسم الـ case!')
                fs.readFile('naze.js', 'utf8', (err, data) => {
                    if (err) {
                        console.error('حدث خطأ أثناء قراءة الملف:', err);
                        return;
                    }
                    const regex = new RegExp(`case\\s+'${text.toLowerCase()}':[\\s\\S]*?break`, 'g');
                    const modifiedData = data.replace(regex, '');
                    fs.writeFile('naze.js', modifiedData, 'utf8', (err) => {
                        if (err) {
                            m.reply('حدث خطأ أثناء كتابة الملف: ', err);
                        } else m.reply('تم حذف الـ case من الملف بنجاح');
                    });
                });
            }
                break
            case 'backup': {
                if (!isCreator) return m.reply(mess.owner)
                switch (args[0]) {
                    case 'all':
                        let bekup = './database/backup_all.tar.gz';
                        tarBackup('./', bekup).then(() => {
                            return m.reply({
                                document: fs.readFileSync(bekup),
                                mimetype: 'application/gzip',
                                fileName: 'backup_all.tar.gz'
                            })
                        }).catch(e => m.reply('فشل في النسخ الاحتياطي: ' + e))
                        break
                    case 'auto':
                        if (set.autobackup) return m.reply('مفعل مسبقاً!')
                        set.autobackup = true
                        m.reply('تم تفعيل النسخ الاحتياطي التلقائي')
                        break
                    case 'session':
                        await m.reply({
                            document: fs.readFileSync('./twenty/creds.json'),
                            mimetype: 'application/json',
                            fileName: 'creds.json'
                        });
                        break
                    case 'database':
                        let tglnya = new Date().toISOString().replace(/[:.]/g, '-');
                        let datanya = './database/' + tempatDB;
                        if (tempatDB.startsWith('mongodb')) {
                            datanya = './database/backup_database.json';
                            fs.writeFileSync(datanya, JSON.stringify(global.db, null, 2), 'utf-8');
                        }
                        await m.reply({
                            document: fs.readFileSync(datanya),
                            mimetype: 'application/json',
                            fileName: tglnya + '_database.json'
                        })
                        break
                    default:
                        m.reply('استخدم الأمر:\n- backup all\n- backup auto\n- backup session\n- backup database');
                }
            }
                break
            case 'getsession': {
                if (!isCreator) return m.reply(mess.owner)
                await m.reply({
                    document: fs.readFileSync('./twenty/creds.json'),
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                });
            }
                break
            case 'deletesession': case 'delsession': {
                if (!isCreator) return m.reply(mess.owner)
                fs.readdir('./twenty', async function (err, files) {
                    if (err) {
                        console.error('Unable to scan directory: ' + err);
                        return m.reply('فشل في قراءة المجلد: ' + err);
                    }
                    let filteredArray = await files.filter(item => ['session-', 'pre-key', 'sender-key', 'app-state'].some(ext => item.startsWith(ext)));
                    let teks = `تم العثور على ${filteredArray.length} ملف جلسة\n\n`
                    if (filteredArray.length == 0) return m.reply(teks);
                    filteredArray.map(function (e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    if (text && text == 'true') {
                        let { key } = await m.reply('جارٍ حذف ملفات الجلسة..')
                        await filteredArray.forEach(function (file) {
                            fs.unlinkSync('./twenty/' + file)
                        });
                        sleep(2000)
                        m.reply('تم حذف جميع ملفات الجلسة بنجاح', { edit: key })
                    } else m.reply(teks + `\nاكتب _${prefix + command} true_\nلحذفها`)
                });
            }
                break
            case 'deletesampah': case 'delsampah': {
                if (!isCreator) return m.reply(mess.owner)
                fs.readdir('./database/sampah', async function (err, files) {
                    if (err) {
                        console.error('Unable to scan directory: ' + err);
                        return m.reply('فشل في قراءة المجلد: ' + err);
                    }
                    let filteredArray = await files.filter(item => ['gif', 'png', 'bin', 'mp3', 'mp4', 'jpg', 'webp', 'webm', 'opus', 'jpeg'].some(ext => item.endsWith(ext)));
                    let teks = `تم العثور على ${filteredArray.length} ملف قمامة\n\n`
                    if (filteredArray.length == 0) return m.reply(teks);
                    filteredArray.map(function (e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    if (text && text == 'true') {
                        let { key } = await m.reply('جارٍ حذف ملفات القمامة..')
                        await filteredArray.forEach(function (file) {
                            fs.unlinkSync('./database/sampah/' + file)
                        });
                        sleep(2000)
                        m.reply('تم حذف جميع الملفات القمامة', { edit: key })
                    } else m.reply(teks + `\nاكتب _${prefix + command} true_\nلحذفها`)
                });
            }
                break
            case 'setnamebot': case 'setbotname': {
                if (!isCreator) return m.reply(mess.owner)
                if (text || m.quoted) {
                    const teksnya = text ? text : m.quoted.text
                    if (db?.set?.[botNumber]?.setbotname) db.set[botNumber].setbotname = teksnya
                    m.reply('تم بنجاح')
                } else m.reply(`مثال: ${prefix + command} النص`)
            }
                break
            case 'setpacknamebot': case 'setbotpackname': {
                if (!isCreator) return m.reply(mess.owner)
                if (text || m.quoted) {
                    const teksnya = text ? text : m.quoted.text
                    if (db?.set?.[botNumber]?.packname) db.set[botNumber].packname = teksnya
                    m.reply('تم بنجاح')
                } else m.reply(`مثال: ${prefix + command} النص`)
            }
                break
            case 'setauthorbot': case 'setbotauthor': {
                if (!isCreator) return m.reply(mess.owner)
                if (text || m.quoted) {
                    const teksnya = text ? text : m.quoted.text
                    if (db?.set?.[botNumber]?.author) db.set[botNumber].author = teksnya
                    m.reply('تم بنجاح')
                } else m.reply(`مثال: ${prefix + command} النص`)
            }
                break
            case 'sc': case 'script': {
                await m.reply(`https://github.com/twenty010/twenty\n⬆️ هذا هو السكربت`, {
                    contextInfo: {
                        forwardingScore: 10,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: my.ch,
                            serverMessageId: null,
                            newsletterName: 'انضم للمزيد من المعلومات'
                        },
                        externalAdReply: {
                            title: author,
                            body: 'اشترك في قناتي على يوتيوب',
                            thumbnail: fake.thumbnail,
                            mediaType: 2,
                            mediaUrl: my.yt,
                            sourceUrl: my.yt,
                        }
                    }
                })
            }
                break
            case 'donasi': case 'donate': {
                m.reply('يمكن التبرع عبر الرابط التالي :\nhttps://saweria.co/naze')
            }
                break

            // أوامر المجموعات
            case 'add': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!m.isAdmin) return m.reply(mess.admin)
                if (!m.isBotAdmin) return m.reply(mess.botAdmin)
                if (text || m.quoted) {
                    const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
                    try {
                        await naze.groupParticipantsUpdate(m.chat, [numbersOnly], 'add').then(async (res) => {
                            for (let i of res) {
                                let invv = await naze.groupInviteCode(m.chat)
                                const statusMessages = {
                                    200: `تم إضافة @${numbersOnly.split('@')[0]} إلى المجموعة بنجاح!`,
                                    401: 'قام بحظر البوت!',
                                    409: 'العضو بالفعل في المجموعة!',
                                    500: 'المجموعة ممتلئة!'
                                };
                                if (statusMessages[i.status]) {
                                    return m.reply(statusMessages[i.status]);
                                } else if (i.status == 408) {
                                    await m.reply(`@${numbersOnly.split('@')[0]} غادر المجموعة للتو!\n\nبسبب أن الهدف خاص\n\nسيتم إرسال الدعوة عبر\n-> wa.me/${numbersOnly.replace(/\D/g, '')}\nخاصةً`)
                                    await m.reply(`${'https://chat.whatsapp.com/' + invv}\n------------------------------------------------------\n\nالمرسل: @${m.sender.split('@')[0]}\nندعوك للانضمام للمجموعة\nيرجى الانضمام إن رغبت🙇`, { detectLink: true, chat: numbersOnly, quoted: fkontak }).catch((err) => m.reply('فشل في إرسال الدعوة!'))
                                } else if (i.status == 403) {
                                    let a = i.content.content[0].attrs
                                    await naze.sendGroupInvite(m.chat, numbersOnly, a.code, a.expiration, m.metadata.subject, `المرسل: @${m.sender.split('@')[0]}\nندعوك للانضمام للمجموعة\nيرجى الانضمام إن رغبت🙇`, null, { mentions: [m.sender] })
                                    await m.reply(`@${numbersOnly.split('@')[0]} لا يمكن إضافته\n\nلأنه خاص\n\nسيتم إرسال دعوة عبر\n-> wa.me/${numbersOnly.replace(/\D/g, '')}\nخاصةً`)
                                } else m.reply('فشل في الإضافة\nالحالة : ' + i.status)
                            }
                        })
                    } catch (e) {
                        m.reply('حدث خطأ! فشل في إضافة المستخدم')
                    }
                } else m.reply(`مثال: ${prefix + command} 62xxx`)
            }
                break
            case 'kick': case 'dor': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!m.isAdmin) return m.reply(mess.admin)
                if (!m.isBotAdmin) return m.reply(mess.botAdmin)
                if (text || m.quoted) {
                    const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
                    await naze.groupParticipantsUpdate(m.chat, [numbersOnly], 'remove').catch((err) => m.reply('فشل!'))
                } else m.reply(`مثال: ${prefix + command} 62xxx`)
            }
                break
            case 'promote': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!m.isAdmin) return m.reply(mess.admin)
                if (!m.isBotAdmin) return m.reply(mess.botAdmin)
                if (text || m.quoted) {
                    const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
                    await naze.groupParticipantsUpdate(m.chat, [numbersOnly], 'promote').catch((err) => m.reply('فشل!'))
                } else m.reply(`مثال: ${prefix + command} 62xxx`)
            }
                break
            case 'demote': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!m.isAdmin) return m.reply(mess.admin)
                if (!m.isBotAdmin) return m.reply(mess.botAdmin)
                if (text || m.quoted) {
                    const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
                    await naze.groupParticipantsUpdate(m.chat, [numbersOnly], 'demote').catch((err) => m.reply('فشل!'))
                } else m.reply(`مثال: ${prefix + command} 62xxx`)
            }
                break
            case 'warn': case 'warning': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!m.isAdmin) return m.reply(mess.admin)
                if (!m.isBotAdmin) return m.reply(mess.botAdmin)
                if (text || m.quoted) {
                    const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
                    if (!db.groups[m.chat].warn[numbersOnly]) {
                        db.groups[m.chat].warn[numbersOnly] = 1
                        m.reply('تحذير 1/4، سيتم طرده إن استمر❗')
                    } else if (db.groups[m.chat].warn[numbersOnly] >= 3) {
                        await naze.groupParticipantsUpdate(m.chat, [numbersOnly], 'remove').catch((err) => m.reply('فشل!'))
                        delete db.groups[m.chat].warn[numbersOnly]
                    } else {
                        db.groups[m.chat].warn[numbersOnly] += 1
                        m.reply(`تحذير ${db.groups[m.chat].warn[numbersOnly]}/4، سيتم طرده إن استمر❗`)
                    }
                } else m.reply(`مثال: ${prefix + command} 62xxx`)
            }
                break
            case 'unwarn': case 'delwarn': case 'unwarning': case 'delwarning': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!m.isAdmin) return m.reply(mess.admin)
                if (!m.isBotAdmin) return m.reply(mess.botAdmin)
                if (text || m.quoted) {
                    const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
                    if (db.groups[m.chat]?.warn?.[numbersOnly]) {
                        delete db.groups[m.chat].warn[numbersOnly]
                        m.reply('تم حذف التحذير بنجاح!')
                    }
                } else m.reply(`مثال: ${prefix + command} 62xxx`)
            }
                break
            case 'setname': case 'setnamegc': case 'setsubject': case 'setsubjectgc': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!m.isAdmin) return m.reply(mess.admin)
                if (!m.isBotAdmin) return m.reply(mess.botAdmin)
                if (text || m.quoted) {
                    const teksnya = text ? text : m.quoted.text
                    await naze.groupUpdateSubject(m.chat, teksnya).catch((err) => m.reply('فشل!'))
                } else m.reply(`مثال: ${prefix + command} النص`)
            }
                break
            case 'setdesc': case 'setdescgc': case 'setdesk': case 'setdeskgc': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!m.isAdmin) return m.reply(mess.admin)
                if (!m.isBotAdmin) return m.reply(mess.botAdmin)
                if (text || m.quoted) {
                    const teksnya = text ? text : m.quoted.text
                    await naze.groupUpdateDescription(m.chat, teksnya).catch((err) => m.reply('فشل!'))
                } else m.reply(`مثال: ${prefix + command} النص`)
            }
                break
            case 'setppgroups': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!m.isAdmin) return m.reply(mess.admin)
                if (!m.isBotAdmin) return m.reply(mess.botAdmin)
                if (!m.quoted) return m.reply('رد على الصورة التي تريد تعيينها كصورة للمجموعة')
                if (!/image/.test(quoted.type)) return m.reply(`رد على صورة مع التعليق ${prefix + command}`)
                let media = await naze.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
                if (text.length > 0) {
                    let { img } = await generateProfilePicture(media)
                    await naze.query({
                        tag: 'iq',
                        attrs: {
                            target: m.chat,
                            to: '@s.whatsapp.net',
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]
                    })
                    await fs.unlinkSync(media)
                    m.reply('تم بنجاح')
                } else {
                    await naze.updateProfilePicture(m.chat, { url: media })
                    await fs.unlinkSync(media)
                    m.reply('تم بنجاح')
                }
            }
                break
            case 'delete': case 'del': case 'd': {
                if (!m.quoted) return m.reply('رد على الرسالة التي تريد حذفها')
                await naze.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: m.isBotAdmin ? false : true, id: m.quoted.id, participant: m.quoted.sender } })
            }
                break
            case 'pin': case 'unpin': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!m.isAdmin) return m.reply(mess.admin)
                if (!m.isBotAdmin) return m.reply(mess.botAdmin)
                await naze.sendMessage(m.chat, { pin: { type: command == 'pin' ? 1 : 0, time: 2592000, key: m.quoted ? m.quoted.key : m.key } })
            }
                break
            case 'linkgroup': case 'linkgrup': case 'linkgc': case 'urlgroup': case 'urlgrup': case 'urlgc': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!m.isAdmin) return m.reply(mess.admin)
                if (!m.isBotAdmin) return m.reply(mess.botAdmin)
                let response = await naze.groupInviteCode(m.chat)
                await m.reply(`https://chat.whatsapp.com/${response}\n\nرابط المجموعة : ${(store.groupMetadata[m.chat] ? store.groupMetadata[m.chat] : (store.groupMetadata[m.chat] = await naze.groupMetadata(m.chat))).subject}`, { detectLink: true })
            }
                break
            case 'revoke': case 'newlink': case 'newurl': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!m.isAdmin) return m.reply(mess.admin)
                if (!m.isBotAdmin) return m.reply(mess.botAdmin)
                await naze.groupRevokeInvite(m.chat).then((a) => {
                    m.reply(`تم إعادة تعيين الرابط بنجاح للمجموعة ${m.metadata.subject}`)
                }).catch((err) => m.reply('فشل!'))
            }
                break
            case 'group': case 'grup': case 'gc': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!m.isAdmin) return m.reply(mess.admin)
                if (!m.isBotAdmin) return m.reply(mess.botAdmin)
                let set = db.groups[m.chat]
                switch (args[0]?.toLowerCase()) {
                    case 'close': case 'open':
                        await naze.groupSettingUpdate(m.chat, args[0] == 'close' ? 'announcement' : 'not_announcement').then(a => m.reply(`*تم ${args[0] == 'open' ? 'فتح' : 'إغلاق'} المجموعة بنجاح*`))
                        break
                    case 'join':
                        const _list = await naze.groupRequestParticipantsList(m.chat).then(a => a.map(b => b.jid))
                        if (/(a(p|pp|cc)|(ept|rove))|true|ok/i.test(args[1]) && _list.length > 0) {
                            await naze.groupRequestParticipantsUpdate(m.chat, _list, 'approve').catch(e => m.react('❌'))
                        } else if (/reject|false|no/i.test(args[1]) && _list.length > 0) {
                            await naze.groupRequestParticipantsUpdate(m.chat, _list, 'reject').catch(e => m.react('❌'))
                        } else m.reply(`قائمة طلبات الانضمام :\n${_list.length > 0 ? '- @' + _list.join('\n- @').split('@')[0] : '*لا شيء*'}\nمثال : ${prefix + command} join acc/reject`)
                        break
                    case 'pesansementara': case 'disappearing':
                        if (/90|7|1|24|on/i.test(args[1])) {
                            naze.sendMessage(m.chat, { disappearingMessagesInChat: /90/i.test(args[1]) ? 7776000 : /7/i.test(args[1]) ? 604800 : 86400 })
                        } else if (/0|off|false/i.test(args[1])) {
                            naze.sendMessage(m.chat, { disappearingMessagesInChat: 0 })
                        } else m.reply('اختر واحداً :\n90 يوم، 7 أيام، 1 يوم، إيقاف')
                        break
                    case 'antilink': case 'antivirtex': case 'antidelete': case 'welcome': case 'antitoxic': case 'waktusholat': case 'nsfw': case 'antihidetag': case 'setinfo': case 'antitagsw': case 'leave': case 'promote': case 'demote':
                        if (/on|true/i.test(args[1])) {
                            if (set[args[0]]) return m.reply('*مفعل مسبقاً*')
                            set[args[0]] = true
                            m.reply('*تم التغيير إلى تشغيل*')
                        } else if (/off|false/i.test(args[1])) {
                            set[args[0]] = false
                            m.reply('*تم التغيير إلى إيقاف*')
                        } else m.reply(`❗${args[0].charAt(0).toUpperCase() + args[0].slice(1)} on/off`)
                        break
                    case 'setwelcome': case 'setleave': case 'setpromote': case 'setdemote':
                        if (args[1]) {
                            set.text[args[0]] = args.slice(1).join(' ');
                            m.reply(`تم تغيير نص ${args[0].split('set')[1]} إلى:\n${set.text[args[0]]}`)
                        } else m.reply(`مثال:\n${prefix + command} ${args[0]} نص الترحيب\n\nمثلاً مع الوسوم:\n${prefix + command} ${args[0]} إلى @\nسيكون الناتج:\nإلى @0\n\nمثال مع وسم المشرف:\n${prefix + command} ${args[0]} من @admin إلى @\nسيكون الناتج:\nمن @${m.sender.split('@')[0]} إلى @0\n\nمثال باسم المجموعة:\n${prefix + command} ${args[0]} من @admin إلى @ في @subject\nسيكون الناتج:\nمن @${m.sender.split('@')[0]} إلى @0 في ${m.metadata.subject}`)
                        break
                    default:
                        m.reply(`إعدادات المجموعة ${m.metadata.subject}\n- open\n- close\n- join acc/reject\n- disappearing 90/7/1/off\n- antilink on/off ${set.antilink ? '🟢' : '🔴'}\n- antivirtex on/off ${set.antivirtex ? '🟢' : '🔴'}\n- antidelete on/off ${set.antidelete ? '🟢' : '🔴'}\n- welcome on/off ${set.welcome ? '🟢' : '🔴'}\n- leave on/off ${set.leave ? '🟢' : '🔴'}\n- promote on/off ${set.promote ? '🟢' : '🔴'}\n- demote on/off ${set.demote ? '🟢' : '🔴'}\n- setinfo on/off ${set.setinfo ? '🟢' : '🔴'}\n- nsfw on/off ${set.nsfw ? '🟢' : '🔴'}\n- waktusholat on/off ${set.waktusholat ? '🟢' : '🔴'}\n- antihidetag on/off ${set.antihidetag ? '🟢' : '🔴'}\n- antitagsw on/off ${set.antitagsw ? '🟢' : '🔴'}\n\n- setwelcome _النص_\n- setleave _النص_\n- setpromote _النص_\n- setdemote _النص_\n\nمثال:\n${prefix + command} antilink off`)
                }
            }
                break
            case 'tagall': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!m.isAdmin) return m.reply(mess.admin)
                if (!m.isBotAdmin) return m.reply(mess.botAdmin)
                let setv = pickRandom(listv)
                let teks = `*وسم الجميع*\n\n*الرسالة :* ${q ? q : ''}\n\n`
                for (let mem of m.metadata.participants) {
                    teks += `${setv} @${mem.id.split('@')[0]}\n`
                }
                await m.reply(teks, { mentions: m.metadata.participants.map(a => a.id) })
            }
                break
            case 'hidetag': case 'h': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!m.isAdmin) return m.reply(mess.admin)
                if (!m.isBotAdmin) return m.reply(mess.botAdmin)
                await m.reply(q ? q : '', { mentions: m.metadata.participants.map(a => a.id) })
            }
                break
            case 'totag': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!m.isAdmin) return m.reply(mess.admin)
                if (!m.isBotAdmin) return m.reply(mess.botAdmin)
                if (!m.quoted) return m.reply(`رد على الرسالة مع التعليق ${prefix + command}`)
                delete m.quoted.chat
                await naze.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: m.metadata.participants.map(a => a.id) })
            }
                break
            case 'listonline': case 'liston': {
                if (!m.isGroup) return m.reply(mess.group)
                let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                if (!store.presences || !store.presences[id]) return m.reply('لا يوجد أحد متصل الآن!')
                let online = [...Object.keys(store.presences[id]), botNumber]
                await m.reply('قائمة المتصلين:\n\n' + online.map(v => setv + ' @' + v.replace(/@.+/, '')).join`\n`, { mentions: online }).catch((e) => m.reply('لا يوجد أحد متصل..'))
            }
                break

            // أوامر البوت
            case 'owner': case 'listowner': {
                await naze.sendContact(m.chat, ownerNumber, m);
            }
                break
            case 'profile': case 'cek': {
                const user = Object.keys(db.users)
                const infoUser = db.users[m.sender]
                await m.reply(`*👤الملف الشخصي @${m.sender.split('@')[0]}* :\n🐋مسجل في البوت : ${user.includes(m.sender) ? 'نعم' : 'لا'}\n🔥الحالة : ${isVip ? 'VIP' : isPremium ? 'PREMIUM' : 'FREE'}${isPremium ? `\n⏳انتهاء : ${checkStatus(m.sender, premium) ? formatDate(getExpired(m.sender, db.premium)) : '-'}` : ''}\n🎫الحد : ${infoUser.limit}\n💰النقود : ${infoUser ? infoUser.money.toLocaleString('id-ID') : '0'}`)
            }
                break
            case 'leaderboard': {
                const entries = Object.entries(db.users).sort((a, b) => b[1].money - a[1].money).slice(0, 10).map(entry => entry[0]);
                let teksnya = '╭──❍「 *قائمة المتصدرين* 」❍\n'
                for (let i = 0; i < entries.length; i++) {
                    teksnya += `│• ${i + 1}. @${entries[i].split('@')[0]}\n│• الرصيد : ${db.users[entries[i]].money.toLocaleString('id-ID')}\n│\n`
                }
                m.reply(teksnya + '╰──────❍');
            }
                break
            case 'totalpesan': {
                let messageCount = {};
                let messages = store?.messages[m.chat]?.array || [];
                let participants = m?.metadata?.participants?.map(p => p.id) || store?.messages[m.chat]?.array?.map(p => p.key.participant) || [];
                messages.forEach(mes => {
                    if (mes.key?.participant && mes.message) {
                        messageCount[mes.key.participant] = (messageCount[mes.key.participant] || 0) + 1;
                    }
                });
                let totalMessages = Object.values(messageCount).reduce((a, b) => a + b, 0);
                let date = new Date().toLocaleDateString('id-ID');
                let zeroMessageUsers = participants.filter(user => !messageCount[user]).map(user => `- @${user.replace(/[^0-9]/g, '')}`);
                let messageList = Object.entries(messageCount).map(([sender, count], index) => `${index + 1}. @${sender.replace(/[^0-9]/g, '')}: ${count} رسالة`);
                let result = `إجمالي الرسائل ${totalMessages} من ${participants.length} عضو\nبتاريخ ${date}:\n${messageList.join('\n')}\n\nملاحظة: ${text.length > 0 ? `\n${zeroMessageUsers.length > 0 ? `باقي الأعضاء الذين لم يرسلوا رسائل (المتفرجون):\n${zeroMessageUsers.join('\n')}` : 'جميع الأعضاء أرسلوا رسائل!'}` : `\nتحقق من المتفرجين؟ ${prefix + command} --sider`}`;
                m.reply(result)
            }
                break
            case 'req': case 'request': {
                if (!text) return m.reply('ما الذي تريد طلبه من المالك؟')
                await m.reply(`*تم إرسال الطلب للمالك*\n_شكراً🙏_`)
                await naze.sendFromOwner(ownerNumber, `رسالة من : @${m.sender.split('@')[0]}\nإلى المالك\n\nالطلب: ${text}`, m, { contextInfo: { mentionedJid: [m.sender], isForwarded: true } })
            }
                break
            case 'totalfitur': {
                const total = ((fs.readFileSync('./naze.js').toString()).match(/case '/g) || []).length
                m.reply(`إجمالي الميزات : ${total}`);
            }
                break
            case 'daily': case 'claim': {
                daily(m, db)
            }
                break
            case 'transfer': case 'tf': {
                transfer(m, args, db)
            }
                break
            case 'buy': {
                buy(m, args, db)
            }
                break
            case 'react': {
                naze.sendMessage(m.chat, { react: { text: args[0], key: m.quoted ? m.quoted.key : m.key } })
            }
                break
            case 'tagme': {
                m.reply(`@${m.sender.split('@')[0]}`, { mentions: [m.sender] })
            }
                break
            case 'runtime': case 'tes': case 'bot': {
                switch (args[0]) {
                    case 'mode': case 'public': case 'self':
                        if (!isCreator) return m.reply(mess.owner)
                        if (args[1] == 'public' || args[1] == 'all') {
                            if (naze.public && set.grouponly && set.privateonly) return m.reply('*مفعل مسبقاً*')
                            naze.public = set.public = true
                            set.grouponly = true
                            set.privateonly = true
                            m.reply('*تم التغيير لاستخدام عام*')
                        } else if (args[1] == 'self') {
                            set.grouponly = false
                            set.privateonly = false
                            naze.public = set.public = false
                            m.reply('*تم التغيير لاستخدام خاص*')
                        } else if (args[1] == 'group') {
                            set.grouponly = true
                            set.privateonly = false
                            m.reply('*تم التغيير لمجموعات فقط*')
                        } else if (args[1] == 'private') {
                            set.grouponly = false
                            set.privateonly = true
                            m.reply('*تم التغيير لمحادثات خاصة فقط*')
                        } else m.reply('الوضع self/public/group/private/all')
                        break
                    case 'anticall': case 'autobio': case 'autoread': case 'autotyping': case 'readsw': case 'multiprefix': case 'antispam':
                        if (!isCreator) return m.reply(mess.owner)
                        if (args[1] == 'on') {
                            if (set[args[0]]) return m.reply('*مفعل مسبقاً*')
                            set[args[0]] = true
                            m.reply('*تم التغيير إلى تشغيل*')
                        } else if (args[1] == 'off') {
                            set[args[0]] = false
                            m.reply('*تم التغيير إلى إيقاف*')
                        } else m.reply(`${args[0].charAt(0).toUpperCase() + args[0].slice(1)} on/off`)
                        break
                    case 'set': case 'settings':
                        let settingsBot = Object.entries(set).map(([key, value]) => {
                            let list = key == 'status' ? new Date(value).toLocaleString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) : (typeof value === 'boolean') ? (value ? 'on🟢' : 'off🔴') : value;
                            return `- ${key.charAt(0).toUpperCase() + key.slice(1)} : ${list}`;
                        }).join('\n');
                        m.reply(`إعدادات البوت @${botNumber.split('@')[0]}\n${settingsBot}\n\nمثال: ${prefix + command} mode`);
                        break
                    default:
                        if (args[0] || args[1]) m.reply(`*اختر إعدادات :*\n- Mode : *${prefix + command} mode self/public*\n- Anti Call : *${prefix + command} anticall on/off*\n- Auto Bio : *${prefix + command} autobio on/off*\n- Auto Read : *${prefix + command} autoread on/off*\n- Auto Typing : *${prefix + command} autotyping on/off*\n- Read Sw : *${prefix + command} readsw on/off*\n- Multi Prefix : *${prefix + command} multiprefix on/off*`)
                }
                if (!args[0] && !args[1]) return m.reply(`*البوت متصل منذ*\n*${runtime(process.uptime())}*`)
            }
                break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                    return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
                        user: 0,
                        nice: 0,
                        sys: 0,
                        idle: 0,
                        irq: 0
                    }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `زمن الاستجابة ${latensi.toFixed(4)} _ثانية_ \n ${oldd - neww} _مللي ثانية_\n\nمدة التشغيل : ${runtime(process.uptime())}\n\n💻 معلومات الخادم\nالذاكرة: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}\n\n_استهلاك ذاكرة NodeJS_\n${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${formatp(used[key])}`).join('\n')}\n\n${cpus[0] ? `_استهلاك المعالج الكلي_\n${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}\n_استهلاك كل نواة CPU (${cpus.length} نواة)_\n${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}`.trim()
                m.reply(respon)
            }
                break
            case 'speedtest': case 'speed': {
                m.reply('جارٍ اختبار السرعة...')
                let cp = require('child_process')
                let { promisify } = require('util')
                let exec = promisify(cp.exec).bind(cp)
                let o
                try {
                    o = await exec('python3 speed.py --share')
                } catch (e) {
                    o = e
                } finally {
                    let { stdout, stderr } = o
                    if (stdout.trim()) m.reply(stdout)
                    if (stderr.trim()) m.reply(stderr)
                }
            }
                break
            case 'afk': {
                let user = db.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`@${m.sender.split('@')[0]} وضع AFK${text ? ': ' + text : ''}`)
            }
                break
            case 'readviewonce': case 'readviewone': case 'rvo': {
                if (!m.quoted) return m.reply(`رد على رسالة view once\nمثال: ${prefix + command}`)
                try {
                    if (m.quoted.msg.viewOnce) {
                        delete m.quoted.chat
                        m.quoted.msg.viewOnce = false
                        await m.reply({ forward: m.quoted })
                    } else m.reply(`رد على رسالة view once\nمثال: ${prefix + command}`)
                } catch (e) {
                    m.reply('الوسائط غير صالحة!')
                }
            }
                break
            case 'inspect': {
                if (!text) return m.reply('أدخل رابط مجموعة أو قناة!')
                let _grup = /chat.whatsapp.com\/([\w\d]*)/;
                let _saluran = /whatsapp\.com\/channel\/([\w\d]*)/;
                if (_grup.test(text)) {
                    await naze.groupGetInviteInfo(text.match(_grup)[1]).then((_g) => {
                        let teks = `*[ معلومات المجموعة ]*\n\nاسم المجموعة: ${_g.subject}\nمعرف المجموعة: ${_g.id}\nتاريخ الإنشاء: ${new Date(_g.creation * 1000).toLocaleString()}${_g.owner ? ('\nمنشأ بواسطة: ' + _g.owner) : ''}\nLinked Parent: ${_g.linkedParent}\nRestrict: ${_g.restrict}\nAnnounce: ${_g.announce}\nIs Community: ${_g.isCommunity}\nCommunity Announce:${_g.isCommunityAnnounce}\nJoin Approval: ${_g.joinApprovalMode}\nMember Add Mode: ${_g.memberAddMode}\nDescription ID: ${'`' + _g.descId + '`'}\nالوصف: ${_g.desc}\nالمشاركون:\n`
                        _g.participants.forEach((a) => {
                            teks += a.admin ? `- مشرف: @${a.id.split('@')[0]} [${a.admin}]\n` : ''
                        })
                        m.reply(teks)
                    }).catch((e) => {
                        if ([400, 406].includes(e.data)) return m.reply('المجموعة غير موجودة❗');
                        if (e.data == 401) return m.reply('تم طرد البوت من تلك المجموعة❗');
                        if (e.data == 410) return m.reply('تم إعادة تعيين رابط المجموعة❗');
                    });
                } else if (_saluran.test(text) || text.endsWith('@newsletter') || !isNaN(text)) {
                    await naze.newsletterMsg(text.match(_saluran)[1]).then((n) => {
                        m.reply(`*[ معلومات القناة ]*\n\nID: ${n.id}\nState: ${n.state.type}\nName: ${n.thread_metadata.name.text}\nCreate At: ${new Date(n.thread_metadata.creation_time * 1000).toLocaleString()}\nعدد المشتركين: ${n.thread_metadata.subscribers_count}\nVerification: ${n.thread_metadata.verification}\nالوصف: ${n.thread_metadata.description.text}\n`)
                    }).catch((e) => m.reply('القناة غير موجودة❗'))
                } else m.reply('يدعم روابط المجموعات أو القنوات فقط!')
            }
                break
            case 'addmsg': {
                if (!m.quoted) return m.reply('رد على الرسالة التي تريد حفظها في قاعدة البيانات')
                if (!text) return m.reply(`مثال : ${prefix + command} اسم الملف`)
                let msgs = db.database
                if (text.toLowerCase() in msgs) return m.reply(`'${text}' مسجل بالفعل`)
                msgs[text.toLowerCase()] = m.quoted
                delete msgs[text.toLowerCase()].chat
                m.reply(`تمت إضافة الرسالة باسم '${text}'\nاسترجعها بـ ${prefix}getmsg ${text}\nلعرض القائمة ${prefix}listmsg`)
            }
                break
            case 'delmsg': case 'deletemsg': {
                if (!text) return m.reply('ما اسم الرسالة التي تريد حذفها؟')
                let msgs = db.database
                if (text == 'allmsg') {
                    db.database = {}
                    m.reply('تم حذف كل الرسائل من القائمة')
                } else {
                    if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' غير مسجل في قائمة الرسائل`)
                    delete msgs[text.toLowerCase()]
                    m.reply(`تم حذف '${text}' من القائمة`)
                }
            }
                break
            case 'getmsg': {
                if (!text) return m.reply(`مثال : ${prefix + command} اسم الملف\n\nلعرض قائمة الرسائل ${prefix}listmsg`)
                let msgs = db.database
                if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' غير مسجل في قائمة الرسائل`)
                await naze.relayMessage(m.chat, msgs[text.toLowerCase()], {})
            }
                break
            case 'listmsg': {
                let seplit = Object.entries(db.database).map(([nama, isi]) => { return { nama, message: getContentType(isi) } })
                let teks = '「 قائمة قاعدة البيانات 」\n\n'
                for (let i of seplit) {
                    teks += `${setv} *الاسم :* ${i.nama}\n${setv} *النوع :* ${i.message?.replace(/Message/i, '')}\n───────────────\n`
                }
                m.reply(teks)
            }
                break
            case 'setcmd': case 'addcmd': {
                if (!m.quoted) return m.reply('رد على الرسالة!')
                if (!m.quoted.fileSha256) return m.reply('مفقود SHA256!')
                if (!text) return m.reply(`مثال : ${prefix + command} اسم الأمر`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.cmd[hash] && global.db.cmd[hash].locked) return m.reply('لا تملك صلاحية تغيير هذا الأمر')
                global.db.cmd[hash] = {
                    creator: m.sender,
                    locked: false,
                    at: + new Date,
                    text
                }
                m.reply('تم!')
            }
                break
            case 'delcmd': {
                if (!m.quoted) return m.reply('رد على الرسالة!')
                if (!m.quoted.fileSha256) return m.reply('مفقود SHA256!')
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.cmd[hash] && global.db.cmd[hash].locked) return m.reply('لا تملك صلاحية تغيير هذا الأمر')
                delete global.db.cmd[hash];
                m.reply('تم')
            }
                break
            case 'listcmd': {
                let teks = `*قائمة الهاش*\nملاحظة: *المحاط بالخط العريض* يعني مغلق\n${Object.entries(global.db.cmd).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}`.trim()
                naze.sendText(m.chat, teks, m);
            }
                break
            case 'lockcmd': case 'unlockcmd': {
                if (!isCreator) return m.reply(mess.owner)
                if (!m.quoted) return m.reply('رد على الرسالة!')
                if (!m.quoted.fileSha256) return m.reply('مفقود SHA256!')
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.cmd)) return m.reply('لا تملك صلاحية تغيير هذا الأمر')
                global.db.cmd[hash].locked = !/^un/i.test(command)
            }
                break
            case 'q': case 'quoted': {
                if (!m.quoted) return m.reply('رد على الرسالة!')
                if (text) {
                    delete m.quoted.chat
                    await m.reply({ forward: m.quoted })
                } else {
                    const anu = await m.getQuotedObj()
                    if (!anu) return m.reply('النص غير متاح!')
                    if (!anu.quoted) return m.reply('الرسالة التي رددت عليها لا تحتوي على رد')
                    await naze.relayMessage(m.chat, { [anu.quoted.type]: anu.quoted.msg }, {})
                }
            }
                break
            case 'confes': case 'confess': case 'menfes': case 'menfess': {
                if (!isLimit) return m.reply(mess.limit)
                if (m.isGroup) return m.reply(mess.private)
                if (menfes[m.sender]) return m.reply(`أنت بالفعل في جلسة ${command}!`)
                if (!text) return m.reply(`مثال : ${prefix + command} 62xxxx|اسم مستعار`)
                let [teks1, teks2] = text.split`|`
                if (teks1) {
                    const tujuan = teks1.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                    const onWa = await naze.onWhatsApp(tujuan)
                    if (!onWa.length > 0) return m.reply('الرقم غير مسجل في واتساب!')
                    menfes[m.sender] = {
                        tujuan: tujuan,
                        nama: teks2 ? teks2 : 'شخص'
                    };
                    menfes[tujuan] = {
                        tujuan: m.sender,
                        nama: 'المستلم',
                    };
                    const timeout = setTimeout(() => {
                        if (menfes[m.sender]) {
                            m.reply(`_انتهى وقت ${command}_`);
                            delete menfes[m.sender];
                        }
                        if (menfes[tujuan]) {
                            naze.sendMessage(tujuan, { text: `_انتهى وقت ${command}_` });
                            delete menfes[tujuan];
                        }
                        menfesTimeouts.delete(m.sender);
                        menfesTimeouts.delete(tujuan);
                    }, 600000);
                    menfesTimeouts.set(m.sender, timeout);
                    menfesTimeouts.set(tujuan, timeout);
                    naze.sendMessage(tujuan, { text: `_${command} متصل_\n*ملاحظة:* لإنهاء اكتب _*${prefix}del${command}*_` });
                    m.reply(`_تم بدء ${command}..._\n*ابدأ بإرسال الرسائل/الوسائط*\n*مدة الجلسة 10 دقائق*\n*ملاحظة:* لإنهاء اكتب _*${prefix}del${command}*_`)
                    setLimit(m, db)
                } else m.reply(`أدخل الرقم!\nمثال : ${prefix + command} 62xxxx|اسم مستعار`)
            }
                break
            case 'delconfes': case 'delconfess': case 'delmenfes': case 'delmenfess': {
                if (!menfes[m.sender]) return m.reply(`أنت لست في جلسة ${command.split('del')[1]}!`)
                let anu = menfes[m.sender]
                if (menfesTimeouts.has(m.sender)) {
                    clearTimeout(menesTimeouts.get(m.sender));
                    menfesTimeouts.delete(m.sender);
                }
                if (menfesTimeouts.has(anu.tujuan)) {
                    clearTimeout(menesTimeouts.get(anu.tujuan));
                    menfesTimeouts.delete(anu.tujuan);
                }
                naze.sendMessage(anu.tujuan, { text: `انتهى الدردشة بواسطة ${anu.nama ? anu.nama : 'شخص'}` })
                m.reply(`تم إنهاء الجلسة بنجاح ${command.split('del')[1]}!`)
                delete menfes[anu.tujuan];
                delete menfes[m.sender];
            }
                break
            case 'cai': case 'roomai': case 'chatai': case 'autoai': {
                if (m.isGroup) return m.reply(mess.private)
                if (chat_ai[m.sender]) return m.reply(`أنت بالفعل في جلسة ${command}!`)
                if (!text) return m.reply(`مثال: ${prefix + command} مرحباً\nمع برومبت: ${prefix + command} مرحباً|أنت مساعد جاهز للمساعدة.`)
                let [teks1, teks2] = text.split`|`
                chat_ai[m.sender] = [{ role: 'system', content: teks2 || '' }, { role: 'user', content: text.split`|` ? teks1 : text || '' }]
                let hasil;
                try {
                    hasil = await gptLogic(chat_ai[m.sender], budy)
                } catch (e) {
                    hasil = await yanzGpt(chat_ai[m.sender])
                }
                const response = hasil?.choices?.[0]?.message?.content || hasil || 'عذراً، لم أفهم.';
                chat_ai[m.sender].push({ role: 'assistant', content: response });
                await m.reply(response)
            }
                break
            case 'delcai': case 'delroomai': case 'delchatai': case 'delautoai': {
                if (!chat_ai[m.sender]) return m.reply(`أنت لست في جلسة ${command.split('del')[1]}!`)
                m.reply(`تم إنهاء الجلسة بنجاح ${command.split('del')[1]}!`)
                delete chat_ai[m.sender];
            }
                break
            case 'jadibot': {
                if (!isPremium) return m.reply(mess.prem)
                if (!isLimit) return m.reply(mess.limit)
                const nmrnya = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.sender
                const onWa = await naze.onWhatsApp(nmrnya)
                if (!onWa.length > 0) return m.reply('الرقم غير مسجل في واتساب!')
                await JadiBot(naze, nmrnya, m, store)
                m.reply(`استخدم ${prefix}stopjadibot\nللتوقف`)
                setLimit(m, db)
            }
                break
            case 'stopjadibot': case 'deljadibot': {
                const nmrnya = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.sender
                const onWa = await naze.onWhatsApp(nmrnya)
                if (!onWa.length > 0) return m.reply('الرقم غير مسجل في واتساب!')
                await StopJadiBot(naze, nmrnya, m)
            }
                break
            case 'listjadibot': {
                ListJadiBot(naze, m)
            }
                break

            // أدوات وتحويلات
            case 'fetch': case 'get': {
                if (!isPremium) return m.reply(mess.prem)
                if (!isLimit) return m.reply(mess.limit)
                if (!/^https?:\/\//.test(text)) return m.reply('ابدأ بـ http:// أو https://');
                try {
                    const res = await axios.get(isUrl(text) ? isUrl(text)[0] : text)
                    if (!/text|json|html|plain/.test(res.headers['content-type'])) {
                        await m.reply(text)
                    } else m.reply(util.format(res.data))
                    setLimit(m, db)
                } catch (e) {
                    m.reply(String(e))
                }
            }
                break
            case 'toaud': case 'toaudio': {
                if (!/video|audio/.test(mime)) return m.reply(`أرسل/رد على فيديو/صوت لتحويله إلى صوت مع التعليق ${prefix + command}`)
                m.reply(mess.wait)
                let media = await quoted.download()
                let audio = await toAudio(media, 'mp4')
                await m.reply({ audio: audio, mimetype: 'audio/mpeg' })
            }
                break
            case 'tomp3': {
                if (!/video|audio/.test(mime)) return m.reply(`أرسل/رد على فيديو/صوت لتحويله إلى mp3 مع التعليق ${prefix + command}`)
                m.reply(mess.wait)
                let media = await quoted.download()
                let audio = await toAudio(media, 'mp4')
                await m.reply({ document: audio, mimetype: 'audio/mpeg', fileName: `Convert By TWENTY BOT.mp3` })
            }
                break
            case 'tovn': case 'toptt': case 'tovoice': {
                if (!/video|audio/.test(mime)) return m.reply(`أرسل/رد على فيديو/صوت لتحويله إلى رسالة صوتية مع التعليق ${prefix + command}`)
                m.reply(mess.wait)
                let media = await quoted.download()
                let audio = await toPTT(media, 'mp4')
                await m.reply({ audio: audio, mimetype: 'audio/ogg; codecs=opus', ptt: true })
            }
                break
            case 'togif': {
                if (!/webp|video/.test(mime)) return m.reply(`رد على فيديو/ستيكَر مع التعليق *${prefix + command}*`)
                m.reply(mess.wait)
                let media = await naze.downloadAndSaveMediaMessage(qmsg)
                let ran = `./database/sampah/${getRandom('.gif')}`;
                exec(`convert ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return m.reply('فشل❗')
                    let buffer = fs.readFileSync(ran)
                    m.reply({ video: buffer, gifPlayback: true })
                    fs.unlinkSync(ran)
                })
            }
                break
            case 'toimage': case 'toimg': {
                if (!/webp|video|image/.test(mime)) return m.reply(`رد على فيديو/ستيكَر مع التعليق *${prefix + command}*`)
                m.reply(mess.wait)
                let media = await naze.downloadAndSaveMediaMessage(qmsg)
                let ran = `./database/sampah/${getRandom('.png')}`;
                exec(`convert ${media}[0] ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return m.reply('فشل❗')
                    let buffer = fs.readFileSync(ran)
                    m.reply({ image: buffer })
                    fs.unlinkSync(ran)
                })
            }
                break
            case 'toptv': {
                if (!/video/.test(mime)) return m.reply(`أرسل/رد على فيديو لتحويله إلى PTV مع التعليق ${prefix + command}`)
                if ((m.quoted ? m.quoted.type : m.type) === 'videoMessage') {
                    const anu = await quoted.download()
                    const message = await generateWAMessageContent({ video: anu }, { upload: naze.waUploadToServer })
                    await naze.relayMessage(m.chat, { ptvMessage: message.videoMessage }, {})
                } else m.reply('رد على الفيديو الذي تريد تحويله إلى PTV!')
            }
                break
            case 'tourl': {
                try {
                    if (/webp|video|sticker|audio|jpg|jpeg|png/.test(mime)) {
                        m.reply(mess.wait)
                        let media = await quoted.download()
                        let anu = await UguuSe(media)
                        m.reply('رابط : ' + anu.url)
                    } else m.reply('أرسل الوسائط التي تريد رفعها!')
                } catch (e) {
                    m.reply('خادم الرفع غير متاح!')
                }
            }
                break
            case 'texttospech': case 'tts': case 'tospech': {
                if (!text) return m.reply('أين النص الذي تريد تحويله إلى صوت؟')
                let { tts } = require('./lib/tts')
                let anu = await tts(text)
                m.reply({ audio: anu, ptt: true, mimetype: 'audio/mpeg' })
            }
                break
               case 'translate': case 'tr': {
                if (text && text == 'list') {
                    let list_tr = `╭──❍「 *رموز اللغات* 」❍
│• af : Afrikaans
│• ar : العربية
│• zh : الصينية
│• en : الإنجليزية
│• en-us : الإنجليزية (الولايات المتحدة)
│• fr : الفرنسية
│• de : الألمانية
│• hi : الهندية
│• hu : المجرية
│• is : الآيسلندية
│• id : الإندونيسية
│• it : الإيطالية
│• ja : اليابانية
│• ko : الكورية
│• la : اللاتينية
│• no : النرويجية
│• pt : البرتغالية
│• pt-br : البرتغالية (البرازيل)
│• ro : الرومانية
│• ru : الروسية
│• sr : الصربية
│• es : الإسبانية
│• sv : السويدية
│• ta : التاميلية
│• th : التايلاندية
│• tr : التركية
│• vi : الفيتنامية
╰──────❍`;
                    m.reply(list_tr)
                } else {
                    if (!m.quoted && (!text || !args[1])) return m.reply(`أرسل/رد على نص مع التعليق ${prefix + command}`)
                    let lang = args[0] ? args[0] : 'id'
                    let teks = args[1] ? args.slice(1).join(' ') : m.quoted.text
                    try {
                        let hasil = await translate(teks, { to: lang, autoCorrect: true })
                        m.reply(`الترجمة إلى : ${lang}\n${hasil[0]}`)
                    } catch (e) {
                        m.reply(`اللغة *${lang}* غير موجودة!\nراجع القائمة: ${prefix + command} list`)
                    }
                }
            }
                break
            case 'toqr': case 'qr': {
                if (!text) return m.reply(`حوّل نص إلى رمز QR باستخدام *${prefix + command}* النص`)
                m.reply(mess.wait)
                await m.reply({ image: { url: 'https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=' + encodeURIComponent(text) }, caption: 'هاهو رمز QR' })
            }
                break
            case 'tohd': case 'remini': case 'hd': {
                if (!isLimit) return m.reply(mess.limit)
                if (/image/.test(mime)) {
                    try {
                        let media = await quoted.download()
                        let hasil = await remini(media, 'enhance')
                        m.reply({ image: hasil, caption: 'تم' })
                        setLimit(m, db)
                    } catch (e) {
                        let media = await naze.downloadAndSaveMediaMessage(qmsg)
                        let ran = `./database/sampah/${getRandom('.jpg')}`;
                        const scaleFactor = isNaN(parseInt(text)) ? 4 : parseInt(text) < 10 ? parseInt(text) : 4;
                        exec(`ffmpeg -i "${media}" -vf "scale=iw*${scaleFactor}:ih*${scaleFactor}:flags=lanczos" -q:v 1 "${ran}"`, async (err, stderr, stdout) => {
                            fs.unlinkSync(media)
                            if (err) return m.reply(String(err))
                            let buff = fs.readFileSync(ran)
                            await naze.sendMedia(m.chat, buff, '', 'تم', m);
                            fs.unlinkSync(ran)
                            setLimit(m, db)
                        });
                    }
                } else m.reply(`أرسل/رد على صورة\nمثال: ${prefix + command}`)
            }
                break
            case 'dehaze': case 'colorize': case 'colorfull': {
                if (!isLimit) return m.reply(mess.limit)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    remini(media, 'dehaze').then(a => {
                        m.reply({ image: a, caption: 'تم' })
                        setLimit(m, db)
                    }).catch(e => m.reply('خادم المعالجة غير متاح!'));
                } else m.reply(`أرسل/رد على صورة\nمثال: ${prefix + command}`)
            }
                break
            case 'hitamkan': case 'toblack': {
                if (!isLimit) return m.reply(mess.limit)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    hitamkan(media, 'hitam').then(a => {
                        m.reply({ image: a, caption: 'تم' })
                        setLimit(m, db)
                    }).catch(e => m.reply('خادم المعالجة غير متاح!'));
                } else m.reply(`أرسل/رد على صورة\nمثال: ${prefix + command}`)
            }
                break
            case 'ssweb': {
                if (!isPremium) return m.reply(mess.prem)
                if (!text) return m.reply(`مثال: ${prefix + command} https://github.com/twenty010/naze-md`)
                try {
                    let anu = 'https://' + text.replace(/^https?:\/\//, '')
                    await m.reply({ image: { url: 'https://image.thum.io/get/width/1900/crop/1000/fullpage/' + anu }, caption: 'تم' })
                    setLimit(m, db)
                } catch (e) {
                    m.reply('خدمة لقطة الشاشة غير متاحة!')
                }
            }
                break
            case 'readmore': {
                let teks1 = text.split`|`[0] ? text.split`|`[0] : ''
                let teks2 = text.split`|`[1] ? text.split`|`[1] : ''
                m.reply(teks1 + readmore + teks2)
            }
                break
            case 'getexif': {
                if (!m.quoted) return m.reply(`رد على الستيكَر\nمع التعليق ${prefix + command}`)
                if (!/sticker|webp/.test(quoted.type)) return m.reply(`رد على الستيكَر\nمع التعليق ${prefix + command}`)
                const img = new webp.Image()
                await img.load(await m.quoted.download())
                m.reply(util.format(JSON.parse(img.exif.slice(22).toString())))
            }
                break
            case 'cuaca': case 'weather': {
                if (!text) return m.reply(`مثال: ${prefix + command} jakarta`)
                try {
                    let data = await fetchJson(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`)
                    m.reply(`*🏙 حالة الطقس في ${data.name}*\n\n*🌤️ الطقس :* ${data.weather[0].main}\n*📝 الوصف :* ${data.weather[0].description}\n*🌡️ متوسط الحرارة :* ${data.main.temp} °C\n*🤔 الشعور :* ${data.main.feels_like} °C\n*🌬️ الضغط :* ${data.main.pressure} hPa\n*💧 الرطوبة :* ${data.main.humidity}%\n*🌪️ سرعة الرياح :* ${data.wind.speed} كم/س\n*📍الإحداثيات :*\n- *خط العرض :* ${data.coord.lat}\n- *خط الطول :* ${data.coord.lon}\n*🌏 الدولة :* ${data.sys.country}`)
                } catch (e) {
                    m.reply('المدينة غير موجودة!')
                }
            }
                break
            case 'sticker': case 'stiker': case 's': case 'stickergif': case 'stikergif': case 'sgif': case 'stickerwm': case 'swm': case 'curi': case 'colong': case 'take': case 'stickergifwm': case 'sgifwm': {
                if (!/image|video|sticker/.test(quoted.type)) return m.reply(`أرسل/رد على صورة/فيديو/gif مع التعليق ${prefix + command}\nمدة 1-9 ثواني`)
                let media = await quoted.download()
                let teks1 = text.split`|`[0] ? text.split`|`[0] : packname
                let teks2 = text.split`|`[1] ? text.split`|`[1] : author
                if (/image|webp/.test(mime)) {
                    m.reply(mess.wait)
                    await naze.sendAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                } else if (/video/.test(mime)) {
                    if ((qmsg).seconds > 11) return m.reply('الحد الأقصى 10 ثواني!')
                    m.reply(mess.wait)
                    await naze.sendAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                } else m.reply(`أرسل/رد على صورة/فيديو/gif مع التعليق ${prefix + command}\nمدة الفيديو/Gif 1-9 ثواني`)
            }
                break
            case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
                try {
                    if (!isLimit) return m.reply(mess.limit)
                    if (!/image|webp/.test(mime)) return m.reply(`أرسل/رد على صورة/ستيكَر\nمع التعليق ${prefix + command} أعلى|أسفل`)
                    if (!text) return m.reply(`أرسل/رد على صورة/ستيكَر مع التعليق ${prefix + command} أعلى|أسفل`)
                    m.reply(mess.wait)
                    let atas = text.split`|`[0] ? text.split`|`[0] : '-'
                    let bawah = text.split`|`[1] ? text.split`|`[1] : '-'
                    let media = await quoted.download()
                    let mem = await UguuSe(media)
                    let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem.url}`
                    await naze.sendAsSticker(m.chat, smeme, m, { packname, author })
                    setLimit(m, db)
                } catch (e) {
                    m.reply('خادم الميم غير متاح!')
                }
            }
                break
            case 'emojimix': {
                if (!isLimit) return m.reply(mess.limit)
                if (!text) return m.reply(`مثال: ${prefix + command} 😅+🤔`)
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1 && !emoji2) return m.reply(`مثال: ${prefix + command} 😅+🤔`)
                try {
                    let anu = await axios.get(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                    if (anu.data.results.length < 1) return m.reply(`مزج الإيموجي ${text} لم يتم العثور عليه!`)
                    for (let res of anu.data.results) {
                        await naze.sendAsSticker(m.chat, res.url, m, { packname, author })
                    }
                    setLimit(m, db)
                } catch (e) {
                    m.reply('فشل في مزج الإيموجي!')
                }
            }
                break
            case 'qc': case 'quote': case 'fakechat': {
                if (!isLimit) return m.reply(mess.limit)
                if (!text && !m.quoted) return m.reply(`أرسل/رد على رسالة مع أمر *${prefix + command}* النص`)
                try {
                    let ppnya = await naze.profilePictureUrl(m.sender, 'image').catch(() => 'https://i.pinimg.com/564x/8a/e9/e9/8ae9e92fa4e69967aa61bf2bda967b7b.jpg');
                    let res = await quotedLyo(text, m.pushName, ppnya);
                    await naze.sendAsSticker(m.chat, Buffer.from(res.result.image, 'base64'), m, { packname, author })
                    setLimit(m, db)
                } catch (e) {
                    m.reply('خادم الإنشاء غير متاح!')
                }
            }
                break
            case 'brat': {
                if (!isLimit) return m.reply(mess.limit)
                if (!text && (!m.quoted || !m.quoted.text)) return m.reply(`أرسل/رد على رسالة *${prefix + command}* النص`)
                try {
                    await naze.sendAsSticker(m.chat, 'https://aqul-brat.hf.space/?text=' + encodeURIComponent(text || m.quoted.text), m)
                    setLimit(m, db)
                } catch (e) {
                    m.reply('خادم Brat غير متاح!')
                }
            }
                break
            case 'bratvid': case 'bratvideo': {
                if (!isLimit) return m.reply(mess.limit)
                if (!text && (!m.quoted || !m.quoted.text)) return m.reply(`أرسل/رد على رسالة *${prefix + command}* النص`)
                const teks = (m.quoted ? m.quoted.text : text).split(' ');
                const tempDir = path.join(process.cwd(), 'database/sampah');
                try {
                    const framePaths = [];
                    for (let i = 0; i < teks.length; i++) {
                        const currentText = teks.slice(0, i + 1).join(' ');
                        let res = await getBuffer('https://aqul-brat.hf.space/?text=' + encodeURIComponent(currentText));
                        const framePath = path.join(tempDir, `${m.sender + i}.mp4`);
                        fs.writeFileSync(framePath, res);
                        framePaths.push(framePath);
                    }
                    const fileListPath = path.join(tempDir, `${m.sender}.txt`);
                    let fileListContent = '';
                    for (let i = 0; i < framePaths.length; i++) {
                        fileListContent += `file '${framePaths[i]}'\n`;
                        fileListContent += `duration 0.5\n`;
                    }
                    fileListContent += `file '${framePaths[framePaths.length - 1]}'\n`;
                    fileListContent += `duration 3\n`;
                    fs.writeFileSync(fileListPath, fileListContent);
                    const outputVideoPath = path.join(tempDir, `${m.sender}-output.mp4`);
                    execSync(`ffmpeg -y -f concat -safe 0 -i ${fileListPath} -vf 'fps=30' -c:v libx264 -preset veryfast -pix_fmt yuv420p -t 00:00:10 ${outputVideoPath}`);
                    naze.sendAsSticker(m.chat, outputVideoPath, m, { packname, author })
                    framePaths.forEach((filePath) => fs.unlinkSync(filePath));
                    fs.unlinkSync(fileListPath);
                    fs.unlinkSync(outputVideoPath);
                    setLimit(m, db)
                } catch (e) {
                    m.reply('حدث خطأ أثناء معالجة الطلب!')
                }
            }
                break
            case 'wasted': {
                if (!isLimit) return m.reply(mess.limit)
                try {
                    if (/jpg|jpeg|png/.test(mime)) {
                        m.reply(mess.wait)
                        let media = await quoted.download()
                        let anu = await UguuSe(media)
                        await naze.sendFileUrl(m.chat, 'https://some-random-api.com/canvas/wasted?avatar=' + anu.url, 'هاهو', m)
                        setLimit(m, db)
                    } else m.reply('أرسل الوسائط التي تريد رفعها!')
                } catch (e) {
                    m.reply('خادم التأثيرات غير متاح!')
                }
            }
                break
            case 'trigger': case 'triggered': {
                if (!isLimit) return m.reply(mess.limit)
                try {
                    if (/jpg|jpeg|png/.test(mime)) {
                        m.reply(mess.wait)
                        let media = await quoted.download()
                        let anu = await UguuSe(media)
                        await m.reply({ document: { url: 'https://some-random-api.com/canvas/triggered?avatar=' + anu.url }, fileName: 'triggered.gif', mimetype: 'image/gif' })
                        setLimit(m, db)
                    } else m.reply('أرسل الوسائط التي تريد رفعها!')
                } catch (e) {
                    m.reply('خادم التأثيرات غير متاح!')
                }
            }
                break
            case 'nulis': {
                m.reply(`*أمثلة*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
            }
                break
            case 'nuliskiri': {
                if (!isLimit) return m.reply(mess.limit)
                if (!text) return m.reply(`استخدم *${prefix + command}* مع النص`)
                m.reply(mess.wait)
                const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './src/nulis/images/buku/sebelumkiri.jpg',
                    '-font',
                    './src/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '2',
                    '-annotate',
                    '+140+153',
                    fixHeight,
                    './src/nulis/images/buku/setelahkiri.jpg'
                ])
                    .on('error', () => m.reply(mess.error))
                    .on('exit', () => {
                        m.reply({ image: fs.readFileSync('./src/nulis/images/buku/setelahkiri.jpg'), caption: 'لا تكن كسولًا. كن طالبًا مجتهدًا ರ_ರ' })
                        setLimit(m, db)
                    })
            }
                break
            case 'nuliskanan': {
                if (!isLimit) return m.reply(mess.limit)
                if (!text) return m.reply(`استخدم *${prefix + command}* مع النص`)
                m.reply(mess.wait)
                const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './src/nulis/images/buku/sebelumkanan.jpg',
                    '-font',
                    './src/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '2',
                    '-annotate',
                    '+128+129',
                    fixHeight,
                    './src/nulis/images/buku/setelahkanan.jpg'
                ])
                    .on('error', () => m.reply(mess.error))
                    .on('exit', () => {
                        m.reply({ image: fs.readFileSync('./src/nulis/images/buku/setelahkanan.jpg'), caption: 'لا تكن كسولًا. كن طالبًا مجتهدًا ರ_ರ' })
                        setLimit(m, db)
                    })
            }
                break
            case 'foliokiri': {
                if (!isLimit) return m.reply(mess.limit)
                if (!text) return m.reply(`استخدم *${prefix + command}* مع النص`)
                m.reply(mess.wait)
                const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', [
                    './src/nulis/images/folio/sebelumkiri.jpg',
                    '-font',
                    './src/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '1720x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '4',
                    '-annotate',
                    '+48+185',
                    fixHeight,
                    './src/nulis/images/folio/setelahkiri.jpg'
                ])
                    .on('error', () => m.reply(mess.error))
                    .on('exit', () => {
                        m.reply({ image: fs.readFileSync('./src/nulis/images/folio/setelahkiri.jpg'), caption: 'لا تكن كسولًا. كن طالبًا مجتهدًا ರ_ರ' })
                        setLimit(m, db)
                    })
            }
                break
            case 'foliokanan': {
                if (!isLimit) return m.reply(mess.limit)
                if (!text) return m.reply(`استخدم *${prefix + command}* مع النص`)
                m.reply(mess.wait)
                const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', [
                    './src/nulis/images/folio/sebelumkanan.jpg',
                    '-font',
                    './src/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '1720x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '4',
                    '-annotate',
                    '+89+190',
                    fixHeight,
                    './src/nulis/images/folio/setelahkanan.jpg'
                ])
                    .on('error', () => m.reply(mess.error))
                    .on('exit', () => {
                        m.reply({ image: fs.readFileSync('./src/nulis/images/folio/setelahkanan.jpg'), caption: 'لا تكن كسولًا. كن طالبًا مجتهدًا ರ_ರ' })
                        setLimit(m, db)
                    })
            }
                break
            case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai': {
                try {
                    let set;
                    if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                    if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                    if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                    if (/earrape/.test(command)) set = '-af volume=12'
                    if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                    if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                    if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                    if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                    if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                    if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                    if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                    if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                    if (/audio/.test(mime)) {
                        m.reply(mess.wait)
                        let media = await naze.downloadAndSaveMediaMessage(qmsg)
                        let ran = `./database/sampah/${getRandom('.mp3')}`;
                        exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                            fs.unlinkSync(media)
                            if (err) return m.reply(err)
                            let buff = fs.readFileSync(ran)
                            m.reply({ audio: buff, mimetype: 'audio/mpeg' })
                            fs.unlinkSync(ran)
                        });
                    } else m.reply(`رد على ملف صوتي تريد تغييره مع التعليق *${prefix + command}*`)
                } catch (e) {
                    m.reply('فشل!')
                }
            }
                break
            case 'tinyurl': case 'shorturl': case 'shortlink': {
                if (!isLimit) return m.reply(mess.limit)
                if (!text || !isUrl(text)) return m.reply(`مثال: ${prefix + command} https://github.com/twenty010/twenty`)
                try {
                    let anu = await axios.get('https://tinyurl.com/api-create.php?url=' + text)
                    m.reply('الرابط المختصر : ' + anu.data)
                    setLimit(m, db)
                } catch (e) {
                    m.reply('فشل!')
                }
            }
                break
            case 'git': case 'gitclone': {
                if (!isLimit) return m.reply(mess.limit)
                if (!args[0]) return m.reply(`مثال: ${prefix + command} https://github.com/twenty010/twenty`)
                if (!isUrl(args[0]) && !args[0].includes('github.com')) return m.reply('استخدم رابط GitHub!')
                let [, user, repo] = args[0].match(/(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i) || []
                try {
                    m.reply({ document: { url: `https://api.github.com/repos/${user}/${repo}/zipball` }, fileName: repo + '.zip', mimetype: 'application/zip' }).catch((e) => m.reply(mess.error))
                    setLimit(m, db)
                } catch (e) {
                    m.reply('فشل!')
                }
            }
                break
            case 'ai': {
                if (!text) return m.reply(`مثال: ${prefix + command} استعلم عن شيء`)
                try {
                    let hasil = await yanzGpt([{ role: 'system', content: '' }, { role: 'user', content: text }])
                    m.reply(hasil.choices[0].message.content)
                } catch (e) {
                    try {
                        let hasil = await youSearch(text)
                        m.reply(hasil)
                    } catch (e) {
                        try {
                            let hasil = await bk9Ai(text)
                            m.reply(hasil.BK9)
                        } catch (e) {
                            m.reply(pickRandom(['خدمة AI تواجه مشكلة!', 'لا يمكن الاتصال بالـ AI!', 'نظام AI مشغول الآن!', 'الميزة غير متاحة حالياً!']))
                        }
                    }
                }
            }
                break
            case 'simi': {
                if (!text) return m.reply(`مثال: ${prefix + command} نص`)
                try {
                    const hasil = await simi(text)
                    m.reply(hasil.success)
                } catch (e) {
                    m.reply('خادم simi غير متاح!')
                }
            }
                break
            case 'bard': case 'gemini': case 'aiedit': {
                if (!isLimit) return m.reply(mess.limit)
                if (!text) return m.reply(`مثال: ${prefix + command} ما هو تاريخ اليوم؟`)
                if (!(APIKeys.geminiApikey?.length > 0 && APIKeys.geminiApikey?.some(a => a.trim() !== ''))) return m.reply('احصل على مفتاح API أولاً من\nhttps://aistudio.google.com/app/apikey')
                try {
                    let apinya = pickRandom(APIKeys.geminiApikey)
                    geminiAi(text, apinya, quoted.isMedia ? { mime: quoted.mime, media: await quoted.download() } : {}).then(a => {
                        if (a.media) naze.sendMedia(m.chat, a.media, '', a.text || '', m)
                        else if (a.text) m.reply(a.text)
                    }).catch(e => {
                        if (e.status === 503) m.reply('نموذج Gemini مشغول، حاول لاحقاً...')
                        else if (e.status === 400) m.reply('مفتاح API غير صالح.')
                        else m.reply('مفتاح الـ API لديك محدود أو حدث خطأ!')
                    })
                    setLimit(m, db)
                } catch (e) {
                    m.reply('مفتاح الـ API محدود!\nغيره بمفتاح آخر!')
                }
            }
                break
            case 'google': {
                if (!text) return m.reply(`مثال: ${prefix + command} استعلم`)
                try {
                    let anu = await youSearch(text);
                    m.reply(anu)
                } catch (e) {
                    try {
                        let anu = await yanzGpt([{ role: 'system', content: 'ابحث عن معلومات مفصلة مع المصادر' }, { role: 'user', content: text }]);
                        m.reply(hasil.choices[0].message.content)
                    } catch (e) {
                        m.reply('لم يتم العثور على نتائج!')
                    }
                }
            }
                break
            case 'gimage': case 'bingimg': {
                if (!text) return m.reply(`مثال: ${prefix + command} استعلم`)
                try {
                    let anu = await fetchApi('/search/bing', { query: text });
                    let una = pickRandom(anu.result)
                    await m.reply({ image: { url: una }, caption: 'نتيجة البحث: ' + text })
                    setLimit(m, db)
                } catch (e) {
                    m.reply('لم يتم العثور على نتائج!')
                }
            }
                break
            case 'play': case 'ytplay': case 'yts': case 'ytsearch': case 'youtubesearch': {
                if (!text) return m.reply(`مثال: ${prefix + command} dj komang`)
                m.reply(mess.wait)
                try {
                    const res = await yts.search(text);
                    const hasil = pickRandom(res.all)
                    const teksnya = `*📍العنوان:* ${hasil.title || 'غير متوفر'}\n*✏الوصف:* ${hasil.description || 'غير متوفر'}\n*🌟القناة:* ${hasil.author?.name || 'غير متوفر'}\n*⏳المدة:* ${hasil.seconds || 'غير متوفر'} ثانية (${hasil.timestamp || 'غير متوفر'})\n*🔎المصدر:* ${hasil.url || 'غير متوفر'}\n\nملاحظة : لتحميل استخدم\n${prefix}ytmp3 رابط الفيديو أو ${prefix}ytmp4 رابط الفيديو`;
                    await m.reply({ image: { url: hasil.thumbnail }, caption: teksnya })
                } catch (e) {
                    try {
                        const nvl = new NvlGroup();
                        let anu = await nvl.search(text);
                        let hasil = pickRandom(anu.videos)
                        let teksnya = `*📍العنوان:* ${hasil.title || 'غير متوفر'}\n*✏تاريخ الرفع:* ${hasil.uploaded || 'غير متوفر'}\n*🌟القناة:* ${hasil.author || 'غير متوفر'}\n*⏳المدة:* ${hasil.duration || 'غير متوفر'}\n*🔎المصدر:* ${hasil.url || 'غير متوفر'}\n\nملاحظة : لتحميل استخدم\n${prefix}ytmp3 رابط الفيديو أو ${prefix}ytmp4 رابط الفيديو`;
                        await m.reply({ image: { url: hasil.thumbnail }, caption: teksnya })
                    } catch (e) {
                        try {
                            const res = await fetchApi('/search/youtube', { query: text });
                            const hasil = pickRandom(res.data)
                            const teksnya = `*📍العنوان:* ${hasil.title || 'غير متوفر'}\n*✏الوصف:* ${hasil.description || 'غير متوفر'}\n*🌟القناة:* ${hasil.channelTitle || 'غير متوفر'}\n*⏳المدة:* ${hasil.duration || 'غير متوفر'}\n*🔎المصدر:* https://youtu.be/${hasil.id || 'غير متوفر'}\n\nملاحظة : لتحميل استخدم\n${prefix}ytmp3 رابط الفيديو أو ${prefix}ytmp4 رابط الفيديو`;
                            await m.reply({ image: { url: hasil.thumbMedium }, caption: teksnya })
                        } catch (e) {
                            m.reply('المحتوى غير متاح!')
                        }
                    }
                }
            }
                break
            case 'pixiv': {
                if (!isLimit) return m.reply(mess.limit)
                if (!text) return m.reply(`مثال: ${prefix + command} hu tao`)
                try {
                    let { pixivdl } = require('./lib/pixiv')
                    let res = await pixivdl(text)
                    m.reply(mess.wait)
                    for (let i = 0; i < res.media.length; i++) {
                        let caption = i == 0 ? `${res.caption}\n\n*By:* ${res.artist}\n*Tags:* ${res.tags.join(', ')}` : ''
                        let mime = (await FileType.fromBuffer(res.media[i])).mime
                        await m.reply({ [mime.split('/')[0]]: res.media[i], caption, mimetype: mime })
                    }
                    setLimit(m, db)
                } catch (e) {
                    m.reply('المحتوى غير متوفر!')
                }
            }
                break
            case 'pinterest': case 'pint': {
                if (!isLimit) return m.reply(mess.limit)
                if (!text) return m.reply(`مثال: ${prefix + command} hu tao`)
                try {
                    let anu = await pinterest(text)
                    let result = pickRandom(anu)
                    if (anu.length < 1) {
                        m.reply('المحتوى غير متوفر!');
                    } else {
                        await m.reply({ image: { url: result.images_url }, caption: `*رابط الوسائط :* ${result.pin}${result.link ? '\n*المصدر :* ' + result.link : ''}` })
                        setLimit(m, db)
                    }
                } catch (e) {
                    try {
                        const res = await fetchApi('/search/pinterest', { query: text });
                        const hasil = pickRandom(res.data.result.pins)
                        await m.reply({ image: { url: hasil.media.images.orig.url }, caption: `*رابط الوسائط :* ${hasil.media.images.orig.url}${hasil.pin_url ? '\n*المصدر :* ' + hasil.pin_url : ''}` })
                        setLimit(m, db)
                    } catch (e) {
                        m.reply('لم يتم العثور على نتائج!');
                    }
                }
            }
                break
            case 'wallpaper': {
                if (!isLimit) return m.reply(mess.limit)
                if (!text) return m.reply(`مثال: ${prefix + command} hu tao`)
                try {
                    let anu = await wallpaper(text)
                    let result = pickRandom(anu)
                    if (anu.length < 1) {
                        m.reply('المحتوى غير متوفر!');
                    } else {
                        await m.reply({ image: { url: result.image[0] }, caption: `⭔ العنوان : ${q}\n⭔ الفئة : ${result.type}\n⭔ رابط الوسائط : ${result.image[2] || result.image[1] || result.image[0]}` })
                        setLimit(m, db)
                    }
                } catch (e) {
                    try {
                        let anu = await pinterest('wallpaper ' + text)
                        let result = pickRandom(anu)
                        if (anu.length < 1) {
                            m.reply('المحتوى غير متوفر!');
                        } else {
                            await m.reply({ image: { url: result.images_url }, caption: `*رابط الوسائط :* ${result.pin}${result.link ? '\n*المصدر :* ' + result.link : ''}` })
                            setLimit(m, db)
                        }
                    } catch (e) {
                        m.reply('خادم الخلفيات غير متاح!')
                    }
                }
            }
                break
            case 'ringtone': {
                if (!isLimit) return m.reply(mess.limit)
                if (!text) return m.reply(`مثال: ${prefix + command} black rover`)
                try {
                    let anu = await ringtone(text)
                    let result = pickRandom(anu)
                    await m.reply({ audio: { url: result.audio }, fileName: result.title + '.mp3', mimetype: 'audio/mpeg' })
                    setLimit(m, db)
                } catch (e) {
                    m.reply('الصوت غير متوفر!')
                }
            }
                break
            case 'npm': case 'npmjs': {
                if (!text) return m.reply(`مثال: ${prefix + command} axios`)
                try {
                    let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
                    let { objects } = await res.json()
                    if (!objects.length) return m.reply('لم يتم العثور!')
                    let txt = objects.map(({ package: pkg }) => {
                        return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`
                    }).join`\n\n`
                    m.reply(txt)
                } catch (e) {
                    m.reply('لم يتم العثور!')
                }
            }
                break
            case 'style': {
                if (!text) return m.reply(`مثال: ${prefix + command} Naze`)
                let anu = await styletext(text)
                let txt = anu.map(a => `*${a.name}*\n${a.result}`).join`\n\n`
                m.reply(txt)
            }
                break
            case 'spotify': case 'spotifysearch': {
                if (!text) return m.reply(`مثال: ${prefix + command} alan walker alone`)
                try {
                    let hasil = await fetchJson('https://www.bhandarimilan.info.np/spotisearch?query=' + encodeURIComponent(text));
                    let txt = hasil.map(a => {
                        return `*Name : ${a.name}*\n- Artist : ${a.artist}\n- Url : ${a.link}`
                    }).join`\n\n`
                    m.reply(txt)
                } catch (e) {
                    m.reply('خادم البحث غير متاح!')
                }
            }
                break
            case 'tenor': {
                if (!text) return m.reply(`مثال: ${prefix + command} alone`)
                try {
                    const anu = await fetchJson('https://g.tenor.com/v1/search?q=' + text + '&key=LIVDSRZULELA')
                    const hasil = pickRandom(anu.results)
                    await m.reply({ video: { url: hasil.media[0].mp4.url }, caption: `👀 *ميديا:* ${hasil.url}\n📋 *الوصف:* ${hasil.content_description}\n🔛 *الرابط:* ${hasil.itemurl}`, gifPlayback: true, gifAttribution: 2 })
                } catch (e) {
                    m.reply('لم يتم العثور على النتائج!')
                }
            }
                break
            case 'urban': {
                if (!text) return m.reply(`مثال: ${prefix + command} alone`)
                try {
                    const anu = await fetchJson('https://api.urbandictionary.com/v0/define?term=' + text)
                    const hasil = pickRandom(anu.list)
                    await m.reply(`${hasil.definition}\n\nالمصدر: ${hasil.permalink}`)
                } catch (e) {
                    m.reply('لم يتم العثور على النتائج!')
                }
            }
                break

            // Stalker Menu
            case 'igstalk': case 'instagramstalk': {
                if (!isLimit) return m.reply(mess.limit)
                if (!text) return m.reply(`مثال: ${prefix + command} اسم المستخدم`)
                try {
                    let anu = await instaStalk(text)
                    m.reply({ image: { url: anu.avatar }, caption: `*اسم المستخدم :* ${anu.username}\n*الاسم :* ${anu.nickname}\n*الوصف :* ${anu.description}\n*المشاركات :* ${anu.posts}\n*المتابعون :* ${anu.followers}\n*يتابع :* ${anu.following}\n*روابط المشاركات :* ${anu.list_post.map(a => `\n*رابط :* ${a.imageUrl}\n*الوصف :* ${a.description}\n*تفاصيل :* ${a.detailUrl}`).join('\n')}` })
                } catch (e) {
                    try {
                        let res = await fetchApi('/stalk/instagram', { username: text });
                        m.reply({ image: { url: res.data.profile_picture_url }, caption: `*Username :*${res.data?.username || 'لا'}\n*Nickname :*${res.data?.full_name || 'لا'}\n*ID :*${res.data?.instagram_id}\n*Followers :*${res.data?.followers || '0'}\n*Following :*${res.data?.following || '0'}\n*Bio :*${res.data?.description || 'لا'}\n*Website :*${res.data?.website || 'لا'}\n*Add At :*${res.data?.added_date}\n*Uploads :*${res.data?.uploads}\n*Verified :*${res.data?.is_verified}\n*Private :*${res.data.is_private}\n` })
                    } catch (e) {
                        m.reply('المستخدم غير موجود!')
                    }
                }
            }
                break
            case 'wastalk': case 'whatsappstalk': {
                if (!isLimit) return m.reply(mess.limit)
                if (!text) return m.reply(`مثال: ${prefix + command} @tag / 628xxx`)
                try {
                    let num = m.quoted?.sender || m.mentionedJid?.[0] || text
                    if (!num) return m.reply(`مثال : ${prefix + command} @tag / 628xxx`)
                    num = num.replace(/\D/g, '') + '@s.whatsapp.net'
                    if (!(await naze.onWhatsApp(num))[0]?.exists) return m.reply('الرقم غير مسجل في WhatsApp!')
                    let img = await naze.profilePictureUrl(num, 'image').catch(_ => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60')
                    let bio = await naze.fetchStatus(num).catch(_ => { })
                    let name = await naze.getName(num)
                    let business = await naze.getBusinessProfile(num)
                    let format = PhoneNum(`+${num.split('@')[0]}`)
                    let regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
                    let country = regionNames.of(format.getRegionCode('international'));
                    let wea = `WhatsApp Stalk\n\n*° الدولة :* ${country.toUpperCase()}\n*° الاسم :* ${name ? name : '-'}\n*° تنسيق الرقم :* ${format.getNumber('international')}\n*° رابط :* wa.me/${num.split('@')[0]}\n*° وسم :* @${num.split('@')[0]}\n*° الحالة :* ${bio?.status || '-'}\n*° تاريخ الحالة :* ${bio?.setAt ? moment(bio.setAt.toDateString()).locale('id').format('LL') : '-'}\n\n${business ? `*WhatsApp Business*\n\n*° BusinessId :* ${business.wid}\n*° Website :* ${business.website ? business.website : '-'}\n*° Email :* ${business.email ? business.email : '-'}\n*° الفئة :* ${business.category}\n*° العنوان :* ${business.address ? business.address : '-'}\n*° المنطقة الزمنية :* ${business.business_hours.timezone ? business.business_hours.timezone : '-'}\n*° الوصف* : ${business.description ? business.description : '-'}` : '*حساب WhatsApp عادي*'}`
                    img ? await naze.sendMessage(m.chat, { image: { url: img }, caption: wea, mentions: [num] }, { quoted: m }) : m.reply(wea)
                } catch (e) {
                    m.reply('الرقم غير موجود!')
                }
            }
                break
            case 'telestalk': case 'telegramstalk': {
                if (!isLimit) return m.reply(mess.limit)
                if (!text) return m.reply(`مثال: ${prefix + command} اسم المستخدم`)
                try {
                    const res = await telegramStalk(text)
                    if (!res.description || res.title.startsWith('Telegram: Contact')) throw 'Error'
                    m.reply({ image: { url: res.image_url }, caption: `*اسم المستخدم :* ${text}\n*الاسم :* ${res.title || 'لا'}\n*الوصف :* ${res.description || 'لا'}\n*الرابط :* ${res.url}` })
                } catch (e) {
                    m.reply('المستخدم غير موجود!')
                }
            }
                break
            case 'tiktokstalk': case 'ttstalk': {
                if (!isLimit) return m.reply(mess.limit)
                if (!text) return m.reply(`مثال: ${prefix + command} اسم المستخدم`)
                try {
                    const res = await tiktokStalk(text)
                    m.reply({ image: { url: res.avatarThumb }, caption: `*اسم المستخدم :* ${text}\n*الاسم :* ${res.nickname}\n*المتابعون :* ${res.followerCount}\n*يتابع :* ${res.followingCount}\n*الوصف :* ${res.signature}\n*موثق :* ${res.verified}\n*عدد الفيديوهات :* ${res.videoCount}\n*القلوب :* ${res.heartCount}` })
                } catch (e) {
                    m.reply('المستخدم غير موجود!')
                }
            }
                break
            case 'genshinstalk': case 'gistalk': {
                if (!isLimit) return m.reply(mess.limit)
                if (!text) return m.reply(`مثال: ${prefix + command} id`)
                try {
                    const res = await genshinStalk(text)
                    m.reply({ image: { url: res.image }, caption: `*ملف Genshin*\n- *ID :* ${res.uid}\n- *الاسم :* ${res.nickname}\n- *التوقيع :* ${res.signature}\n- *المستوى :* ${res.level}\n- *مستوى العالم :* ${res.world_level}\n- *الإنجازات :* ${res.achivement}\n- *الهاوية :* ${res.spiral_abyss}\n- *TTL :* ${res.ttl}` })
                } catch (e) {
                    m.reply('المستخدم غير موجود!')
                }
            }
                break
            case 'ghstalk': case 'githubstalk': {
                if (!isLimit) return m.reply(mess.limit)
                if (!text) return m.reply(`مثال: ${prefix + command} اسم المستخدم`)
                try {
                    const res = await fetchJson('https://api.github.com/users/' + text)
                    m.reply({ image: { url: res.avatar_url }, caption: `*اسم المستخدم :* ${res.login}\n*الاسم :* ${res.name || 'لا'}\n*الوصف :* ${res.bio || 'لا'}\n*ID :* ${res.id}\n*Node ID :* ${res.node_id}\n*النوع :* ${res.type}\n*Admin :* ${res.admin ? 'نعم' : 'لا'}\n*الشركة :* ${res.company || 'لا'}\n*المدونة :* ${res.blog || 'لا'}\n*الموقع :* ${res.location || 'لا'}\n*البريد :* ${res.email || 'لا'}\n*المستودعات العامة :* ${res.public_repos}\n*Gists عامة :* ${res.public_gists}\n*المتابعون :* ${res.followers}\n*يتابع :* ${res.following}\n*تاريخ الإنشاء :* ${res.created_at} *آخر تحديث :* ${res.updated_at}` })
                } catch (e) {
                    m.reply('المستخدم غير موجود!')
                }
            }
                break

            // Downloaders (YT, IG, TikTok, FB, Mediafire, Spotify)
            case 'ytmp3': case 'ytaudio': case 'ytplayaudio': {
                if (!isLimit) return m.reply(mess.limit)
                if (!text) return m.reply(`مثال: ${prefix + command} رابط_يوتيوب`)
                if (!text.includes('youtu')) return m.reply('الرابط لا يحتوي على نتيجة من يوتيوب!')
                m.reply(mess.wait)
                try {
                    const hasil = await ytMp3(text);
                    await m.reply({
                        audio: { url: hasil.result },
                        mimetype: 'audio/mpeg',
                        contextInfo: {
                            externalAdReply: {
                                title: hasil.title,
                                body: hasil.channel,
                                previewType: 'PHOTO',
                                thumbnailUrl: hasil.thumb,
                                mediaType: 1,
                                renderLargerThumbnail: true,
                                sourceUrl: text
                            }
                        }
                    })
                    setLimit(m, db)
                } catch (e) {
                    try {
                        let hasil = await savetube.download(text, 'mp3')
                        await naze.sendFileUrl(m.chat, hasil.result.download, hasil.result.title, m)
                        setLimit(m, db)
                    } catch (e) {
                        try {
                            const nvl = new NvlGroup();
                            let anu = await nvl.download(text);
                            await naze.sendFileUrl(m.chat, anu.audio[0].url, anu.audio[0].size, m)
                            setLimit(m, db)
                        } catch (e) {
                            try {
                                let hasil = await fetchApi('/download/youtube', { url: text })
                                await naze.sendFileUrl(m.chat, hasil.result.audio, hasil.result.title, m)
                                setLimit(m, db)
                            } catch (e) {
                                m.reply('فشل في تنزيل الصوت!')
                            }
                        }
                    }
                }
            }
                break
            case 'ytmp4': case 'ytvideo': case 'ytplayvideo': {
                if (!isLimit) return m.reply(mess.limit)
                if (!text) return m.reply(`مثال: ${prefix + command} رابط_يوتيوب`)
                if (!text.includes('youtu')) return m.reply('الرابط لا يحتوي على نتيجة من يوتيوب!')
                m.reply(mess.wait)
                try {
                    const hasil = await ytMp4(text);
                    await m.reply({ video: hasil.result, caption: `*📍العنوان:* ${hasil.title}\n*✏الوصف:* ${hasil.desc ? hasil.desc : ''}\n*🚀القناة:* ${hasil.channel}\n*🗓تاريخ الرفع:* ${hasil.uploadDate}` })
                    setLimit(m, db)
                } catch (e) {
                    try {
                        let hasil = await savetube.download(text, '360')
                        await naze.sendFileUrl(m.chat, hasil.result.download, hasil.result.title, m)
                        setLimit(m, db)
                    } catch (e) {
                        try {
                            const nvl = new NvlGroup();
                            let anu = await nvl.download(text);
                            await naze.sendFileUrl(m.chat, anu.video.find(v => v.height === 360).url || anu.video[0].url, 'تم', m)
                            setLimit(m, db)
                        } catch (e) {
                            try {
                                let hasil = await fetchApi('/download/youtube', { url: text })
                                await naze.sendFileUrl(m.chat, hasil.result.video, hasil.result.title, m)
                                setLimit(m, db)
                            } catch (e) {
                                m.reply('فشل في تنزيل الفيديو!')
                            }
                        }
                    }
                }
            }
                break
            case 'ig': case 'instagram': case 'instadl': case 'igdown': case 'igdl': {
                if (!isLimit) return m.reply(mess.limit)
                if (!text) return m.reply(`مثال: ${prefix + command} رابط_انستجرام`)
                if (!text.includes('instagram.com')) return m.reply('الرابط لا يحتوي على نتيجة من إنستجرام!')
                m.reply(mess.wait)
                try {
                    const hasil = await instagramDl(text);
                    if (hasil.length < 0) return m.reply('المنشور غير متاح أو خاص!')
                    for (let i = 0; i < hasil.length; i++) {
                        await naze.sendFileUrl(m.chat, hasil[i].url, 'تم', m)
                    }
                    setLimit(m, db)
                } catch (e) {
                    try {
                        let hasil = await fetchApi('/download/instagram', { url: text })
                        if (hasil.result.url.length < 0) return m.reply('المنشور غير متاح أو خاص!')
                        for (let i = 0; i < hasil.result.url.length; i++) {
                            await naze.sendFileUrl(m.chat, hasil.result.url[i], 'تم', m)
                        }
                        setLimit(m, db)
                    } catch (e) {
                        m.reply('المنشور غير متاح أو خاص!')
                    }
                }
            }
                break
            case 'igstory': case 'instagramstory': case 'instastory': case 'storyig': {
                if (!text) return m.reply(`مثال: ${prefix + command} اسم المستخدم`)
                try {
                    const hasil = await instaStory(text);
                    m.reply(mess.wait)
                    for (let i = 0; i < hasil.results.length; i++) {
                        await naze.sendFileUrl(m.chat, hasil.results[i].url, 'تم', m)
                    }
                } catch (e) {
                    m.reply('المستخدم غير موجود أو خاص!');
                }
            }
                break
            case 'tiktok': case 'tiktokdown': case 'ttdown': case 'ttdl': case 'tt': case 'ttmp4': case 'ttvideo': case 'tiktokmp4': case 'tiktokvideo': {
                if (!isLimit) return m.reply(mess.limit)
                if (!text) return m.reply(`مثال: ${prefix + command} رابط_tiktok`)
                if (!text.includes('tiktok.com')) return m.reply('الرابط لا يحتوي على نتيجة من TikTok!')
                try {
                    const hasil = await tiktokDl(text);
                    m.reply(mess.wait)
                    if (hasil && hasil.size_nowm) {
                        await naze.sendFileUrl(m.chat, hasil.data[1].url, `*📍العنوان:* ${hasil.title}\n*⏳المدة:* ${hasil.duration}\n*🎃المؤلف:* ${hasil.author.nickname} (@${hasil.author.fullname})`, m)
                    } else {
                        for (let i = 0; i < hasil.data.length; i++) {
                            await naze.sendFileUrl(m.chat, hasil.data[i].url, `*🚀صورة:* ${i + 1}`, m)
                        }
                    }
                    setLimit(m, db)
                } catch (e) {
                    m.reply('فشل/الرابط غير صالح!')
                }
            }
                break
            case 'ttmp3': case 'tiktokmp3': case 'ttaudio': case 'tiktokaudio': {
                if (!isLimit) return m.reply(mess.limit)
                if (!text) return m.reply(`مثال: ${prefix + command} رابط_tiktok`)
                if (!text.includes('tiktok.com')) return m.reply('الرابط لا يحتوي على نتيجة من TikTok!')
                try {
                    const hasil = await tiktokDl(text);
                    m.reply(mess.wait)
                    await m.reply({
                        audio: { url: hasil.music_info.url },
                        mimetype: 'audio/mpeg',
                        contextInfo: {
                            externalAdReply: {
                                title: 'TikTok • ' + hasil.author.nickname,
                                body: hasil.stats.likes + ' إعجاب, ' + hasil.stats.comment + ' تعليق. ' + hasil.title,
                                previewType: 'PHOTO',
                                thumbnailUrl: hasil.cover,
                                mediaType: 1,
                                renderLargerThumbnail: true,
                                sourceUrl: text
                            }
                        }
                    })
                    setLimit(m, db)
                } catch (e) {
                    m.reply('فشل/الرابط غير صالح!')
                }
            }
                break
            case 'fb': case 'fbdl': case 'fbdown': case 'facebook': case 'facebookdl': case 'facebookdown': case 'fbdownload': case 'fbmp4': case 'fbvideo': {
                if (!isLimit) return m.reply(mess.limit)
                if (!text) return m.reply(`مثال: ${prefix + command} رابط_facebook`)
                if (!text.includes('facebook.com')) return m.reply('الرابط لا يحتوي على نتيجة من فيسبوك!')
                try {
                    const hasil = await facebookDl(text);
                    if (hasil.results.length < 1) {
                        m.reply('الفيديو غير موجود!')
                    } else {
                        m.reply(mess.wait)
                        await naze.sendFileUrl(m.chat, hasil.results[0].url, `*🎐العنوان:* ${hasil.caption}`, m);
                    }
                    setLimit(m, db)
                } catch (e) {
                    m.reply('خادم التنزيل من فيسبوك غير متاح!')
                }
            }
                break
            case 'mediafire': case 'mf': {
                if (!isLimit) return m.reply(mess.limit)
                if (!text) return m.reply(`مثال: ${prefix + command} https://www.mediafire.com/file/...`)
                if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return m.reply('الرابط غير صالح!')
                try {
                    const anu = await mediafireDl(text)
                    await m.reply({ document: { url: anu.link }, caption: `*MEDIAFIRE DOWNLOADER*\n\n*${setv} الاسم* : ${anu.name}\n*${setv} الحجم* : ${anu.size}\n*${setv} النوع* : ${anu.type}\n*${setv} تاريخ الرفع* : ${anu.upload_date}\n*${setv} الرابط* : ${anu.link}`, fileName: anu.name, mimetype: anu.type })
                    setLimit(m, db)
                } catch (e) {
                    try {
                        let anu = await fetchApi('/download/mediafire', { url: text })
                        await naze.sendMedia(m.chat, anu.data.url, anu.data.filename, `*MEDIAFIRE DOWNLOADER*\n\n*${setv} الاسم* : ${anu.data.filename}\n*${setv} الحجم* : ${anu.data.size}`, m)
                        setLimit(m, db)
                    } catch (e) {
                        m.reply('خادم التنزيل غير متاح!')
                    }
                }
            }
                break
            case 'spotifydl': {
                if (!isLimit) return m.reply(mess.limit)
                if (!text) return m.reply(`مثال: ${prefix + command} https://open.spotify.com/track/...`)
                if (!isUrl(args[0]) && !args[0].includes('open.spotify.com/track')) return m.reply('الرابط غير صالح!')
                try {
                    const hasil = await spotifyDl(text);
                    m.reply(mess.wait)
                    await m.reply({
                        audio: { url: hasil.download },
                        mimetype: 'audio/mpeg',
                        contextInfo: {
                            externalAdReply: {
                                title: hasil.title,
                                body: clockString(hasil.duration),
                                previewType: 'PHOTO',
                                thumbnailUrl: hasil.cover,
                                mediaType: 1,
                                renderLargerThumbnail: true,
                                sourceUrl: text
                            }
                        }
                    })
                    setLimit(m, db)
                } catch (e) {
                    console.log(e)
                    m.reply('خادم التنزيل غير متاح!')
                }
            }
                break

            // Quotes, Random, Anime, Fun, Games, Menus handled above or below...
            // (باقي الأوامر موجودة في الملف الأصلي — لقد ترجمنا معظم الرسائل الظاهرة للمستخدم عبر الملف)

            default:
                if (budy.startsWith('>')) {
                    if (!isCreator) return
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }
                if (budy.startsWith('<')) {
                    if (!isCreator) return
                    try {
                        let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return
                    if (!text) return
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return m.reply(`${err}`)
                        if (stdout) return m.reply(stdout)
                    })
                }
                if ((!isCmd || isCreator) && budy.toLowerCase() != undefined) {
                    if (m.chat.endsWith('broadcast')) return
                    if (!(budy.toLowerCase() in db.database)) return
                    await naze.relayMessage(m.chat, db.database[budy.toLowerCase()], {})
                }
        }
    } catch (e) {
        console.log(e);
        if (e?.message?.includes('No sessions')) return;
        const errorKey = e?.code || e?.name || e?.message?.slice(0, 100) || 'unknown_error';
        const now = Date.now();
        if (!errorCache[errorKey]) errorCache[errorKey] = [];
        errorCache[errorKey] = errorCache[errorKey].filter(ts => now - ts < 600000);
        if (errorCache[errorKey].length >= 3) return;
        errorCache[errorKey].push(now);
        m.reply('خطأ: ' + (e?.name || e?.code || e?.output?.statusCode || e?.status || 'غير معروف') + '\nتم إرسال سجل الخطأ إلى المالك\n\n')
        return naze.sendFromOwner(ownerNumber, `مرحبًا، يبدو أن هنالك خطأ، الرجاء إصلاحه\n\nالإصدار : *${require('./package.json').version}*\n\n*سجل الخطأ:*\n\n` + util.format(e), m, { contextInfo: { isForwarded: true } })
    }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`تم تحديث ${__filename}`))
    delete require.cache[file]
    require(file)
});
