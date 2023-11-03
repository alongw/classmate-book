import figlet from 'figlet'
import logger from './utils/log.js'

console.log(`\n${figlet.textSync('ClassMate - Book')}\n`)
logger.info(`ClassMate - Book 正在启动`)

await import('./utils/start.js')
