import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import shortid from 'shortid';
import Block from './components/Block.js';
import TitleBlockList from './components/TitleBlockList.js';
import List from './components/List.js';
import ListItem from './components/ListItem.js';
import Teaser from './components/Teaser.js';
import Stocks from './components/Stocks.js';
import Search from './components/Search.js';
import Banner from './components/Banner.js';
import Weather from './components/Weather.js';
import {dataBanner, dataStream, dataTeaser, dataVisited, listNews, searchLink, titleNews, tvProgramm} from "./data";

function App() {

  return (
    <React.Fragment>
      <Block className='top-block'>
        <Block className='news'>
          <TitleBlockList items={titleNews}>
            <span className='date'>31 июня, среда 02 32</span>
          </TitleBlockList>
          <List>
            {listNews.map((item) => <ListItem key={shortid.generate()} item={item} />)}
          </List>
          <Block className='stocks'>
            <Stocks />
          </Block>
        </Block>
        <Block className='teaser'>
          <Teaser {...dataTeaser} />
        </Block>
      </Block>
      <Block className='search'>
        {searchLink.map((item) => <a key={shortid.generate()} href='/#'>{item}</a>)}
        <Search />
        <span>Найдется всё. Например, <span className='exa-searche'>фазы луны сегодня</span></span>
      </Block>
      <Block className='banner'>
        <Banner {...dataBanner} />
      </Block>
      <Block className='columns'>
        <Block className='col-4'>
          <Block className='weather'>
          <TitleBlockList items={[{
            href: '#',
            text: 'Погода',
          }]} />
            <Weather />
          </Block>
          <Block className='visited'>
            <TitleBlockList items={[{
              href: '#',
              text: 'Посещаемое',
            }]} />
            <List>
              {dataVisited.map((item) => <ListItem key={shortid.generate()} item={item}>
                {item.text}
              </ListItem>)}
          </List>
          </Block>
        </Block>
        <Block className='col-4'>
          <Block className='maps'>
            <a href='/#'>Карта Германии</a>
            <p>Рассписание</p>
          </Block>
          <Block className='tv'>
            <TitleBlockList items={[{
              href: '#',
              text: 'Телепрограмма',
            }]}>
              <span className='tv-show'>Эфир</span>
            </TitleBlockList>
            <List>
              {tvProgramm.map((item) => <ListItem key={shortid.generate()} item={item}>
                {item.text}
              </ListItem>)}
            </List>
          </Block>
        </Block>
        <Block className='col-4'>
        <Block className='stream'>
            <TitleBlockList items={[{
              href: '#',
              text: 'Эфир',
            }]} />
            <List>
              {dataStream.map((item) => <ListItem key={shortid.generate()} item={item}>
                {item.text}
              </ListItem>)}
            </List>
          </Block>
        </Block>
      </Block>
    </React.Fragment>
  );
}

export default App;
