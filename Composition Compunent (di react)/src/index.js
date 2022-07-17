import React from 'react';
import { createRoot } from 'react-dom/client';

function SearchBar() {
    return (
        <div className='search-bar__container'>
            <input type='text' placeholder='Search'/>
            <div className='search-bar__in_stock_checkbox'>
                <input type="checkbox"/>
                <label>Menampilkan Produk</label>
            </div>
        </div>
    )
}

function CategoryBar({category}) {
    return (
        <tr>
            <td colSpan="2">
                <strong>{category}</strong>
            </td>
        </tr>
    )        
}

function ListBar({item, harga}) {
    return(
        <tr>
            <td>{item}</td>
            <td>{harga}</td>
        </tr>
    )
}

function BodyBar() {
    return(
    <div className='product-table__container'>
        <table>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            <CategoryBar category="Sporting Goods" />
            <ListBar item="Football" harga="$49.99" />
            <ListBar item="Baseball" harga="$9.99" />
            <ListBar item="Baseketball" harga="$49.99" />
            <CategoryBar category="Electronics" />
            <ListBar item="iPod Touch" harga="$99.99" />
            <ListBar item="iPhone 5" harga="$399.99" />
            <ListBar item="Nexus 7" harga="$199.99" />
        </table>
    </div>
    )
}

function AllContent() {
    return (
        <div className='container'>
            <SearchBar />
            <ListBar />
            <BodyBar />
        </div>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(<AllContent/>);