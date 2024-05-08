package com.cibertec.waifustore.waifustore.controller;

import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

public class EmailController {
    @Autowired
    private JavaMailSender mailSender;

    @PostMapping("/sendEmail")
    public ResponseEntity<?> sendEmailsForSales(
            @RequestParam("name") String name,
            @RequestParam("socialReason") String socialReason,
            @RequestParam("phone") String phone,
            @RequestParam("message") String message,
            @RequestParam("email") String email,
            @RequestParam(value="file", required = false) MultipartFile file
    ) {
        try{

            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);
            helper.setTo(email);
            helper.setFrom("empresa@gmail.com");
            helper.setSubject("Nuevo Pedido de: " + name);

            String emailContent = String.format(
                    "Has recibido un nuevo pedido de: %s\n\n Razon Social: %s\n\nCelular de Contacto: %s\n\nDNI/RUC: %s\n\nDetalles del pedido:\n%s",
                    name, socialReason, phone, message
            );

            helper.setText(emailContent);

            if(file != null && !file.isEmpty()){
                helper.addAttachment(file.getOriginalFilename(),file);
            }
            mailSender.send(mimeMessage);
            return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body("{\"message\":\"Correo enviado exitosamente\"}");
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.APPLICATION_JSON).body("{\"message\":\"Error al enviar el correo\"}");
        }

}

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
