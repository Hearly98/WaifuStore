package com.cibertec.waifustore.waifustore.implement;

import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import com.cibertec.waifustore.waifustore.repository.UserRepository;
import com.cibertec.waifustore.waifustore.model.User;
import com.cibertec.waifustore.waifustore.model.Worker;
import com.cibertec.waifustore.waifustore.model.Client;

import java.util.HashSet;
import java.util.Set;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsernameWithRoles(username)
                .orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado con username: " + username));

        Set<SimpleGrantedAuthority> authorities = new HashSet<>();
        Worker worker = user.getWorker();
        if (worker != null && worker.getRol() != null) {
            authorities.add(new SimpleGrantedAuthority("ROLE_" + worker.getRol().getNombreRol()));
        }

        Client client = user.getClient();
        if (client != null && client.getRoles() != null) {
            authorities.add(new SimpleGrantedAuthority("ROLE_" + client.getRoles().getNombreRol()));
        }
        return new org.springframework.security.core.userdetails.User(
                user.getUsername(),
                user.getPassword(),
                authorities
        );
    }
}
