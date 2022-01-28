// import React from 'react'
// import {action, makeAutoObservable, observable} from 'mobx';


// class Model_ShopCart {

//     constructor(){
//         makeAutoObservable(this);
//     }
//     searchShopItems=""
//     refreshList = false
//     refreshCartList=false
//     productsSearched=false
//     supplementProducts=[]
//     sportProducts     =[]
//     filteredSupplementProducts=[]
//     filteredSportsProducts    =[]
//     itemsAddedToCart = []
//     textString = " Hello Text"
//     updatePage = false
//     total      = 0
//     @observable subTotal   = 0
//     counter    = 0
//     increaseCounter(){
//         this.counter+=1
//     }
//     emptyCart=()=>{
//         this.itemsAddedToCart.splice(0,this.itemsAddedToCart.length)
//         this.refreshCartList=!this.refreshCartList
//         this.total=0
//     }
//     filterProducts=(val:string)=>{
//         console.log('SHOP PRODUCTS FILTERED VAL =>',val)
//         console.log(`FILTER-SEARCHES -> ${val}`)
//         if(val.length>1){
//             this.productsSearched=true
//         }else{
//             this.productsSearched=false
//         }
//         const formattedQuery = val.toLowerCase()
//         const newDataSupplement = this.supplementProducts.filter(item => {
//             const itemData =  {...item,title:item.title.toLowerCase()}
//             const textData = val.toLowerCase();
//             return itemData.title.indexOf(textData)>-1;
//         });
//         this.filteredSupplementProducts=newDataSupplement
//         const newDataSport = this.sportProducts.filter(item => {
//             const itemData =  {...item,title:item.title.toLowerCase()}
//             const textData = val.toLowerCase();
//             return itemData.description.indexOf(textData)>-1;
//         });
//         this.filteredSportsProducts=newDataSport
//         this.refreshList=!this.refreshList
//     }
//     pushSport=(val)=>{
//         this.sportProducts.push(val)
//     }
//     pushSupplement=(val)=>{
//         this.supplementProducts.push(val)
//     }
//     emptySupplement=()=>{
//         this.supplementProducts.splice(0,this.supplementProducts.length)
//     }
//     productAddToCartBool=(product)=>{
//         product.isAddedToCart = !product.isAddedToCart
//     }
//     upgradeQuantity=(index:number)=>{
//         let item = this.itemsAddedToCart[index]
//         if(item.initialQuantity<item.quantity) {
//             item.price += item.initialPrice
//             item.initialQuantity++
//             this.addToTotal(item.initialPrice)
//         }
//     }
//     downgradeQuantity=(index:number)=>{
//         let item = this.itemsAddedToCart[index]
//         if(item.initialQuantity!=1){
//             item.price -= item.initialPrice
//             item.initialQuantity--
//             this.subtractFromTotal(item.initialPrice)
//         }
//     }
//     addItemToCart(product) {
//         console.log(`ADD ITEM TO CART${product.initialPrice}`)
//         this.itemsAddedToCart.push(product)
//         this.addToTotal(product.initialPrice)
//     }
//     deletItemFromCart(product){
//         console.log(`DELETE ITEM TO CART`)
//         this.itemsAddedToCart.map((item,index) => {
//             if( product.id === item.id ){
//                 this.itemsAddedToCart.splice( index , 1 )
//                 this.subtractFromTotal(product.initialPrice)
//             }
//         })
//     }
//     @action recalculateTotal ( product ) {
//         this.total += product.price * product.quantity
//     }
//     addToTotal=(price:number)=>{
//         this.total+=price
//     }
//     subtractFromTotal=(price:number)=>{
//         this.total-=price
//     }
// }
// const shopCart = new Model_ShopCart()

// const ShopCartContext  =  React.createContext( shopCart )
// const useShopCart=()=>React.useContext( ShopCartContext )
// export { ShopCartContext , useShopCart } ;
