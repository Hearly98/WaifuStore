package com.cibertec.waifustore.waifustore.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;


@Entity
@Table(name = "trabajador")
@Data
@Getter
@Setter
public class Worker {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "id_user", referencedColumnName = "id")
    private User id_user;

    @ManyToOne
    @JoinColumn(name = "id_rol", referencedColumnName = "id")
    private Roles rol;

    public Integer getId() {
        return id;
    }
}
