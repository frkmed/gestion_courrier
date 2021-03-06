﻿///////////////////////////////////////////////////////////////////////////////////////
//
//  TWAINCSScan.Program
//
//  Our entry point.
//
///////////////////////////////////////////////////////////////////////////////////////
//  Author          Date            Version     Comment
//  M.McLaughlin    21-May-2014     2.0.0.0     64-bit Linux
//  M.McLaughlin    27-Feb-2014     1.1.0.0     ShowImage additions
//  M.McLaughlin    21-Oct-2013     1.0.0.0     Initial Release
///////////////////////////////////////////////////////////////////////////////////////
//  Copyright (C) 2013-2017 Kodak Alaris Inc.
//
//  Permission is hereby granted, free of charge, to any person obtaining a
//  copy of this software and associated documentation files (the "Software"),
//  to deal in the Software without restriction, including without limitation
//  the rights to use, copy, modify, merge, publish, distribute, sublicense,
//  and/or sell copies of the Software, and to permit persons to whom the
//  Software is furnished to do so, subject to the following conditions:
//
//  The above copyright notice and this permission notice shall be included in
//  all copies or substantial portions of the Software.
//
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//  DEALINGS IN THE SOFTWARE.
///////////////////////////////////////////////////////////////////////////////////////

using Fleck;
using System;
using System.Windows.Forms;

namespace TWAINCSScan
{
    static class Program
    {
        public static IWebSocketConnection clientSocket = null;
        /// <summary>
        /// The main entry point for the application.
        /// </summary>
        [STAThread]
        static void Main()
        {
            
            FormScan formscan = null;
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            formscan = new FormScan();


            var server = new WebSocketServer("ws://0.0.0.0:8181");
            server.Start(socket =>
            {
                clientSocket = socket;
                socket.OnOpen = () => formscan.Invoke(new MethodInvoker(formscan.Show));
                socket.OnClose = () => formscan.Invoke(new MethodInvoker(formscan.Hide));
                socket.OnMessage = message => socket.Send(message);
            });
            NotifyIcon notifyIcon1 = new NotifyIcon();
            notifyIcon1.Icon = new System.Drawing.Icon(@"scanner.ico");
            notifyIcon1.Text = "GC Scan Module";
            notifyIcon1.Visible = true;
            notifyIcon1.BalloonTipIcon = ToolTipIcon.Info;
            notifyIcon1.BalloonTipText = "Module GC Scan est lancé !";
            notifyIcon1.BalloonTipTitle = "Information";
            notifyIcon1.ShowBalloonTip(1000);

            if (!formscan.ExitRequested())
            {
                Application.Run();
            }
            formscan = null;

            
            Application.Exit();
        }
    }
}
