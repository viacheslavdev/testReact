import React from 'react'
import Header from './components/header'
import Hero from './components/hero'
import Card from './components/card'
import data from './data'


export default function App() {
    const cards = data.map(item => {
        return (
            <Card 
            key={item.id}
            {...item}
            />
        )
    }
    )
    return (
        <div>
            < Header />
            < Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}