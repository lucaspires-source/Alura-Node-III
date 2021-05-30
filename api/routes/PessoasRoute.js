const {Router}  = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas/todas',PessoaController.pegaTodasAsPessoas)

router.get('/pessoas',PessoaController.pegaPessoasAtivas)
router.get('/pessoas/:id',PessoaController.pegaUmaPessoa)
router.post('/pessoas',PessoaController.criarPessoa)
router.put('/pessoas/:id',PessoaController.atualizarPessoa)
router.delete('/pessoas/:id',PessoaController.deletarPessoa)
router.post('/pessoas/:id/restaura',PessoaController.restauraPessoa)
router.get('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.pegaUmaMatricula)
router.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
router.put('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.atualizaMatricula)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.apagaMatricula)

module.exports = router