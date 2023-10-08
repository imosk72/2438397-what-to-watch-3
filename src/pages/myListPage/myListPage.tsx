import {ReactElement} from 'react';
import {Footer} from '../../components/footer/footer';
import {Catalog} from '../../components/catalog/catalog';
import {Logo} from '../../components/logo/logo';
import {UserBlock} from '../../components/userBlock/userBlock';

import {MY_FILMS} from '../../mocks/mocks';

export function MyListPage(): ReactElement {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{MY_FILMS.length}</span></h1>
        <UserBlock />
      </header>

      <Catalog needRenderGenres={false} needRenderShowMoreButton={false} filmsCardsList={MY_FILMS} />
      <Footer/>
    </div>
  );
}