package com.cibertec.waifustore.waifustore.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Entity
@Table(name = "usuario")
@Data
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "nombre", length = 200)
    private String name;
    @Column(name = "email", length = 100, nullable = false)
    private String email;
    @Column(name= "password_hash", length = 50, nullable = false)
    private String password;
    @Column(name = "fecha_nac")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date birthdate;
    @ManyToOne
    @JoinColumn(name= "id_documento", referencedColumnName = "id")
    private Document document;
    public Integer getId() {
        return id;
    }
}
