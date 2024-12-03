import turtle

# Screen setup
screen = turtle.Screen()
screen.title("GOA-ს სასახლე მეფით და დედოფლით")
screen.bgcolor("skyblue")

# Function to draw a rectangle
def draw_rectangle(t, width, height, color):
    t.fillcolor(color)
    t.begin_fill()
    for _ in range(2):
        t.forward(width)
        t.left(90)
        t.forward(height)
        t.left(90)
    t.end_fill()

# Function to draw the castle
def draw_castle():
    t = turtle.Turtle()
    t.speed(3)
    t.penup()
    t.goto(-200, -150)
    t.pendown()
    
    # Draw the base of the castle
    draw_rectangle(t, 400, 200, "gray")
    
    # Draw towers
    for x in [-200, 0, 200]:
        t.penup()
        t.goto(x, 50)
        t.pendown()
        draw_rectangle(t, 60, 100, "gray")
        
        # Tower roof
        t.fillcolor("darkred")
        t.begin_fill()
        for _ in range(3):
            t.forward(60)
            t.left(120)
        t.end_fill()
    
    # Flag on middle tower
    t.penup()
    t.goto(30, 150)
    t.pendown()
    t.pensize(3)
    t.color("black")
    t.goto(30, 250)
    t.fillcolor("white")
    t.begin_fill()
    t.goto(90, 230)
    t.goto(30, 210)
    t.goto(30, 250)
    t.end_fill()
    
    t.penup()
    t.goto(50, 230)
    t.color("black")
    t.write("GOA", align="center", font=("Arial", 10, "bold"))
    t.hideturtle()

# Function to draw the king and queen
def draw_king_and_queen():
    t = turtle.Turtle()
    t.speed(3)
    
    # Draw king
    t.penup()
    t.goto(-100, -150)
    t.pendown()
    t.fillcolor("blue")
    t.begin_fill()
    t.circle(50)
    t.end_fill()
    
    t.penup()
    t.goto(-100, -70)
    t.pendown()
    t.color("gold")
    t.fillcolor("gold")
    t.begin_fill()
    for _ in range(3):
        t.forward(50)
        t.left(120)
    t.end_fill()
    
    # Draw queen
    t.penup()
    t.goto(100, -150)
    t.pendown()
    t.fillcolor("pink")
    t.begin_fill()
    t.circle(50)
    t.end_fill()
    
    t.penup()
    t.goto(100, -70)
    t.pendown()
    t.color("purple")
    t.fillcolor("purple")
    t.begin_fill()
    for _ in range(4):
        t.forward(30)
        t.left(90)
    t.end_fill()
    t.hideturtle()

# Main function call
draw_castle()
draw_king_and_queen()

# Keep the window open
screen.mainloop()
