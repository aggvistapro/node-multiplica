const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
	case 'crear':
		console.log('Crear');
		console.log(typeof argv.base);
		console.log(typeof argv.limite);
		crearArchivo(Number(argv.base), Number(argv.limite))
			.then((archivo) => console.log(`Archivo creado: ${archivo}`))
			.catch((err) => console.log(err));
		break;
	case 'listar':
		listarTabla(argv.base, argv.limite);
		break;
	default:
		console.log('Comando no reconocido');
		break;
}
// console.log(argv.base);

// let base = 13;
