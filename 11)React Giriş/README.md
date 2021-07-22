**Projeyi Başlatmak**
- klasöre geçelim
`cd camp-project`

- ayağa kaldıralım 
`npm start`

**Ders İçerisinden Notlar**

**App.js** -> route component görevini görür
Bu js dosyamıza eşlik edecek bir App.css dosyamız var css kodlarımız burada yer alır.

**App.test.js** -> Unit testler de yazabiliyoruz React uygulamamızda

- App.js aslında bir fonksiyondur da ve direkt bir return ifadesine sahiptir
- Componentimizin görüntüsü aslında return içerisinde yazan kodtur
- return içerisinde html görünümlü javascript yazarız -> **jsx**

Burada biz component mimarisi kurarız; içerisinde yer alan kodlar bir xml syntaxı formatındadır.

**className** -> htmlde kulllanılan class'a denk gelir

- Js kodlarını süslü parantez içerisinde kullanabiliyoruz.

**Index.js** ->  Burası bizim ana componentimiz, ilk başlatılacak olan js dosyamızdır.

Bir component içerisindeki datayı başka bir component içerisinde kullanabilmek durum yönetimidir. (**State Management**)


**Index.js**
App componenti root`a yerleştirmek
```javascript
ReactDOM.render(
    <App />,document.getElementById('root')
);
```
Peki bu root nerede;
**Public/index.html**
body içerisinde ````<div id ="root">````


App.js içerisine baktığımızda return içerisinde bir divimiz var.
Jsx yazdığımız zaman react componentleri için bir container elemente ihtiyaç duyarız.
```javascript
return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
```
Görüldüğü üzere className değeri App olan bir div container.

### Kurulan Paketler
Semantic UI React
```bash
npm install semantic-ui-react semantic-ui-css
```
Axios
```bash
npm install axios
```

- src içerisindeki layouts ve pages klasörleri içerisine component eklemeleri yapıldı.
- Planlanan component hiyerarşisine göre birbiri içerisinde çağrıldı.

**services** klasörü
Api isteklerimi ve uygulama mantığı ile ilgili kodları bu klasör içerisine koyarım.

**export** keyword -> dışarıya açmak için
**default** keyword -> direkt ismi ile kullanmak için

İstek atmak için axios kullanacağız

**productService.js**
```javascript
import axios from "axios";
export default class ProductService {
  getProducts() {
    return axios.get("http://localhost:8080/api/products/getall")
  }
}
```
Ürün listesi sayfasında gelen verileri listelemek
**ProductList.js**
```javascript
  const [products, setProducts] = useState([]);
  
  //sayfa yüklendiğinde bunu çalıştırır
  useEffect(() => {
    let productService  = new ProductService()
    productService.getProducts() //promise döner
    .then(result => setProducts(result.data.data)) //başarılı
    .catch() //başarısız
  })
```

- useState bir nesne döner onu destruct ederiz.
- Döndürdüğü yapıda bir data ve bir fonksiyon vardır. (product ve setProducts)
- products`ın default değeri şu anda boş bir dizi, yani useState başlangıç durumu.

```javascript
<Table.Body>
          {products.map((product) => (
            <Table.Row key={product.id}>
              <Table.Cell>{product.productName}</Table.Cell>
              <Table.Cell>{product.unitPrice}</Table.Cell>
              <Table.Cell>{product.unitsInStock}</Table.Cell>
              <Table.Cell>{product.quantityPerUnit}</Table.Cell>
              <Table.Cell>{product.category.categoryName}</Table.Cell>
            </Table.Row>
          ))}
</Table.Body>
```
