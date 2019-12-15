/*function Observerable() {
    this.observers = [];
    this.addObserver = function (observer) {
        this.observers.push( observer );
    };
    this.sendMsg = function (msg) {
        for (let i = 0; i < this.observers.length; i++) {
            this.observers[i].send( msg )
        }
    }
}
function Observer(behaviour) {
     this.send = function (msg) {
         behaviour(msg)
     }
}
const observable = new Observerable();
const obs1 = new Observer(function (msg) {
    console.log(msg)
});
const obs2 = new Observer(function (msg) {
    console.log(msg + "s")
});

observable.addObserver(obs1);
observable.addObserver(obs2);
observable.sendMsg("ku1");*/

class Observable{
    constructor(){
        this.observers = [];
        this.addObserver = function (observer) {
            this.observers.push(observer)
        };
        this.sendMsg = function (msg, msa) {
            for (let i = 0; i < this.observers.length ; i++) {
                this.observers[i].send(msg, msa)
            }
        }
    }
}

class Observer {
    constructor(behaviour){
        this.send = function (msg1, msg2) {
            behaviour(msg1, msg2)
        }
    }
}
const observable = new Observable();
const basketImg = document.getElementById('basketImg');
const basket1 = document.getElementById('basket');
const productCount = document.getElementById('productCount');
const closeBasket = document.getElementsByClassName('basket-modal__close')[0];
const addProduct = document.getElementById('addProduct');
const list = document.getElementById('prList');
const lis = document.getElementsByClassName('item__to-basket');