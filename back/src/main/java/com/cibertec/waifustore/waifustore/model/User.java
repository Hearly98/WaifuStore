package com.cibertec.waifustore.waifustore.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Entity
@Table(name = "user")
@Data
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "nombre", length = 200)
    private String name;
    @Column(name = "email", length = 100, nullable = false)
    private String email;
    @Column(name= "password_hash", length = 50, nullable = false)
    private String password;
    @Column(name = "fecha_nac")
    @JsonFormat(pattern = "ddMMyyyy")
    private Date birthdate;
    @ManyToOne
    @JoinColumn(name= "id_documento", referencedColumnName = "id")
    private Document document;
    public Integer getId() {
        return id;
    }
}
