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
    @Column(name = "name", length = 200)
    private String name;
    @Column(name = "username", length = 100, nullable = false)
    private String username;
    @Column(name= "password", length = 50, nullable = false)
    private String password;
    @Column(name = "fecha_nac")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date birthdate;
    @Column(name = "document")
    private String document;
    @ManyToOne
    @JoinColumn(name= "id_documento", referencedColumnName = "id")
    private Document documentType;
    public Integer getId() {
        return id;
    }
}
