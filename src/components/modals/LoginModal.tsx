import React from "react"
import {
    Modal,
    Button,
    useDisclosure,
    ModalFooter,
    ModalBody,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    Text,
    ModalOverlay,
} from "@chakra-ui/react";
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import MailIcon from '@mui/icons-material/Mail';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import styled from "styled-components"


export default function LoginModal({isOpen, onOpen, onClose}) {
    const [email, setEmail] = React.useState('USER CONTEXT MAIL');
    const [password, setPassword] = React.useState('');
    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    };

    console.log(isOpen, onOpen, onClose)
    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
      };

    return (
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Login</ModalHeader>
            <ModalCloseButton />
            <Body>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
<MailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
<TextField id="email" label="Email" variant="standard"         value={email}
onChange={handleChangeEmail} autoFocus required fullWidth/>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
<VpnKeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
<TextField id="password" label="Password" variant="standard"         value={password}
onChange={handleChangePassword} required fullWidth/>
</Box>
            </Body>

            <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                </Button>
                <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
    )
}

export const Body = styled(ModalBody)`
    padding: 30px;
`;