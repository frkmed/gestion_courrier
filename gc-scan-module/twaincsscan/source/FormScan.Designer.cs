namespace TWAINCSScan
{
    partial class FormScan
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(FormScan));
            this.m_pictureboxImage1 = new System.Windows.Forms.PictureBox();
            this.m_buttonScan = new System.Windows.Forms.Button();
            this.m_buttonClose = new System.Windows.Forms.Button();
            this.m_buttonOpen = new System.Windows.Forms.Button();
            this.m_buttonStop = new System.Windows.Forms.Button();
            this.m_buttonAttach = new System.Windows.Forms.Button();
            this.m_buttonFermer = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.m_pictureboxImage1)).BeginInit();
            this.SuspendLayout();
            // 
            // m_pictureboxImage1
            // 
            this.m_pictureboxImage1.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.m_pictureboxImage1.Location = new System.Drawing.Point(13, 49);
            this.m_pictureboxImage1.Margin = new System.Windows.Forms.Padding(4);
            this.m_pictureboxImage1.Name = "m_pictureboxImage1";
            this.m_pictureboxImage1.Size = new System.Drawing.Size(446, 521);
            this.m_pictureboxImage1.TabIndex = 0;
            this.m_pictureboxImage1.TabStop = false;
            // 
            // m_buttonScan
            // 
            this.m_buttonScan.Location = new System.Drawing.Point(251, 578);
            this.m_buttonScan.Margin = new System.Windows.Forms.Padding(4);
            this.m_buttonScan.Name = "m_buttonScan";
            this.m_buttonScan.Size = new System.Drawing.Size(100, 28);
            this.m_buttonScan.TabIndex = 1;
            this.m_buttonScan.Text = "Lancer";
            this.m_buttonScan.UseVisualStyleBackColor = true;
            this.m_buttonScan.Click += new System.EventHandler(this.m_buttonScan_Click);
            // 
            // m_buttonClose
            // 
            this.m_buttonClose.Location = new System.Drawing.Point(139, 13);
            this.m_buttonClose.Margin = new System.Windows.Forms.Padding(4);
            this.m_buttonClose.Name = "m_buttonClose";
            this.m_buttonClose.Size = new System.Drawing.Size(216, 28);
            this.m_buttonClose.TabIndex = 5;
            this.m_buttonClose.Text = "Déconnecter le périphérique";
            this.m_buttonClose.UseVisualStyleBackColor = true;
            this.m_buttonClose.Click += new System.EventHandler(this.m_buttonClose_Click);
            // 
            // m_buttonOpen
            // 
            this.m_buttonOpen.Location = new System.Drawing.Point(13, 13);
            this.m_buttonOpen.Margin = new System.Windows.Forms.Padding(4);
            this.m_buttonOpen.Name = "m_buttonOpen";
            this.m_buttonOpen.Size = new System.Drawing.Size(118, 28);
            this.m_buttonOpen.TabIndex = 6;
            this.m_buttonOpen.Text = "Périphérique...";
            this.m_buttonOpen.UseVisualStyleBackColor = true;
            this.m_buttonOpen.Click += new System.EventHandler(this.m_buttonOpen_Click);
            // 
            // m_buttonStop
            // 
            this.m_buttonStop.Location = new System.Drawing.Point(359, 578);
            this.m_buttonStop.Margin = new System.Windows.Forms.Padding(4);
            this.m_buttonStop.Name = "m_buttonStop";
            this.m_buttonStop.Size = new System.Drawing.Size(100, 28);
            this.m_buttonStop.TabIndex = 7;
            this.m_buttonStop.Text = "Arrêter";
            this.m_buttonStop.UseVisualStyleBackColor = true;
            this.m_buttonStop.Click += new System.EventHandler(this.m_buttonStop_Click);
            // 
            // m_buttonAttach
            // 
            this.m_buttonAttach.Location = new System.Drawing.Point(13, 578);
            this.m_buttonAttach.Margin = new System.Windows.Forms.Padding(4);
            this.m_buttonAttach.Name = "m_buttonAttach";
            this.m_buttonAttach.Size = new System.Drawing.Size(100, 28);
            this.m_buttonAttach.TabIndex = 1;
            this.m_buttonAttach.Text = "Attacher";
            this.m_buttonAttach.UseVisualStyleBackColor = true;
            this.m_buttonAttach.Click += new System.EventHandler(this.m_buttonAttach_Click);
            // 
            // m_buttonFermer
            // 
            this.m_buttonFermer.Location = new System.Drawing.Point(363, 13);
            this.m_buttonFermer.Margin = new System.Windows.Forms.Padding(4);
            this.m_buttonFermer.Name = "m_buttonFermer";
            this.m_buttonFermer.Size = new System.Drawing.Size(96, 28);
            this.m_buttonFermer.TabIndex = 6;
            this.m_buttonFermer.Text = "Fermer";
            this.m_buttonFermer.UseVisualStyleBackColor = true;
            this.m_buttonFermer.Click += new System.EventHandler(this.m_buttonFermer_Click);
            // 
            // FormScan
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(472, 619);
            this.Controls.Add(this.m_buttonStop);
            this.Controls.Add(this.m_buttonFermer);
            this.Controls.Add(this.m_buttonOpen);
            this.Controls.Add(this.m_buttonClose);
            this.Controls.Add(this.m_buttonAttach);
            this.Controls.Add(this.m_buttonScan);
            this.Controls.Add(this.m_pictureboxImage1);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.Margin = new System.Windows.Forms.Padding(4);
            this.MaximizeBox = false;
            this.MinimizeBox = false;
            this.Name = "FormScan";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Module Scan Courrier";
            ((System.ComponentModel.ISupportInitialize)(this.m_pictureboxImage1)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.PictureBox m_pictureboxImage1;
        private System.Windows.Forms.Button m_buttonScan;
        private System.Windows.Forms.Button m_buttonClose;
        private System.Windows.Forms.Button m_buttonOpen;
        private System.Windows.Forms.Button m_buttonStop;
        private System.Windows.Forms.Button m_buttonAttach;
        private System.Windows.Forms.Button m_buttonFermer;
    }
}