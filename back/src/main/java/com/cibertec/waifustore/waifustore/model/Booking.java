package com.cibertec.waifustore.waifustore.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Entity
@Table(name = "reservas")
@Data
@Getter
@Setter
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "codigo_reserva", length = 100)
    private String codigoReserva;

    @ManyToOne
    @JoinColumn(name = "id_producto", referencedColumnName = "id")
    private Product producto;

    @Column(name = "cant_producto")
    private Integer cantidad;

    @Column(name = "monto")
    private Float monto;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Column(name = "fecha")
    @Temporal(TemporalType.DATE)
    private Date fecha;

    @ManyToOne
    @JoinColumn(name = "id_cliente", referencedColumnName = "id")
    private Client cliente;

    @ManyToOne
    @JoinColumn(name = "id_estado", referencedColumnName = "id")
    private State estado;

}

