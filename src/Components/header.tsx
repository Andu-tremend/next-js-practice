import Grid from '@mui/material/Grid';
import logo from "../StaticFiles/SVGs/logo.svg";
import AppButton from './Buttons/button/button';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import SearchWithRefs from './Inputs/search.with.ref';
import Tooltip from '@mui/material/Tooltip';

const headerStyle = {
  justifyContent: "space-between",
  padding: "30px 7.5%",
}

const Header = () => {

  const router = useRouter()
  const searchRef: any = useRef(null)

  const handleClick = () => {
    searchRef.current.select()
  }
  
  return (
    
    <header>
      <Grid container sx={headerStyle} spacing={2}>
        <Grid item lg={2} md={6} xs={12}>
          <img onClick={() => {router.push('./')}} src={logo.src} style={{maxWidth: 119, cursor: "pointer"}} />
        </Grid>
        <Grid item lg={3} md={6} xs={10}>
          {/* <Search  placeholder="Cautare" /> */}
          <SearchWithRefs ref={searchRef} placeholder="Cautare" />
        </Grid>
        <Grid item lg={2} md={12} xs={12}>
          <Tooltip title="Incepe prin a cauta un restaurant" arrow placement="bottom">
            <span>
              <AppButton 
              className='headerButton' 
              color='secondary' 
              label='Sa incepem' 
              onClick={handleClick} />
            </span>
          </Tooltip>
        </Grid>
      </Grid>
    </header>
  )
}

export default Header