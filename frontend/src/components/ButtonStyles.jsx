import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import colors from "tailwindcss/colors";

export const IconDefault = styled(Button) (() => ({
    padding: 0,
    minWidth: '2.5rem', 
    height: '2.5rem',
    borderRadius: '100%',
    color: 'black',
    backgroundColor: colors.neutral[100],
    '&:hover': {
        backgroundColor: colors.neutral[300]
    }
    }
    
)) 

export const IconGhost = styled(Button) (() => ({
    padding: 0,
    minWidth: '2.5rem', 
    height: '2.5rem',
    borderRadius: '100%',
    color: 'black',
    '&:hover': {
        backgroundColor: colors.neutral[300]
    }
    }
)) 

export const ButtonDefault = styled(Button) (() => ({
    color: 'black',
    textTransform: 'none',
    fontSize: '0.85rem',
    borderRadius: '4px',
    backgroundColor: colors.neutral[100],
    '&:hover': {
        backgroundColor: colors.neutral[200]
    }
    }
)) 

export const ButtonGhost = styled(Button) (() => ({
    color: 'black',
    textTransform: 'none',
    fontSize: '0.85rem',
    borderRadius: '4px',
    '&:hover': {
        backgroundColor: colors.neutral[300]
    }
    }
)) 
