import React, { memo } from 'react';
import Toolbar from '../../containers/Toolbar';
import Gallery from '../../containers/Gallery';
import Modal from '../../containers/Modal';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';

const Dashboard = memo(() => (
  <>
    <Header>
      <Toolbar />
    </Header>
    <Main>
      <Gallery />
    </Main>
    <Modal />
  </>
));

export default Dashboard;
