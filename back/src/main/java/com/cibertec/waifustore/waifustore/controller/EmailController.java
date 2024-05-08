package com.cibertec.waifustore.waifustore.controller;

import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/email")
public class EmailController {
    @Autowired
    private JavaMailSender mailSender;
    @PostMapping("/subscribe")
    public ResponseEntity<?> sendWelcomeEmail(@RequestParam("email") String email) {
        try {
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, false);

            helper.setTo(email);
            helper.setFrom("shuertas981@gmail.com");
            helper.setSubject("Bienvenido a Nuestra Comunidad WaifuStore!");
            helper.setText("¡Hola! Gracias por suscribirte. Esperamos que disfrutes de nuestro contenido.");

            mailSender.send(mimeMessage);
            return ResponseEntity.ok("{\"message\":\"Mensaje de bienvenida enviado exitosamente\"}");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("{\"message\":\"Error al enviar el mensaje de bienvenida\"}");
        }
    }
}
