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
    Optional<User> findByUsername(String username);

}
