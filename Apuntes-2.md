> # Aprendiendo CSS GRID

* ### **Añadir GRID desde css**

Desde los estilos debemos de escribir
```
.class-name{
    display: grid;
}
```
pero antes de eso debemos de encerrar a todas las etiquetas dentro de un contenedor o **div** ademas de asignarle un **class-name** a cada etiqueta

* ### **Añadir efecto al pasar el cursor encima**

**:Hover** sirve para dar un efecto al pasar el cursor encima de un elemento o botón. Para aplicarlo debemos de llamar a una clase con **".class-name"** desde el CSS, y después colocar **":hover"**. 

Con esto decimos que al pasar el cursor por encima haga el efecto que añademos en la clase
```
.class-name:hover{
    border: 1px solid red;
}
```
el efecto "border" añade una linea que bordea toda nuestra caja y "solid red" le da el color.