import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';
import {
  Firestore,
  addDoc,
  getDoc,
  collection,
  getDocs,
  collectionSnapshots,
  deleteDoc,
  query,
  where,
  CollectionReference,
  doc,
  updateDoc,
} from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { DialogUpdateComponent } from '../components/dialog-update/dialog-update.component';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  listItems2: Item[] = [];
  itemsCollection = collection(this.firestore, 'items');
  itemToUpdate!: Item;

  constructor(public firestore: Firestore, public dialog: MatDialog) {
    //add full collection
    // for(let item of this.listItems){
    //   addDoc(this.itemsCollection,item);
    // }
    // this.updateItem({
    //   id: '3',
    //   name: 'Double Cheese Burger',
    //   price: 30000,
    //   quantity: 0,
    //   stock:10,
    //   image:'https://cdn.lotteria.vn/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/l/b/lb0042-online_3.png',
    // });
    // this.getData();
  }

  // Cach 1
  // async getData(){
  //   (await this.docSnap).docs.map((doc) => {
  //     console.log(doc.data())
  //   })
  // }

  // Cach 2
  async getData() {
    collectionSnapshots(this.itemsCollection).subscribe((snapshop) => {
      let result = snapshop.map((doc) => doc.data());
      this.listItems2 = result as Item[];
      // console.log(this.listItems2);
    });
  }

  listItems: Item[] = [
    {
      id: '1',
      name: 'Burger LChicken',
      price: 30000,
      quantity: 0,
      image:
        'https://cdn.lotteria.vn/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/l/b/lb0047-online_2.png',
      stock: 10,
    },
    {
      id: '2',
      name: 'Burger Bò',
      price: 25000,
      quantity: 0,
      image:
        'https://cdn.lotteria.vn/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/l/b/lb0046-online_3.png',
      stock: 10,
    },
    {
      id: '3',
      name: 'Burger Phô Mai',
      price: 39000,
      quantity: 0,
      image:
        'https://cdn.lotteria.vn/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/l/b/lb0042-online_3.png',
      stock: 10,
    },
    {
      id: '4',
      name: 'Burger Tôm',
      price: 29000,
      quantity: 0,
      image:
        'https://cdn.lotteria.vn/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/l/b/lb0007-online_3.png',
      stock: 10,
    },
    {
      id: '5',
      name: 'Burger Bò Bulgogi',
      price: 30000,
      quantity: 0,
      image:
        'https://cdn.lotteria.vn/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/l/b/lb0004-online_3.png',
      stock: 10,
    },
  ];
  open!: boolean;

  showData() {
    console.log(this.itemsCollection);
  }

  cart: Item[] = [];

  addToCart(item: Item) {
    let index = this.cart.findIndex((i) => i.id == item.id);
    console.log(index);
    if (index != -1) {
      let subIndex = this.listItems2.findIndex(
        (i) => i.id == this.cart[index].id
      );
      if (subIndex != -1 && this.listItems2[subIndex].stock > 0) {
        this.cart[index].quantity++;
        this.listItems2[subIndex].stock--;
        this.updateItem(item);
        console.log(this.cart);
        console.log(this.listItems2[subIndex].stock);
      } else {
        alert(`Item ${item.name} is out of stock`);
      }
    } else {
      let subIndex = this.listItems2.findIndex((i) => i.id === item.id);
      if (subIndex != -1 && this.listItems2[subIndex].stock > 0) {
        item.quantity++;
        this.cart.push(item);
        this.listItems2[subIndex].stock--;
        this.updateItem(item);
        console.log(this.listItems2[subIndex].stock);
        console.log(this.cart);
      }
    }
  }

  submit(item: Item) {
    addDoc(this.itemsCollection, item);
  }

  decre(item: Item) {
    let index = this.cart.findIndex((i) => i.id == item.id);
    console.log(index);
    if (index != -1) {
      this.cart[index].quantity--;
      item.stock++;
      this.updateItem(item);
    }
    if (this.cart[index].quantity == 0) {
      this.cart.splice(index, 1);
    }
  }

  incre(item: Item) {
    let index = this.cart.findIndex((i) => i.id == item.id);
    console.log(index);
    if (index != -1 && this.listItems2[index].stock > 0) {
      this.cart[index].quantity++;
      item.stock--;
      this.updateItem(item);
    } else {
      alert(`Item ${item.name} is out of stock`);
    }
  }

  remove(item: Item) {
    let index = this.cart.findIndex((e) => e.id == item.id);
    if (index != -1) {
      item.stock += this.cart[index].quantity;
      this.cart.splice(index, 1);
      this.updateItem(item);
    }
    //this.cart = [];
    item.quantity = 0;
  }

  deleteCard(item: Item) {
    let index = this.listItems2.findIndex((i) => {
      return i.id == item.id;
    });
    if (index != -1) {
      this.listItems2.splice(index, 1);
    } else {
      return;
    }
    this.deleteItem(item.id);
  }

  async deleteItem(id: string) {
    let q = query(this.itemsCollection, where('id', '==', id));
    let docSnap = await getDocs(q);
    await deleteDoc(docSnap.docs[0].ref);
  }

  async updateItemDialog(item: Item) {
    // this.dialog.open(DialogUpdateComponent)
    this.itemToUpdate = item;
    console.log(item);
    let q = query(this.itemsCollection, where('id', '==', item.id));
    let docSnap = await getDocs(q);
    await updateDoc(docSnap.docs[0].ref, { ...item });
  }

  async updateItem(item: Item) {
    let q = query(this.itemsCollection, where('id', '==', item.id));
    let docSnap = await getDocs(q);
    await updateDoc(docSnap.docs[0].ref, { ...item });
  }
}
