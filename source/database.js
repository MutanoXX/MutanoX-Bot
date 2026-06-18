/*
  ⚠️ Please Don't Change This Credit
  MutanoX Script
  Tiktok : MutanoX
  Version : VIP/BUYER ENC
  Creator : MutanoX 
  
  SCRIPT INI RESMI DIJUAL OLEH SETTO
  PRICE : Rp120.000 IDR 100% NO ENC
  BUY CHAT WA.ME//6289513342847
  
*/


require('../settings');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const mongoose = require('mongoose');
let DataBase;

if (/mongo/.test("database.json")) {
	DataBase = class mongoDB {
		constructor(url, options = { useNewUrlParser: true, useUnifiedTopology: true }) {
			this.url = url
			this.data = {}
			this._model = {}
			this.options = options
		}
		
		read = async () => {
			mongoose.connect(this.url, { ...this.options })
			this.connection = mongoose.connection
			try {
				const schema = new mongoose.Schema({
					data: {
						type: Object,
						required: true,
						default: {},
					}
				})
				this._model = mongoose.model('data', schema)
			} catch {
				this._model = mongoose.model('data')
			}
			this.data = await this._model.findOne({})
			if (!this.data) {
				new this._model({ data: {} }).save()
				this.data = await this._model.findOne({})
			} else return this?.data?.data || this?.data
		}
		
		write = async (data) => {
			if (this.data && !this.data.data) return (new this._model({ data })).save()
			this._model.findById(this.data._id, (err, docs) => {
				if (!err) {
					if (!docs.data) docs.data = {}
					docs.data = data
					return docs.save()
				}
			})
		}
	}
} else if (/json/.test("database.json")) {
	DataBase = class dataBase {
		data = {}
		file = path.join(process.cwd(), 'library/database', "database.json");
		
		read = async () => {
			let data;
			if (fs.existsSync(this.file)) {
				// Le o arquivo como UTF-8. Se estiver vazio ou com JSON
				// invalido, reseta para {} em vez de lancar SyntaxError.
				// Isso acontece quando o bot e morto no meio de um write
				// (ex.: SIGKILL na Termux) e o arquivo fica truncado.
				const raw = fs.readFileSync(this.file, 'utf8');
				if (!raw || !raw.trim()) {
					console.warn(chalk.yellow('[database] database.json estava vazio - resetando para {}'));
					data = {};
					fs.writeFileSync(this.file, JSON.stringify(data, null, 2));
				} else {
					try {
						data = JSON.parse(raw);
					} catch (e) {
						console.warn(chalk.red(`[database] database.json corrompido: ${e.message}`));
						console.warn(chalk.yellow('[database] Fazendo backup do arquivo corrompido e resetando...'));
						try {
							const backupPath = this.file + '.corrupt.' + Date.now() + '.bak';
							fs.copyFileSync(this.file, backupPath);
							console.warn(chalk.yellow(`[database] Backup salvo em: ${backupPath}`));
						} catch (_) {}
						data = {};
						fs.writeFileSync(this.file, JSON.stringify(data, null, 2));
					}
				}
			} else {
				fs.writeFileSync(this.file, JSON.stringify(this.data, null, 2))
				data = this.data
			}
			return data
		}
		
		write = async (data) => {
			this.data = !!data ? data : global.db
			let dirname = path.dirname(this.file)
			if (!fs.existsSync(dirname)) fs.mkdirSync(dirname, { recursive: true })
			// Write atomico: escreve em .tmp primeiro, depois renomeia.
			// Evita corromper o database.json se o processo for morto
			// no meio do write (causa raiz do problema relatado).
			const tmpFile = this.file + '.tmp'
			fs.writeFileSync(tmpFile, JSON.stringify(this.data, null, 2))
			fs.renameSync(tmpFile, this.file)
			return this.file
		}
	}
}

module.exports = DataBase


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});