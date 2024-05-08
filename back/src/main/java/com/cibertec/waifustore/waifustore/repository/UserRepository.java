package com.cibertec.waifustore.waifustore.repository;

import com.cibertec.waifustore.waifustore.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.Optional;
import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    @Query("SELECT u FROM User u WHERE NOT EXISTS (SELECT w FROM Worker w WHERE w.id_user.id = u.id)")
    List<User> findUserWithoutRolWorker();

    @Query("SELECT u FROM User u LEFT JOIN FETCH u.client c LEFT JOIN FETCH c.roles r LEFT JOIN FETCH u.worker w LEFT JOIN FETCH w.rol WHERE u.username = :username")
    Optional<User> findByUsernameWithRoles(String username);

    Optional<User> findByUsername(String username);
}
