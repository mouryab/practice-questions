class Multiplication


  def self.karastuba(x, y)
    return 0 if (x ==  0) || (y == 0)

    n = Math.log10(x).to_i

    return x * y if n < 2

    n -= 1 unless n%2 == 0

    a = x/(10**(n/2))
    b = x % (10**(n/2))
    c = y/(10**(n/2))
    d = y % (10**(n/2))

    s1 = kart(a, c)
    s2 = kart(b, d)
    s3 = kart(a+b, c+d)

    ((10**n)* s1) + ((10**(n/2))*(s3-s1-s2)) + s2

  end

end  