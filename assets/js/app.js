new Vue({
    el: '#app',
    data: {
        genero: '',
        quadroGenero: true,
        quadroBatalha: false,
        personagem: '',
        monster: '../assets/img/avatars/monster.gif',
        vidaPerson: 100,
        vidaMonster: 100,
        msgPerson: '',
        msgMonstro: '',
    },
    methods: {
        getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min
        },
        changeGenero(escolhaGenero){
            this.genero = escolhaGenero
        },
        atacar(){
            // Ataque do Personagem
            let atkPerson = this.getRandomNumber(3, 20)
            if (this.vidaMonster <= atkPerson){
                this.vidaMonster = 0
            }else{
                this.vidaMonster -= atkPerson
                this.msgPerson = ("Deferiu um golpe de ataque de " + atkPerson.toString())
            }
            // Ateque do monstro
            let atkMonstro = this.getRandomNumber(5, 20)
            if (this.vidaPerson <= atkMonstro) {
                this.vidaPerson = 0
            } else {
                this.vidaPerson -= atkMonstro
                this.msgMonstro = ("O monstro deferiu um golpe de " + atkMonstro.toString())
            }
        },
        atacarEspecial() {
            // Ataque do Personagem
            let atkPerson = this.getRandomNumber(15, 25)
            if (this.vidaMonster <= atkPerson) {
                this.vidaMonster = 0
            } else {
                this.vidaMonster -= atkPerson
                this.msgPerson = ("Deferiu um golpe de ataque espeial de " + atkPerson.toString())
            }
            // Ateque do monstro
            let atkMonstro = this.getRandomNumber(10, 20)
            if (this.vidaPerson <= atkMonstro) {
                this.vidaPerson = 0
            } else {
                this.vidaPerson -= atkMonstro
                this.msgMonstro = ("O monstro deferiu um golpe de " + atkMonstro.toString())
            }
        },
        curar(){
            // Cura do Personagem
            let qtCura = this.getRandomNumber(5, 15)
            if ((this.vidaPerson + qtCura) >= 100){
                this.vidaPerson = this.vidaPerson
            } else {
                this.vidaPerson += qtCura
            }
            // Ateque do monstro
            let atkMonstro = this.getRandomNumber(5, 10)
            if (this.vidaPerson <= atkMonstro) {
                this.vidaPerson = 0
            } else {
                this.vidaPerson -= atkMonstro
            }
        },
        desistir(){
            this.quadroGenero = true
            this.quadroBatalha = false
            this.vidaPerson = 100
            this.vidaMonster = 100
        }
    },
    computed: {
        vidaPersonagem(){
            return {
                width: this.vidaPerson + "%"
            }
        },
        vidaMonstro() {
            return {
                width: this.vidaMonster + "%"
            }
        }
    },
    watch: {
        genero(novo){
            this.quadroGenero = false
            this.quadroBatalha = true
            if(novo == 'male'){
                this.personagem = '../assets/img/avatars/male.gif'
            }else{
                this.personagem = '../assets/img/avatars/female.gif'
            }
        } 
    },
})